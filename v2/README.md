# Tic Tac Toe - V2 (Theme Toggle + UI Upgrade)

V2 introduces a **modernized UI**, **Light/Dark themes**, and improved responsiveness - making the game visually appealing and more accessible.

---

## 🚀 Tic-Tac-Toe - Version 2

### **Directory:** `v2/`

V2 includes:
- 🌓 **Light/Dark theme toggle**  
- 🎨 Two dedicated stylesheets (`style-light.css`, `style-dark.css`)  
- 📱 Improved responsive layout  
- ✨ Updated typography and spacing  
- ✅ Cleaner DOM structure  
- 🔧 Better color accessibility  

---

## 🕹️ How V2 Works

### **Frontend**
- HTML + CSS + JavaScript  
- Theme toggle switches between two CSS files  
- Improved layout for mobile and desktop  
- Reset button behavior refined  

---

## 🐳 Run Using Docker (Pre-built from DockerHub)

DockerHub repo: **vamshii7/tictactoe**

### Pull image
```bash
docker pull vamshii7/tictactoe:v2
```

### Run container
```bash
docker run -d -p 8081:80 vamshii7/tictactoe:v2
```

Visit:  
👉 http://localhost:8081

---

## 🏗️ Build Docker Image (From Source)

Inside `v2/` directory:

```bash
docker build -t tictactoe:v2 .
```

Run it:

```bash
docker run -d -p 8081:80 tictactoe:v2
```

Visit:  
👉 http://localhost:8081

---

# 🎉 Enjoy the Themed Version  