# Tic Tac Toe - Version 1.1 (Light Theme + Manual Reset)

Version 1.1 is a minor enhancement over **Version 1**, introducing a **Reset button**, and removing the **auto-reset** behavior.

---

## 🌟 New Features in v1.1.1
- 🆕 **Reset Button**
- ❌ **Auto-reset removed** → The game will NOT reset automatically after win/draw
- Improved UI feedback after game completion
- Same lightweight static design (HTML/CSS/JS)

---

## 🐳 Run Using Docker (Pre-built from DockerHub)

DockerHub repo: **vamshii7/tictactoe**

### Pull image
```bash
docker pull vamshii7/tictactoe:v1.1
```

### Run container
```bash
docker run -d -p 5000:5000 vamshii7/tictactoe:v1.1
```

Visit:  
👉 http://localhost:5000

---

## 🏗️ Build Docker Image (From Source)

Inside `v1.1/` directory:

```bash
docker build -t tictactoe:v1.1 .
```

Run it:

```bash
docker run -d -p 5000:5000 tictactoe:v1.1
```

Visit:  
👉 http://localhost:5000

---

# 🎉 Enjoy the Game  