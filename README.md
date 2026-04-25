# 🚀 Dockerized Full-Stack Application (Nginx + Node.js + MySQL)

A production-style multi-container application built using Docker Compose.
This project demonstrates real-world DevOps concepts including container orchestration, reverse proxy setup, database integration, and debugging of common issues.

---

## 🏗️ Architecture

```
Client (Browser)
       ↓
Nginx (Frontend - Port 5000)
       ↓
Node.js Backend API (Port 3000)
       ↓
MySQL Database
```

---

## ⚙️ Features

* 🔹 Multi-container setup using Docker Compose
* 🔹 Nginx as reverse proxy (no CORS issues)
* 🔹 Node.js backend serving REST API
* 🔹 MySQL database with persistent storage
* 🔹 Automatic DB initialization using SQL scripts
* 🔹 Real-time data fetch from DB to UI
* 🔹 Handles real-world issues (CORS, DB readiness, networking)

---

## 📁 Project Structure

```
docker-fullstack-app/
│
├── docker-compose.yml
├── nginx.conf
│
├── app/                # Frontend (HTML + JS)
│   └── index.html
│
├── backend/            # Node.js API
│   ├── server.js
│   ├── Dockerfile
│   └── wait-for-db.sh
│
├── db-init/            # DB initialization
│   └── init.sql
│
└── README.md
```

---

## 🚀 Run Locally

```bash
docker-compose up -d --build
```

Open in browser:

```
http://localhost:5000
```

---

## 🧪 API Endpoint

```
GET /api
```

### Sample Response:

```json
[
  { "id": 1, "name": "Ali" },
  { "id": 2, "name": "John" },
  { "id": 3, "name": "DevOps" }
]
```

---

## 🛠️ Tech Stack

* Docker & Docker Compose
* Node.js
* MySQL
* Nginx

---

## 🧠 Key Learnings

* Container networking & service discovery
* Reverse proxy configuration (Nginx)
* Handling CORS issues properly
* Database persistence using Docker volumes
* Debugging real-world production issues
* Managing service startup dependencies

---

## ⚠️ Notes

* Avoid using `docker-compose down -v` in production (removes DB data)
* DB is auto-initialized using scripts in `/db-init`

---

## 🚀 Future Improvements

* CI/CD pipeline using GitHub Actions
* Deployment on AWS EC2
* Add authentication system
* Use environment variables for secrets
* Monitoring & logging integration

---

## 👨‍💻 Author

**Altab Ali Labbe**
📍 Mumbai, India
🔗 https://github.com/altafali309
