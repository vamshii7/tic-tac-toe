const cells = document.querySelectorAll("td");
const status = document.getElementById("status");
const resetBtn = document.getElementById("reset");
let turn = "X";
let gameOver = false;

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];
  const board = Array.from(cells).map(cell => cell.textContent);

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      status.textContent = `🎉 ${board[a]} wins!`;
      gameOver = true;
      return;
    }
  }

  if (board.every(cell => cell !== "")) {
    status.textContent = "😐 It's a draw!";
    gameOver = true;
  }
}

function resetGame() {
  cells.forEach(cell => cell.textContent = "");
  turn = "X";
  gameOver = false;
  status.textContent = "Turn: X";
}

cells.forEach(cell => {
  cell.onclick = () => {
    if (cell.textContent === "" && !gameOver) {
      cell.textContent = turn;
      checkWinner();
      if (!gameOver) {
        turn = turn === "X" ? "O" : "X";
        status.textContent = `Turn: ${turn}`;
      }
    }
  };
});

resetBtn.onclick = resetGame;

