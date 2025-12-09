# Tic Tac Toe – Version 1 (Basic Light Theme)

Version 1 is the simplest form of the Tic-Tac-Toe application.  
It includes a classic UI, light theme, and base gameplay logic.

---

## 🌟 Features
- Classic Tic-Tac-Toe board (3x3)
- Light theme UI
- Basic JavaScript gameplay logic
- Auto-reset game after a win or draw
- Zero dependencies - pure HTML/CSS/JS

---

## 🐳 Run Using Docker (Pre-built from DockerHub)

DockerHub repo: **vamshii7/tictactoe**

### Pull image
```bash
docker pull vamshii7/tictactoe:v1
```

### Run container
```bash
docker run -d -p 5000:5000 vamshii7/tictactoe:v1
```

Visit:  
👉 http://localhost:5000

---

## 🏗️ Build Docker Image (From Source)

Inside `v1/` directory:

```bash
docker build -t tictactoe:v1 .
```

Run it:

```bash
docker run -d -p 5000:5000 tictactoe:v1
```

Visit:  
👉 http://localhost:5000

---

# 🎉 Enjoy the Game  