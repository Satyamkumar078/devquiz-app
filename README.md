# DevQuiz App

A CS placement MCQ challenge app for students.  
Built with **Node.js + Express**. No database required.

**Developer:** Satyam Kumar  
**GitHub:** [Satyamkumar078](https://github.com/Satyamkumar078)

---

## Features

- 100 MCQs across 7 topics: DSA, OOP, SQL, OS, Networks, DevOps, Web
- 10 random questions per session
- Instant answer feedback
- Score result with performance rating

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express.js |
| Frontend | Vanilla HTML/CSS/JS (served by Express) |
| Container | Docker |
| CI/CD | Jenkins |

## Local Setup

```bash
git clone https://github.com/Satyamkumar078/devquiz-app.git
cd devquiz-app
npm install
node app.js
```

Visit: http://localhost:3000

## Docker Setup

```bash
docker build -t devquiz-app .
docker run -d -p 3000:3000 devquiz-app
```

## Jenkins Pipeline

The `Jenkinsfile` contains a 3-stage pipeline:

1. **Clone** — pulls code from GitHub
2. **Build Docker Image** — builds the Docker image
3. **Run Container** — runs the app on port 3000
