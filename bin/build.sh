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
