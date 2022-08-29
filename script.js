const playAgain = document.getElementById("playAgain");
const secoundPage = document.getElementsByClassName("secondPage")[0];
const firstPage = document.getElementById("board");

// start game

let cell = document.getElementsByClassName("cell");
let cellAsArray = Array.from(cell);

let board = ["", "", "", "", "", "", "", "", ""];

let CurrentPlayer = "X";

const winOrLose = document.getElementById("winOrLose");

cellAsArray.forEach((eachCell, index) => {
  eachCell.addEventListener("click", () => {
    let id = eachCell.id;
    if (!board[id]) {
      board[id] = CurrentPlayer;
      eachCell.innerHTML = `<p>${CurrentPlayer}</p>`;

      if (playerhasWon()) {
        secoundPage.style.display = "flex";
        winOrLose.textContent = `${CurrentPlayer} HAS WON !  `;
        return;
      }

      CurrentPlayer = CurrentPlayer === "X" ? "O" : "X";
    }
  });
});

// indexes winthin the board
//   [0] [1] [2]
//   [3] [4] [5]
//   [6] [7] [8]

// Winning algorithm

let playerhasWon = () => {
  if (board[0] === CurrentPlayer) {
    if (board[1] === CurrentPlayer && board[2] === CurrentPlayer) {
      return true;
    }
    if (board[3] === CurrentPlayer && board[6] === CurrentPlayer) {
      return true;
    }
    if (board[4] === CurrentPlayer && board[8] === CurrentPlayer) {
      return true;
    }
  }

  if (board[8] === CurrentPlayer) {
    if (board[5] === CurrentPlayer && board[2] === CurrentPlayer) {
      return true;
    }
    if (board[7] === CurrentPlayer && board[6] === CurrentPlayer) {
      return true;
    }
  }

  if (board[4] === CurrentPlayer) {
    if (board[3] === CurrentPlayer && board[5] === CurrentPlayer) {
      return true;
    }
    if (board[1] === CurrentPlayer && board[7] === CurrentPlayer) {
      return true;
    }
    if (board[2] === CurrentPlayer && board[6] === CurrentPlayer) {
      return true;
    }
  }
};

// reset btn

playAgain.addEventListener("click", () => {
  board.forEach((eachBoard, index) => {
    board[index] = "";
  });

  cellAsArray.forEach((eachCell, index) => {
    eachCell.innerHTML = "";
  });

  secoundPage.style.display = "none";
  firstPage.style.display = "grid";
});
