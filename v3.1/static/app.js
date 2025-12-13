// State
let boardState = Array(9).fill(null);
let currentPlayer = 'X';
let mode = 'pvp';
let scores = { X: 0, O: 0, D: 0 };
let history = [];
let cells = [];
let gameOver = false;

const board = document.getElementById('board');
const turnName = document.getElementById('turnName');
const lastResult = document.getElementById('lastResult');
const scoreX = document.getElementById('scoreX');
const scoreO = document.getElementById('scoreO');
const scoreD = document.getElementById('scoreD');

const modeSelect = document.getElementById('modeSelect');
const newBtn = document.getElementById('newBtn');
const resetScoreBtn = document.getElementById('resetScore');
const randomBtn = document.getElementById('randomBtn');
const undoBtn = document.getElementById('undoBtn');

const celebration = document.getElementById('celebration');
const celebrationText = document.getElementById('celebrationText');
const closeCelebration = document.getElementById('closeCelebration');
const confettiCanvas = document.getElementById('confettiCanvas');

const themeSelect = document.getElementById('themeSelect');

// Init
createBoard();
renderBoard();
renderScores();
applySavedTheme();

// Board creation
function createBoard() {
  board.innerHTML = '';
  cells = [];
  for (let i = 0; i < 9; i++) {
    const c = document.createElement('button');
    c.className = 'cell';
    c.dataset.index = i;
    c.setAttribute('aria-label', `Cell ${i + 1}`);
    c.addEventListener('click', () => handleCell(i));
    board.appendChild(c);
    cells.push(c);
  }
}

// Reset board
function resetBoard(keepScores = false) {
  boardState.fill(null);
  history = [];
  currentPlayer = 'X';
  gameOver = false;
  lastResult.innerHTML = '';
  cells.forEach(c => {
    c.classList.remove('disabled', 'x', 'o');
    c.style.boxShadow = '';
    c.textContent = '';
  });
  renderBoard();
  if (!keepScores) scores = { X: 0, O: 0, D: 0 };
  renderScores();
  setUndoDisabled(true);
}

// Render board & turn
function renderBoard() {
  for (let i = 0; i < 9; i++) {
    const v = boardState[i];
    const c = cells[i];
    c.textContent = v || '';
    c.classList.toggle('x', v === 'X');
    c.classList.toggle('o', v === 'O');
    c.classList.toggle('disabled', !!v || gameOver);
  }
  turnName.textContent = currentPlayer;
}

// Handle cell click
function handleCell(index) {
  if (gameOver) return;
  if (boardState[index]) return;
  playTurn(index);
}

// Play a turn
function playTurn(i) {
  boardState[i] = currentPlayer;
  history.push(i);
  setUndoDisabled(false);
  renderBoard();

  const result = checkWinner();
  if (result) { finalize(result); return; }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  renderBoard();

  if (mode === 'pve' && currentPlayer === 'O') setTimeout(cpuMove, 280);
}

// Check winner
function checkWinner() {
  const W = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (const line of W) {
    const [a, b, c] = line;
    if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
      return { winner: boardState[a], line };
    }
  }
  if (boardState.every(Boolean)) return { winner: 'draw' };
  return null;
}

// Finalize match
function finalize(result) {
  gameOver = true;
  cells.forEach(c => c.classList.add('disabled'));

  if (result.winner === 'draw') {
    scores.D++;
    lastResult.innerHTML = `<div class="winner-line">Draw!</div>`;
    highlightDraw();
    celebrate('It’s a draw! 🤝');
  } else {
    scores[result.winner]++;
    lastResult.innerHTML = `<div class="winner-line">${result.winner} wins!</div>`;
    result.line.forEach(i => cells[i].style.boxShadow = '0 0 20px rgba(16,185,129,0.5) inset');
    celebrate(`${result.winner} wins! 🎉`);
  }
  renderScores();
  setUndoDisabled(true);
}

// Render scores
function renderScores() {
  scoreX.textContent = scores.X;
  scoreO.textContent = scores.O;
  scoreD.textContent = scores.D;
}

// CPU move (simple random)
function cpuMove() {
  const empty = boardState.map((v, i) => v ? null : i).filter(v => v !== null);
  const r = empty[Math.floor(Math.random() * empty.length)];
  playTurn(r);
}

// Undo last move (single-step undo)
undoBtn.addEventListener('click', () => {
  if (gameOver || history.length === 0) return;
  const lastIndex = history.pop();
  boardState[lastIndex] = null;
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  renderBoard();
  setUndoDisabled(history.length === 0);
  lastResult.innerHTML = '';
});
function setUndoDisabled(disabled) {
  undoBtn.disabled = disabled;
}

// Buttons & controls
newBtn.onclick = () => resetBoard(true);
resetScoreBtn.onclick = () => { scores = { X: 0, O: 0, D: 0 }; renderScores(); };
modeSelect.onchange = (e) => { mode = e.target.value; resetBoard(true); };
randomBtn.onclick = () => {
  if (gameOver) return;
  const empty = boardState.map((v, i) => v ? null : i).filter(v => v !== null);
  const r = empty[Math.floor(Math.random() * empty.length)];
  playTurn(r);
};

// Draw highlight
function highlightDraw() {
  cells.forEach(c => {
    c.style.boxShadow = '0 0 0 6px rgba(14,165,233,0.15) inset';
    setTimeout(() => { c.style.boxShadow = ''; }, 800);
  });
}

// Celebration overlay with confetti
let confettiRAF = null;
function celebrate(text) {
  const bannerText = document.getElementById('celebrationText');
  bannerText.textContent = text;
  celebration.classList.add('active');
  celebration.setAttribute('aria-hidden', 'false');
  startConfetti(1200);
}
document.getElementById('closeCelebration').addEventListener('click', () => {
  stopConfetti();
  celebration.classList.remove('active');
  celebration.setAttribute('aria-hidden', 'true');
});

function startConfetti(duration = 1200) {
  const ctx = confettiCanvas.getContext('2d');
  resizeCanvas();

  const particles = Array.from({ length: 180 }, () => ({
    x: Math.random() * confettiCanvas.width,
    y: -20 - Math.random() * 200,
    w: 6 + Math.random() * 6,
    h: 10 + Math.random() * 10,
    color: randomColor(),
    speedY: 2 + Math.random() * 3,
    speedX: -1 + Math.random() * 2,
    rot: Math.random() * Math.PI,
    rotSpeed: -0.05 + Math.random() * 0.1
  }));

  let start = null;
  function frame(ts) {
    if (!start) start = ts;
    const elapsed = ts - start;
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    for (const p of particles) {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rot += p.rotSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }

    if (elapsed < duration) {
      confettiRAF = requestAnimationFrame(frame);
    } else {
      stopConfetti();
    }
  }
  confettiRAF = requestAnimationFrame(frame);

  window.addEventListener('resize', resizeCanvas);
  function resizeCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
}
function stopConfetti() {
  if (confettiRAF) cancelAnimationFrame(confettiRAF);
  confettiRAF = null;
  const ctx = confettiCanvas.getContext('2d');
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
}
function randomColor() {
  const palette = ['#10b981','#f97316','#60a5fa','#f43f5e','#f59e0b','#22c55e','#6366f1'];
  return palette[Math.floor(Math.random() * palette.length)];
}

// Theme selection & persistence
themeSelect.addEventListener('change', () => {
  const theme = themeSelect.value;
  setTheme(theme);
  localStorage.setItem('ttt-theme', theme);
});
function applySavedTheme() {
  const saved = localStorage.getItem('ttt-theme') || 'dark';
  setTheme(saved);
  themeSelect.value = saved;
}
function setTheme(theme) {
  const html = document.documentElement;
  html.classList.remove('theme-dark', 'theme-light', 'theme-black', 'theme-white');
  switch (theme) {
    case 'light': html.classList.add('theme-light'); break;
    case 'black': html.classList.add('theme-black'); break;
    case 'white': html.classList.add('theme-white'); break;
    default: html.classList.add('theme-dark'); break;
  }
}

// Accessibility: Escape closes celebration
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && celebration.classList.contains('active')) {
    document.getElementById('closeCelebration').click();
  }
});