# Tic Tac Toe - V3.1 (Advanced Web App)

V3.1 is an **enhanced, polished, responsive, keyboard‑accessible, CPU‑enabled Tic‑Tac‑Toe web application** served via **Nginx + Docker**, now featuring **confetti celebrations**, improved CPU logic, and refined UI/UX.

---

## 🚀 Tic-Tac-Toe - Version 3.1 (See all updates for this version here → [`changelog.md`](./changelog.md))

### **Directory:** `v3.1/`

V3.1 builds on top of V3 with several improvements:

- 🎉 **Confetti celebration animation**  
- 🎨 Polished dark UI with smoother transitions  
- 🧠 **Improved CPU Mode** (smarter win/block logic)  
- 👥 **2‑Player local mode**  
- ↩️ Undo Move  
- 🎲 Auto-random move generator  
- 💾 **Persistent scores** using localStorage  
- ♿ Full keyboard navigation (arrows + Enter)  
- ⚡ Optimized Nginx static hosting  
- 🐳 Fully Dockerized (nginx:alpine)

---

## 🐳 Run Using Docker (Pre-built from DockerHub)

DockerHub repo: **vamshii7/tictactoe**

### Pull image
```bash
docker pull vamshii7/tictactoe:v3.1
```

### Run container
```bash
docker run -d -p 8081:80 vamshii7/tictactoe:v3.1
```

Visit:  👉 http://localhost:8081

---

## 🏗️ Build Docker Image (From Source)

Inside `v3.1/` directory:

```bash
docker build -t tictactoe:v3.1 .
```

Run it:

```bash
docker run -d -p 8081:80 tictactoe:v3.1
```

---

## ⚙️ How V3.1 Works

### **Frontend**
- Pure HTML + CSS + Vanilla JS  
- Dynamic board generation  
- CPU logic  
- Undo history  
- Keyboard-friendly navigation  
- Confetti celebration animation

### **Backend (Nginx)**
- Nginx serves static assets  
- Cache disabled to avoid stale JS  
- Config file included in repo

---

## 🐳 Dockerfile (Used in v3.1)

- Uses `nginx:alpine`
- Copies HTML/CSS/JS into container
- Copies custom `nginx.conf`

---

## 🌐 Accessing App After Deployment

After running Docker:

```bash
docker run -d -p 8081:80 vamshii7/tictactoe:v3.1
```

Open browser: 👉 `http://localhost:8081`

If deployed on server: 👉 `http:// <your-server-ip>:8081`

---

# 🎉 Enjoy the Game  
