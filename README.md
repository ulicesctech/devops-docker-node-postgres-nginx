#DevOps Docker Stack Nginx, Node.js y PostgreSQL

Proyecto de laboratorio DevOps donde se construye una arquitectura multi-contenedor usando Docker Compose.

Incluye:
- API en Node.js, Express con pg
- Base de datos PostgreSQL
- Reverse Proxy con Nginx
- Healthchecks entre servicios
- Variables de entorno con .env
- Script de inicialización SQL
- Contador de hits persistente

---

##Arquitectura

Cliente >  Nginx Reverse Proxy >  Node API >  PostgreSQL

---

##Tech Stack

- Docker
- Docker Compose
- Node.js, Express
- PostgreSQL 15
- Nginx alpine
- Healthchecks
- Environment Variables
- Git con GitHub con SSH

---

##Estructura del Proyecto
