const playAgain = document.getElementById("playAgain");
const secoundPage = document.getElementsByClassName("secondPage")[0];
const firstPage = document.getElementById("board");

playAgain.addEventListener("click", () => {
  secoundPage.style.display = "none";
  firstPage.style.display = "grid";
});
