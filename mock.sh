#!/bin/bash

pnpm build
mkdir -p dist/plugins
cp -r world/ dist/plugins/
cd dist
echo "Starting server on localhost:8080"
python3 -m http.server --bind localhost 8080
