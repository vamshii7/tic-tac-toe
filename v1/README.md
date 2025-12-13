# Tic Tac Toe - V1 (Initial Release)

V1 is the **first and simplest version** of the Tic‑Tac‑Toe web application - a clean, lightweight, browser‑based game built using **pure HTML, CSS, and JavaScript**.

---

## 🚀 Tic-Tac-Toe - Version 1

### **Directory:** `v1/`

V1 includes the foundational gameplay with:
- 🎮 Classic 3×3 Tic‑Tac‑Toe  
- 🎨 Light theme UI  
- 🔄 Auto-reset after win/draw  
- 🧱 Simple HTML/CSS layout  
- ⚡ Lightweight vanilla JavaScript logic  

---

## 🕹️ How V1 Works

### **Frontend**
- Static HTML structure  
- Basic CSS styling  
- Simple JavaScript game logic  
- Auto-reset triggers after each match  

---

## 🐳 Run Using Docker (Pre-built from DockerHub)

DockerHub repo: **vamshii7/tictactoe**

### Pull image
```bash
docker pull vamshii7/tictactoe:v1
```

### Run container
```bash
docker run -d -p 8081:80 vamshii7/tictactoe:v1
```

Visit: 👉 http://localhost:8081

---

## 🏗️ Build Docker Image (From Source)

Inside `v1/` directory:

```bash
docker build -t tictactoe:v1 .
```

Run it:

```bash
docker run -d -p 8081:80 tictactoe:v1
```

Visit: 👉 http://localhost:8081

---

# 🎉 Enjoy the Game  