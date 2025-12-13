# Tic Tac Toe - V1.1 (Manual Reset Update)

V1.1 improves the original version by giving players more control over the game flow with a **manual reset button** and better multi-round gameplay.

---

## 🚀 Tic-Tac-Toe - Version 1.1 
## See all updates for this version here → [`changelog.md`](./changelog.md)

### **Directory:** `v1.1/`

V1.1 builds on V1 with:
- 🆕 **Manual Reset button**  
- ❌ Removed auto-reset behavior  
- ✅ Improved multi-round gameplay  
- 🎨 Light theme UI (same as V1)  
- 🧱 Clean and simple HTML/CSS/JS  

---

## 🕹️ How V1.1 Works

### **Frontend**
- Same layout as V1  
- Reset button triggers board clear  
- Status message updated after each match  

---

## 🐳 Run Using Docker (Pre-built from DockerHub)

DockerHub repo: **vamshii7/tictactoe**

### Pull image
```bash
docker pull vamshii7/tictactoe:v1.1
```

### Run container
```bash
docker run -d -p 8081:80 vamshii7/tictactoe:v1.1
```

Visit: 👉 http://localhost:8081

---

## 🏗️ Build Docker Image (From Source)

Inside `v1.1/` directory:

```bash
docker build -t tictactoe:v1.1 .
```

Run it:

```bash
docker run -d -p 8081:80 tictactoe:v1.1
```

Visit: 👉 http://localhost:8081

---

# 🎉 Enjoy the Improved Classic Version