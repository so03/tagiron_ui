#! /usr/bin/env zsh
set -euo pipefail

COMPONENT_FILE=src/components/$1.js

touch $COMPONENT_FILE

echo "export default function $1(props: any) {\n\n}" > $COMPONENT_FILE
