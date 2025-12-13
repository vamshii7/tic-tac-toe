# Tic Tac Toe - V3 (Advanced Web App)

V3 is a **fully redesigned, modern, responsive, keyboard‑accessible, CPU‑enabled Tic‑Tac‑Toe web application** served via **Nginx + Docker**.

---

## 🚀 Tic-Tac-Toe - Version 3 
## See all updates for this version here → [`changelog.md`](./changelog.md)

### **Directory:** `v3/`

V3 is the most advanced version with:
- 🎨 Fully modern dark UI with glass‑morphism  
- 🧠 **CPU Mode (1‑player)** - smart logic (win/block/random)  
- 👥 **2‑Player local mode**  
- ↩️ Undo Move  
- 🎲 Auto-random move generator  
- 💾 **Persistent scores** using localStorage  
- ♿ Full keyboard navigation (arrows + Enter)  
- ⚡ Optimized Nginx static hosting  
- 🐳 Fully Dockerized

---

## 🐳 Run Using Docker (Pre-built from DockerHub)

DockerHub repo: **vamshii7/tictactoe**

### Pull image
```bash
docker pull vamshii7/tictactoe:v3
```

### Run container
```bash
docker run -d -p 8081:80 vamshii7/tictactoe:v3
```

Visit: 👉 http://localhost:8081

---

## 🏗️ Build Docker Image (From Source)

Inside `v3/` directory:

```bash
docker build -t tictactoe:v3 .
```

Run it:

```bash
docker run -d -p 8081:80 tictactoe:v3
```

---

## ⚙️ How V3 Works

### **Frontend**
- Pure HTML + CSS + Vanilla JS  
- Dynamic board generation  
- CPU logic  
- Undo history  
- Keyboard-friendly navigation

### **Backend (Nginx)**
- Nginx serves static assets  
- Cache disabled to avoid stale JS  
- Config file included in repo

---

## 🐳 Dockerfile (Used in v3)

- Uses `nginx:alpine`
- Copies HTML/CSS/JS into container
- Copies custom `nginx.conf`

---

## 🌐 Accessing App After Deployment

After running Docker:

```bash
docker run -d -p 8081:80 vamshii7/tictactoe:v3
```

Open browser: 👉 `http://localhost:8081`

If deployed on server: 👉 `http:// <your-server-ip>`

---

# 🎉 Enjoy the Game  