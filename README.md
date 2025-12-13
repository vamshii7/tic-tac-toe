<div align="center">

# 🎮 Tic‑Tac‑Toe - Modern Web Game  
### A clean, responsive, theme‑adaptive Tic‑Tac‑Toe built for the web and deployed like a real production app.

---
![GitHub Stars](https://img.shields.io/github/stars/vamshii7/tic-tac-toe?style=for-the-badge)
![GitHub Forks](https://img.shields.io/github/forks/vamshii7/tic-tac-toe?style=for-the-badge)
![Docker Pulls](https://img.shields.io/docker/pulls/vamshii7/tictactoe?style=for-the-badge)
![Version](https://img.shields.io/badge/version-v3.2-blue?style=for-the-badge)

</div>

---

## 📌 Overview

This repository contains **multiple versions** of a fully‑functional Tic‑Tac‑Toe web application - evolving from a simple HTML/CSS/JS game into a **production‑ready, Dockerized, Nginx‑served, theme‑adaptive web app**.

Each version is preserved in its own directory with its own README, making the repo easy to navigate, maintain, and showcase.

This project is perfect for:

- Front‑end learning  
- UI/UX evolution tracking  
- DevOps deployment demos  
- Docker + Nginx static hosting examples  
- Portfolio presentation  

---

## 🔢 Version Index

1. [v1](./v1/)
2. [v1.1](./v1.1/)
3. [v2](./v2/)
4. [v3](./v3/)
5. [v3.1](./v3.1/)
6. [v3.2](./v3.2/)

---
## ✨ Key Highlights

### ✅ Modern Web App Evolution
- **v1 → v3.2** shows a clear progression from basic UI to a polished, animated, theme‑adaptive experience.
- Each version is isolated, documented, and production‑ready.

### ✅ DevOps‑Friendly Deployment
- Fully containerized using **Docker + Nginx**  
- Lightweight `nginx:alpine` base image  
- Zero‑config static hosting  
- DockerHub image available: `vamshii7/tictactoe`

### ✅ Front‑End Engineering Showcase
- Clean HTML structure  
- Modular CSS with themes  
- Vanilla JavaScript game logic  
- Celebration popup + confetti animation  
- Accessibility (ARIA, keyboard navigation)  

---

## 🗂️ Project Structure

## 📁 Tic‑Tac‑Toe Repository Structure
This repository contains multiple versions of a progressively enhanced Tic‑Tac‑Toe web application. Each version is isolated in its own directory with its own README, changelog, and deployment files.

### 🗂️ Root Structure

tic-tac-toe/  
│  
├── pipelines/           # CI/CD pipeline configs (optional or future use)  
├── tests/               # Test scripts or automation (optional or future use)  
│  
├── v1/                  # Initial release (light theme, auto-reset)  
├── v1.1/                # Manual reset update  
├── v2/                  # Theme toggle + UI improvements  
├── v3/                  # CPU mode, undo, Nginx hosting, Dockerfile  
├── v3.1/                # UI polish, CPU improvements, bug fixes  
├── v3.2/                # Celebration popup, confetti, theme system  
│  
├── CHANGELOG.md         # Combined changelog across all versions  
├── README.md            # Root-level project overview  
└── REPO_STRUCTURE.md    # This file  

### 📦 Version Folder Contents
Each version folder typically contains:  

vX/  
├── index.html           # Main HTML file  
├── style.css            # Core stylesheet  
├── style-dark.css       # Dark theme (v2 only)  
├── style-light.css      # Light theme (v2 only)  
├── styles.css           # Unified theme system (v3+)  
├── app.js               # Main game logic (v3+)  
├── script.js            # Legacy JS (v1–v2)  
├── server.py            # Optional local server (for testing)  
├── Dockerfile           # Dockerized static deployment  
├── nginx.conf           # Custom Nginx config  
├── README.md            # Version-specific documentation  
└── changelog.md         # Version-specific changelog  

---

## 🧠 Version Highlights

| Version | Theme Support            | Base Image      | Notes |
|---------|---------------------------|------------------|-------|
| v1      | Light only                | python:alpine    | Initial basic version |
| v1.1    | Light only                | python:alpine    | Manual reset added |
| v2      | Light + Dark              | python:alpine    | Theme toggle + UI improvements |
| v3      | Dark only                 | nginx:alpine     | CPU mode, Undo, Nginx migration |
| v3.1    | Dark + Light + Black      | nginx:alpine     | Confetti added + UI polish |
| v3.2    | Dark + Light + Black      | nginx:alpine     | Celebration popup + full theme system |

---  

## 🐳 Run Using Docker

### Pull from DockerHub
```bash
docker pull vamshii7/tictactoe:<tag>
```
### Run container
```bash
docker run -d -p 8081:80 vamshii7/tictactoe:<tag>
```
Open in browser: 👉 `http://localhost:8081`

---

## 👨‍💻 Maintainer  
**Vamshi Krishna**  
DevOps Engineer | DevOps & Kubernetes Enthusiast  
[Connect on LinkedIn](https://in.linkedin.com/in/vamshi7)  
> ⚙️ _Feel free to fork and contribute - PRs are welcome!_

---

## 📄 License
MIT License  
This software is freely available for learning, experimentation, and deployment.

---