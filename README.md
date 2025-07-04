# 🛠️ DevOps To-Do App

A simple, backend-only To-Do list application built using **Node.js** and **MongoDB**, containerized using **Docker**, and automatically deployed using **GitHub Actions** over **SSH**.

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Docker container)
- **DevOps**: Docker, Docker Compose, GitHub Actions, SSH

---

## 🚀 Features

- RESTful API endpoints for to-do tasks
- Unit/integration tests using **Jest** and **Supertest**
- Dockerized application with MongoDB service
- CI/CD with GitHub Actions:
  - Automatically runs tests
  - SSH deploys to a Linux server
  - Rebuilds and restarts Docker containers

---

## 📁 Project Structure

todo-app/
├── app/ # Express app logic
├── test/ # Jest test files
├── .env # Environment variables
├── Dockerfile # Backend Docker config
├── docker-compose.yml # Service definitions
├── package.json
├── README.md
└── .github/
└── workflows/
└── ci.yml # GitHub Actions CI/CD pipeline

---

## 🧪 Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/todo-app.git
cd todo-app
```
## Create .env File
```bash
PORT=3000
MONGO_URI=mongodb://mongo:27017/todo-app
```
## Run with Docker
```bash
docker-compose up --build
```
## Running Tests

```bash
npm install
npm test
```
## GitHub Actions CI/CD Pipeline
This project uses GitHub Actions to:
  -Run tests on every push to main
  -SSH into your server
  -Pull latest code
  -Restart Dockerized app using docker-compose

## Trigger CI/CD Deployment
```bash
git add .
git commit -m "Trigger deployment"
git push origin main
````



