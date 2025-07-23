# Tic Tac Toe Web App

This repository contains two versions of a simple web-based Tic Tac Toe game with Docker support and a lightweight Python backend server.

---

## 🔹 Version 1 - Light Theme Only

**Directory:** `v1/`

### Features
- Basic Tic Tac Toe game logic
- Auto-reset after a win or draw
- Static **light theme** styling only

### How to Run
```bash
cd v1
docker build -t tictactoe:v1 .
docker run -p 5000:5000 tictactoe:v1
```
Visit: [http://localhost:5000](http://localhost:5000)

---

## 🔸 Version 2 - Theme Toggle (Light + Dark)

**Directory:** `v2/`

### Features
- All v1 features
- Toggle button to switch between **light** and **dark** themes
- Style sheets: `style-light.css` and `style-dark.css`

### How to Run
```bash
cd v2
docker build -t tictactoe:v2 .
docker run -p 5000:5000 tictactoe:v2
```
Visit: [http://localhost:5000](http://localhost:5000)

---

## 🔧 Technologies Used
- HTML, CSS, JavaScript
- Python 3 (Flask-like basic HTTP server)
- Docker for containerization

---

## 📁 Folder Structure
```
tic-tac-toe/
├── v1         # Light theme only version
├── v2         # Light & dark theme toggle version
└── README.md  # This file
```

---

## 📦 License
This project is open-sourced for educational and demonstration purposes only.
