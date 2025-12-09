const board = document.getElementById("board");
const status = document.getElementById("status");
let cells = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function createBoard() {
  board.innerHTML = "";
  cells.forEach((val, i) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.index = i;
    cell.innerText = val;
    cell.onclick = handleClick;
    board.appendChild(cell);
  });
}

function handleClick(e) {
  const i = e.target.dataset.index;
  if (!gameActive || cells[i]) return;

  cells[i] = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  createBoard();
}

function checkWinner() {
  const combos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (const [a,b,c] of combos) {
    if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
      status.innerText = `${cells[a]} wins! Restarting...`;
      gameActive = false;
      setTimeout(resetGame, 2000);
      return;
    }
  }
  if (!cells.includes("")) {
    status.innerText = `Draw! Restarting...`;
    gameActive = false;
    setTimeout(resetGame, 2000);
  }
}

function resetGame() {
  cells = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  status.innerText = "";
  createBoard();
}

createBoard();

function toggleTheme() {
  const link = document.getElementById("theme-style");
  link.href = link.href.includes("light") ? "style-dark.css" : "style-light.css";
}