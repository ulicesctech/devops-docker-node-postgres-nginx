DevOps Docker Stack with Node.js, PostgreSQL and Nginx

Multi-container backend architecture built using Docker Compose.
This project demonstrates service orchestration, reverse proxy configuration, persistent database storage and health monitoring in a production-like environment.

Project Overview

This repository contains a backend stack composed of:

Node.js API built with Express

PostgreSQL database with persistent storage

Nginx reverse proxy

Docker Compose orchestration

Health checks across all services

SQL initialization script

Environment-based configuration

The goal of this project is to demonstrate DevOps fundamentals applied to containerized backend systems.

Architecture

Client
→ Nginx Reverse Proxy
→ Node.js API
→ PostgreSQL Database

Nginx routes external traffic to the API.
The API connects to PostgreSQL through an internal Docker network.
Docker Compose manages networking, dependencies and service lifecycle.

Technology Stack

Docker

Docker Compose

Node.js

Express

PostgreSQL 15

Nginx Alpine

SQL initialization script

Environment variables configuration

Health checks

Persistent Docker volumes

Features

Multi-container architecture

Reverse proxy configuration

Service dependency management

Health monitoring per container

Persistent PostgreSQL storage

Automatic database initialization

Environment variable configuration

Simple persistent hit counter endpoint

Infrastructure defined as code using Docker Compose

Project Structure

api/
Node.js API source code

db/init.sql
Database initialization script

nginx.conf
Reverse proxy configuration

docker-compose.yml
Service orchestration definition

.env.example
Environment variables template

docs/evidencias/
Execution screenshots

How to Run

Clone the repository

git clone git@github.com
:ulicesctech/devops-docker-node-postgres-nginx.git
cd devops-docker-node-postgres-nginx

Create environment file

cp .env.example .env

Update the variables if necessary.

Start the stack

docker compose up -d --build

Verify running services

docker compose ps

Available Endpoints

GET /
Root endpoint

GET /health
Health check endpoint

GET /hit
Persistent hit counter

Example:

curl http://localhost:8081/

curl http://localhost:8081/health

curl http://localhost:8081/hit

Health Checks

PostgreSQL readiness validation using pg_isready

API HTTP health endpoint validation

Nginx reverse proxy health verification

Each service must report healthy status before dependent services start.

DevOps Concepts Demonstrated

Container orchestration

Reverse proxy architecture

Persistent storage in Docker

Environment configuration management

Service dependency control

Health monitoring

Infrastructure as Code

Network isolation between services

Author

Ulices Ctech
Backend and DevOps Portfolio Project
