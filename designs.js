let height = 0;
let width = 0;

function makeGrid(event) {
  event.preventDefault();
  height = document.getElementById("gridHeight").value;
  width = document.getElementById("gridWidth").value;
  console.log("The form was submitted");

  const table = document.getElementById("pixelCanvas");

  for (let i = 0; i < height; i++) {
    let row = table.insertRow(0);
    for (let j = 0; j < width; j++) {
      row.insertCell(0);
    }
  }
}

document.getElementById("gridSize").addEventListener("submit", makeGrid);
