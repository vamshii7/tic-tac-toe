# Changelog

## [3.1.0]
### ✨ New Features
- **Theme System Introduced**
  - Added three fully supported themes:
    - 🌑 Dark  
    - 🌕 Light  
    - ⚫ Black  
  - Theme switching added to header controls.
  - Theme preference now saved using `localStorage`.

- **Winner Celebration Popup (Initial Version)**
  - Added a centered popup announcing the winner.
  - Popup uses theme‑based accent colors.
  - Basic fade‑in animation added for visual feedback.

- **Confetti Animation (Initial Version)**
  - Introduced confetti effect triggered on win.
  - Confetti rendered using `<canvas>` overlay.
  - Basic particle system with randomized colors and fall speed.

---

### ✅ UI/UX Improvements
- Updated board and panel styling to support theme colors.
- Improved button and select styling for better contrast.
- Added subtle hover and active states for interactive elements.
- Enhanced scoreboard readability.

---

### ✅ Gameplay Enhancements
- Added winning cell highlight using theme‑adaptive glow.
- Improved draw detection and display message.
- Cleaned up turn indicator styling for clarity.

---

### ✅ Bug Fixes
- Fixed: Board not resetting correctly when switching themes.
- Fixed: Scoreboard not updating after consecutive matches.
- Fixed: Confetti canvas not clearing after new match.
- Fixed: Popup overlapping layout on small screens.

---

### ✅ Code Quality
- Introduced theme variable system using CSS custom properties.
- Refactored UI update logic to reduce duplication.
- Improved DOM structure for easier styling and future updates.

---

### ✅ Summary
Version **3.1.0** introduced the foundation for the modern UI experience:  
a full theme system, the first version of the winner popup, and the initial confetti animation.  
This release set the stage for the polished, fully adaptive celebration system in v3.2.