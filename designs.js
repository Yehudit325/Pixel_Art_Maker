let height = 0;
let width = 0;

function makeGrid(event) {
  event.preventDefault();
  height = document.getElementById("gridHeight").value;
  width = document.getElementById("gridWidth").value;
  console.log("The form was submitted");
}

document.getElementById("gridSize").addEventListener("submit", makeGrid);
