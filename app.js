document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const width = 10;
  const bombAmount = 20;
  const squares = [];

  //create board
  function createBoard() {
    // get shuffled game array with random bombs
    const bombsArray = Array(bombAmount).fill("bomb");
    const emptyArray = Array(width * width - bombAmount).fill("valid");
    const gamesArray = emptyArray.concat(bombsArray);
    const shuffledArray = gamesArray.sort(() => {
      Math.random() - 0.5;
    });

    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.setAttribute("id", i);
      grid.appendChild(square);
      squares.push(square);
    }
  }

  createBoard();
});
