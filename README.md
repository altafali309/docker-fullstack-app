
# 🚀 Docker Multi-Container App (Frontend + Backend + MySQL)

A full-stack application built using Docker Compose with:

- 🧠 Node.js Backend API
- 🌐 Nginx Frontend
- 🗄️ MySQL Database
- 🔁 Docker Compose Orchestration

---

## 🏗️ Architecture

Frontend (Nginx) → Backend (Node.js) → MySQL

---

## ⚙️ Features

- Fetch users from MySQL database
- Dockerized multi-container setup
- Automatic DB initialization
- Reverse proxy using Nginx
- Handles CORS and networking

---

## 🚀 Run Locally

```bash
docker-compose up -d --build
