#!/usr/bin/env bash
# Build reproducible del sitio: SOLO construye lo validado.
# Lo que no lleva `status: validated` se aparta antes de compilar, así que su URL
# no llega a existir (no basta con ocultarlo de los listados).
#
# Uso:  bash bin/build.sh [destino]
set -euo pipefail
cd "$(dirname "$0")/.."

DESTINO="${1:-public}"
[ $# -gt 0 ] && shift || true
APARTADOS="$(mktemp -d)"
trap 'restaurar' EXIT

restaurar() {
  if [ -d "$APARTADOS" ] && [ -n "$(ls -A "$APARTADOS" 2>/dev/null)" ]; then
    while IFS= read -r f; do
      rel="${f#"$APARTADOS"/}"
      mkdir -p "$(dirname "$rel")"
      mv "$f" "$rel"
    done < <(find "$APARTADOS" -name '*.md')
  fi
  rmdir "$APARTADOS" 2>/dev/null || true
}

apartados=0
while IFS= read -r -d '' f; do
  if ! grep -qE '^status:[[:space:]]*validated' "$f"; then
    mkdir -p "$APARTADOS/$(dirname "$f")"
    mv "$f" "$APARTADOS/$f"
    apartados=$((apartados + 1))
  fi
done < <(find content/posts -name '*.md' -print0)

echo "Artículos validados: $(find content/posts -name '*.md' | wc -l) · apartados: $apartados"

hugo --minify --destination "$DESTINO" "$@"

# La portada es la herramienta: se copia el prototipo sobre el index del tema.
# Las rutas del prototipo son absolutas, así que funciona igual en / y en /prototipo/.
if [ -f "$DESTINO/prototipo/index.html" ]; then
  # La portada es la herramienta, pero sin la etiqueta de «prototipo» ni el aviso de maqueta.
  python3 - "$DESTINO" <<'PY2'
import sys
destino = sys.argv[1]
t = open(f"{destino}/prototipo/index.html", encoding="utf-8").read()
t = t.replace("<title>Prototipo · cómoreclamar</title>",
              "<title>cómoreclamar.info · Cómo reclamar a una empresa o a una administración</title>")
t = t.replace('<div class="demo">prototipo · datos de ejemplo</div>', "")
t = t.replace("""<p><b>Prototipo de diseño.</b> Los datos de ejemplo son de muestra y la herramienta guarda todo
    en este navegador: nada se envía a ningún servidor.</p>""",
              """<p><b>cómoreclamar.info</b> · Te decimos a quién reclamar, con qué palabras y en qué plazo.
    Lo que escribes se queda en tu navegador: no se envía a ningún servidor.</p>""")
open(f"{destino}/index.html", "w", encoding="utf-8").write(t)
PY2
  echo "Portada: la herramienta (sin etiqueta de prototipo, con noindex)"
else
  echo "AVISO: no hay prototipo; la portada sigue siendo la del tema" >&2
fi
