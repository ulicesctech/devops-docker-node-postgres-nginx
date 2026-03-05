# DevOps Stack (Nginx + Node.js + Postgres) con Docker Compose

## Requisitos
- Docker + Docker Compose

## Estructura
- `api/` -> API Node.js (Express + pg)
- `db/init.sql` -> SQL inicial (tabla hits)
- `nginx.conf` -> Reverse proxy a la API
- `.env` -> variables (NO subir a git)
- `.env.example` -> plantilla

## Levantar stack
```bash
docker compose up -d --build
docker compose ps
