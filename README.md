# Changelog - Tic Tac Toe Web Application

All notable changes to this project are documented here.  
This changelog follows a linear release history for:

**v1 → v1.1 → v2 → v3**

---

## 🟩 Version 3 - Advanced Web App (Nginx + CPU + Undo)
**Release Type:** Major  
**Directory:** `v3/`  
**Status:** Latest & Most Feature-Rich Release

### Added
- Brand new **modern dark UI** with glassmorphism styling
- **CPU Mode (1-Player)** with:
  - Winning move detection
  - Blocking logic
  - Random fallback moves
- **Undo last move** functionality
- **Random Move** generator button
- **Persistent scores** using `localStorage`
- **Keyboard navigation** (Arrow keys + Enter support)
- **Nginx static hosting** for production builds
- New **Dockerfile** using `nginx:alpine`
- Enhanced accessibility (`role`, `aria-live`, `aria-label`)
- Responsive layout for mobile and tablets

### Improved
- Better UI alignment and spacing
- More polished game animations and interactions
- Cleaner board rendering logic
- Improved end-game highlighting (winning line effect)
- Better state management for CPU and player turns

### Fixed
- Corrected focus behavior during keyboard navigation
- Resolved occasional double-click issues when CPU was active
- Prevented unwanted next-move after end-game

---

## 🟧 Version 2 - Theme Toggle + UI Improvements
**Release Type:** Feature Update  
**Directory:** `v2/`

### Added
- 🌓 **Light/Dark theme toggle**
- Two stylesheets:
  - `style-light.css`
  - `style-dark.css`
- Enhanced UI visual elements
- Updated typography and spacing

### Improved
- Cleaner DOM structure
- Better responsiveness and color accessibility
- Reset button behavior consistent with v1.1

### Fixed
- Minor layout issues on smaller screens

---

## 🟨 Version 1.1 - Manual Reset Button (No Auto Reset)
**Release Type:** Minor Update  
**Directory:** `v1.1/`

### Added
- 🆕 **Reset button** allowing players to manually restart the game

### Removed
- ❌ Auto-reset gameplay (no automatic restart after win/draw)

### Improved
- Better game flow for multiple-round play
- Updated post-win/draw status message

---

## 🟦 Version 1 - Initial Release (Light Theme Only)
**Release Type:** Initial Launch  
**Directory:** `v1/`

### Features
- Classic Tic-Tac-Toe 3×3 gameplay
- Light theme only
- Basic HTML/CSS/JavaScript implementation
- Auto reset after win/draw
- Modern but simple UI

---

## 📌 Version Summary

| Version | Theme Support | Reset | CPU Mode | Undo | Nginx | Notes |
|--------|---------------|--------|----------|------|--------|-------|
| **v1** | Light | Auto-reset | No | No | No | First basic version |
| **v1.1** | Light | Manual reset | No | No | No | Small improvement |
| **v2** | Light + Dark | Manual reset | No | No | No | UI upgraded |
| **v3** | Advanced Dark | Manual reset | Yes | Yes | Yes | Production-ready |

---

## 👨‍💻 Author  
**Vamshi Krishna**  
DevOps Engineer | DevOps & Kubernetes Enthusiast  
[Connect on LinkedIn](https://in.linkedin.com/in/vamshi7)  
> ⚙️ _Feel free to fork and contribute - PRs are welcome!_

---

## 📄 License
MIT License  
This software is freely available for learning, experimentation, and deployment.

---