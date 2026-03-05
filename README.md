# DevOps Docker Stack with Node.js, PostgreSQL and Nginx

Multi-container backend architecture built using Docker Compose. This project demonstrates service orchestration, reverse proxy configuration, persistent database storage and health monitoring in a production-like environment.

## Project Overview

This repository contains a backend stack composed of:

- Node.js API built with Express
- PostgreSQL database with persistent storage
- Nginx reverse proxy
- Docker Compose orchestration
- Health checks across all services
- SQL initialization script
- Environment-based configuration

The goal of this project is to demonstrate DevOps fundamentals applied to containerized backend systems.

## Architecture

Client  
Nginx Reverse Proxy  
Node.js API  
PostgreSQL Database  

Nginx routes external traffic to the API.  
The API connects to PostgreSQL through an internal Docker network.  
Docker Compose manages networking, dependencies and service lifecycle.

## Technology Stack

- Docker
- Docker Compose
- Node.js
- Express
- PostgreSQL 15
- Nginx Alpine
- SQL initialization script
- Environment variables configuration
- Health checks
- Persistent Docker volumes

## Features

- Multi-container architecture
- Reverse proxy configuration
- Service dependency management
- Health monitoring per container
- Persistent PostgreSQL storage
- Automatic database initialization
- Environment variable configuration
- Persistent hit counter endpoint
- Infrastructure defined as code using Docker Compose

## Project Structure

- api/  
  Node.js API source code

- db/init.sql  
  Database initialization script

- nginx.conf  
  Reverse proxy configuration

- docker-compose.yml  
  Service orchestration definition

- .env.example  
  Environment variables template

- docs/evidencias/  
  Execution screenshots

## How to Run

### 1. Clone the repository

```bash
git clone git@github.com:ulicesctech/devops-docker-node-postgres-nginx.git
cd devops-docker-node-postgres-nginx
