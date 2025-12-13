# Changelog  
All notable changes to this project are documented in this file.  

---

## [3.2.0]
### 🎉 New Features
- **Theme‑adaptive celebration popup**  
  - Large centered banner styled using `--surface`, `--panel-border`, and `--accent`.  
  - Neutral shadow for consistent appearance across themes.  
  - Smooth `zoomIn` animation for polished feedback.

- **Board‑scoped confetti animation**  
  - Confetti now appears *inside the board only*, matching the minimal demo behavior.  
  - Uses a colorful particle palette with randomized size, rotation, and velocity.  
  - Automatically resizes canvas to match board dimensions.  
  - Clean start/stop lifecycle with `requestAnimationFrame`.

- **Improved theme system**  
  - Dark, Light, and Black themes fully supported.  
  - Celebration popup adapts to theme colors.  
  - Accent color dynamically updates across UI elements.

- **Enhanced UI polish**  
  - Modernized board background with subtle radial gradients.  
  - Improved cell hover, focus, and pressed states.  
  - Updated panel styling with soft glass effect and consistent spacing.

---

## ✅ Gameplay Improvements
- **Undo Move**  
  - Now correctly resets celebration overlay and stops confetti.  
  - Prevents undo after game completion.

- **Random Move**  
  - Works consistently in both PvP and PvE modes.  
  - Prevents random moves after game ends.

- **CPU Move Logic**  
  - Improved timing for smoother transitions.  
  - Ensures CPU never plays after a finished match.

---

## ✅ Accessibility Enhancements
- Added `aria-label` attributes to all cells.  
- Escape key now closes celebration popup and stops confetti.  
- Improved focus-visible outlines for buttons, selects, and cells.

---

## ✅ Bug Fixes
- Fixed: Celebration popup not appearing after win.  
- Fixed: Confetti canvas not rendering due to incorrect sizing.  
- Fixed: Overlay not staying above cells due to DOM order issues.  
- Fixed: Confetti continuing after board reset.  
- Fixed: Theme not applying correctly on first load.  
- Fixed: Winning cell glow sometimes not clearing on new match.  
- Fixed: Draw highlight animation overlapping with celebration.  
- Fixed: Undo button not disabling correctly after last move undone.

---

## ✅ Code Quality & Refactoring
- Reorganized celebration overlay to always remain inside `.board`.  
- Cleaned up confetti engine for readability and maintainability.  
- Consolidated theme logic into `setTheme()` and `applySavedTheme()`.  
- Improved board creation to ensure overlay is always appended last.  
- Removed redundant DOM queries and unused variables.  
- Standardized animation durations and easing functions.

---

## ✅ UI/UX Consistency Updates
- Unified border radii across board, cells, and popup.  
- Standardized spacing, padding, and typography.  
- Improved score panel readability.  
- Added subtle glow to winning cells for clearer visual feedback.  
- Updated radial background for a more modern look.

---

## ✅ File Structure Improvements
- `index.html` cleaned and reorganized for clarity.  
- `styles.css` fully rewritten with theme variables and consistent sections.  
- `app.js` modularized into clear functional blocks:
  - Board creation  
  - Game logic  
  - Celebration engine  
  - Theme system  
  - Accessibility  
  - Controls  

---

## ✅ Known Stable Features (unchanged)
- PvP and PvE modes  
- Score tracking (X, O, Draws)  
- Local theme persistence via `localStorage`  
- Responsive layout for mobile and desktop  

---

## ✅ Summary
Version **3.2.0** is the most polished, stable, and visually refined release yet.  
It brings a **fully theme‑adaptive celebration system**, a **smooth confetti engine**, and a **modernized UI** while preserving the simplicity and charm of the original game.