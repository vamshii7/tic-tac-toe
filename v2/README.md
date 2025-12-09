# Tic Tac Toe - Version 2 (Light + Dark Themes)

Version 2 improves the original game with UI enhancements and theme switching.

---

## 🌟 Features
- 🌓 **Light / Dark Theme Toggle**
- 🎨 Two separate CSS styles:
  - `style-light.css`
  - `style-dark.css`
- Cleaner UI layout and spacing
- Smoother user interaction
- Same game logic as v2.1 (manual reset recommended)

---

## 🐳 Run Using Docker (Pre-built from DockerHub)

DockerHub repo: **vamshii7/tictactoe**

### Pull image
```bash
docker pull vamshii7/tictactoe:v2
```

### Run container
```bash
docker run -d -p 5000:5000 vamshii7/tictactoe:v2
```

Visit:  
👉 http://localhost:5000

---

## 🏗️ Build Docker Image (From Source)

Inside `v2/` directory:

```bash
docker build -t tictactoe:v2 .
```

Run it:

```bash
docker run -d -p 5000:5000 tictactoe:v2
```

Visit:  
👉 http://localhost:5000

---

# 🎉 Enjoy the Game  