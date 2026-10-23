# comoreclamar.info

> ## ⚠️ DOS PENDIENTES QUE NO SE TOCAN EN CUALQUIER SESIÓN
>
> **1. El bot de contenido se cierra en una sesión propia.** Dedicada y separada del trabajo de la web:
> necesita su contexto, sus credenciales y su espacio. No se empieza en mitad de otra tarea.
>
> **2. Falta sincronizar con GitHub.** El commit `94f108b` está en local y **sin subir**: el sitio público
> no tiene todavía la herramienta nueva. **No se sube hasta que Pablo lo pida.**

Sitio estático de [comoreclamar.info](https://comoreclamar.info), hecho con
[Hugo](https://gohugo.io). El contenido vive en este repositorio: cada cambio es
un commit y una revisión, así que el historial es la garantía de que lo publicado
está comprobado.

## Cómo se organiza

```
content/          artículos y páginas en Markdown
data/             datos estructurados reutilizables
layouts/          plantillas propias (se suman a las del tema)
themes/mywiki/    tema del sitio
static/           imágenes y ficheros servidos tal cual
```

## Cómo se construye

```bash
hugo --minify --destination public
```

Para verlo en local mientras se edita:

```bash
hugo server --disableFastRender
```

## Modelo de contenido

Cada artículo lleva en su frontmatter el estado de validación:

```yaml
status: validated        # draft | review | validated | stale
validated_by: pablo      # quién lo dio por bueno
validated_at: 2026-10-22
review_due: 2027-04-22   # caducidad: fuerza una nueva revisión
sources:                 # de dónde sale cada dato que puede envejecer
  - https://ejemplo.com/pagina-oficial
generated_by: humano     # o bot/<nombre>
```

Reglas:

- **Solo se publica `status: validated`.** El resto no aparece en el sitio.
- **Sin fuente, no hay artículo.** Un dato sin `sources` no se publica: es la
  regla que evita que el contenido generado invente teléfonos, plazos o trámites.
- **`review_due` caduca.** Un proceso semanal marca como `stale` lo que pasó su
  fecha, y vuelve a la cola de revisión.

## Cómo se pide o se corrige contenido

Cualquiera puede abrir un issue desde la web del sitio:

- **Pedir un artículo**: qué empresa o administración y qué trámite.
- **Avisar de algo desactualizado**: el enlace al artículo y qué ha cambiado.

Las peticiones llegan también por el formulario de la web, que las convierte en
issues. Los issues abiertos se publican en la portada del sitio: si hay cola, se
ve.

## Estado

Proyecto en construcción: el sitio todavía no sirve el dominio principal.
