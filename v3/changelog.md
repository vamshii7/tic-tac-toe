# Changelog - Version 3

## ✅ Added
- **CPU Mode (1‑player)** with win/block/random logic.
- **Undo Move** functionality.
- **Random Move** generator button.
- **Keyboard navigation** (arrow keys + Enter).
- **Persistent scores** using localStorage.
- **Nginx static hosting** with custom `nginx.conf`.
- **Dockerfile** using `nginx:alpine`.

## ✅ Changed
- Complete UI redesign with modern dark theme.
- Migrated from Python server to **Nginx** for production hosting.
- Replaced legacy `script.js` with new `app.js`.

## ✅ Fixed
- Board state bugs from v2.
- Score reset inconsistencies.
- Input handling issues on fast clicks.

## 📌 Notes
Version 3 is the first **production‑grade** release, introducing CPU gameplay, undo, Nginx hosting, and a fully modernized UI.