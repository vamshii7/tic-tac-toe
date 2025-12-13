# Tic Tac Toe - V3.2 (Advanced Web App)

V3.2 is the **most polished, feature‑rich, theme‑adaptive, celebration‑enabled Tic‑Tac‑Toe web application** in the series — fully optimized, fully Dockerized, and powered by **Nginx** for production‑grade static hosting.

This version introduces a **celebration popup**, **confetti**, and a **complete theme system** (Dark, Light, Black), making it the most modern and interactive release.

---

## 🚀 Tic-Tac-Toe - Version 3.2 (Latest & Most Advanced)

### **Directory:** `v3.2/`

V3.2 includes everything from V3 and v3.2, plus:

- 🎉 **Celebration popup** after each win  
- 🎊 **Confetti animation** (theme‑adaptive)  
- 🎨 **Full theme system** — Dark, Light, and Black  
- 🧠 Improved CPU Mode (win/block/random logic)  
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
docker pull vamshii7/tictactoe:v3.2
```
### Run container
```bash
docker run -d -p 8081:80 vamshii7/tictactoe:v3.2
```

Visit:  
👉 http://localhost:8081

---

## 🏗️ Build Docker Image (From Source)

Inside `v3.2/` directory:

```bash
docker build -t tictactoe:v3.2 .
```

Run it:

```bash
docker run -d -p 8081:80 tictactoe:v3.2
```

---

## ⚙️ How v3.2 Works

### **Frontend**
- Pure HTML + CSS + Vanilla JS  
- Dynamic board generation  
- Improved CPU logic  
- Undo history  
- Keyboard-friendly navigation  
- Celebration popup + confetti animation  
- Full theme system (Dark / Light / Black)

### **Backend (Nginx)**
- Nginx serves static assets  
- Cache disabled to avoid stale JS  
- Config file included in repo

---

## 🐳 Dockerfile (Used in v3.2)

- Uses `nginx:alpine`
- Copies HTML/CSS/JS into container
- Copies custom `nginx.conf`

---

## 🌐 Accessing App After Deployment

After running Docker:

```bash
docker run -d -p 8081:80 vamshii7/tictactoe:v3.2
```

Open browser:

👉 `http://localhost:8081`

If deployed on server:

👉 `http:// <your-server-ip>:8081`

---

# 🎉 Enjoy the Game  
