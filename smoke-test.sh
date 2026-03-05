#!/usr/bin/env bash
set -e

BASE="http://127.0.0.1:${NGINX_PORT:-8081}"

echo "==> 1) Compose status"
docker compose ps

echo "==> 2) Root endpoint"
curl -s "$BASE/" | jq .

echo "==> 3) Health endpoint"
curl -s "$BASE/health"
echo

echo "==> 4) Hit counter (2 calls)"
curl -s "$BASE/hit" | jq .
curl -s "$BASE/hit" | jq .

echo "==> OK"
