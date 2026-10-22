#!/usr/bin/env python3
"""Recoge el estado del repositorio para la portada del sitio.

Escribe data/peticiones.json con:
  - peticiones abiertas (issues con etiqueta solicitud o validar)
  - actividad del repositorio (fecha del último commit)

Se ejecuta antes del build, en CI. Necesita un token con permiso de lectura
de issues: en GitHub Actions llega por GITHUB_TOKEN.
"""
import json
import os
import subprocess
import sys
import urllib.request

REPO = os.environ.get('REPO', 'Pablohn26/comoreclamar.info')
SALIDA = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                      'data', 'peticiones.json')
ETIQUETAS = {'solicitud', 'validar'}


def token():
    t = os.environ.get('GITHUB_TOKEN') or os.environ.get('GH_TOKEN')
    if t:
        return t
    try:
        return subprocess.run(['gh', 'auth', 'token'], capture_output=True,
                              text=True, timeout=30).stdout.strip()
    except Exception:
        return ''


def pedir(url, tok):
    req = urllib.request.Request(url)
    req.add_header('Accept', 'application/vnd.github+json')
    req.add_header('X-GitHub-Api-Version', '2022-11-28')
    req.add_header('User-Agent', 'comoreclamar-build')
    if tok:
        req.add_header('Authorization', f'Bearer {tok}')
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def main():
    tok = token()
    if not tok:
        print('AVISO: sin token; se deja el panel vacío', file=sys.stderr)
        datos = {'abiertas': [], 'total': 0, 'ultimo_commit': None}
    else:
        try:
            issues = pedir(f'https://api.github.com/repos/{REPO}/issues'
                           '?state=open&per_page=100&sort=created&direction=desc', tok)
            abiertas = []
            for i in issues:
                if 'pull_request' in i:
                    continue
                etiquetas = {l['name'] for l in i.get('labels', [])}
                if not (etiquetas & ETIQUETAS):
                    continue
                abiertas.append({
                    'numero': i['number'],
                    'titulo': i['title'],
                    'etiqueta': 'validar' if 'validar' in etiquetas else 'solicitud',
                    'fecha': i['created_at'][:10],
                    'url': i['html_url'],
                })
            ultimo = None
            try:
                commits = pedir(f'https://api.github.com/repos/{REPO}/commits?per_page=1', tok)
                if commits:
                    ultimo = commits[0]['commit']['committer']['date'][:10]
            except Exception:
                pass
            datos = {'abiertas': abiertas, 'total': len(abiertas), 'ultimo_commit': ultimo}
        except Exception as e:
            print(f'AVISO: no se pudo consultar GitHub ({e}); panel vacío', file=sys.stderr)
            datos = {'abiertas': [], 'total': 0, 'ultimo_commit': None}

    os.makedirs(os.path.dirname(SALIDA), exist_ok=True)
    with open(SALIDA, 'w', encoding='utf-8') as f:
        json.dump(datos, f, ensure_ascii=False, indent=2)
    print(f'  peticiones abiertas: {datos["total"]} · último commit: {datos["ultimo_commit"]}')


if __name__ == '__main__':
    main()
