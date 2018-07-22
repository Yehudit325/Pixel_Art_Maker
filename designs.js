let height = 0;
let width = 0;


function colorMe(cell) {
  let color = document.getElementById("colorPicker").value;
  cell.target.style.backgroundColor = color;
}

function deleteTable() {
  const table = document.getElementById("pixelCanvas");
  for(let i = table.rows.length - 1; i >= 0; i--)
  {
      table.deleteRow(i);
  }
}

function makeGrid(event) {
  event.preventDefault();
  deleteTable();

  height = document.getElementById("gridHeight").value;
  width = document.getElementById("gridWidth").value;

  const table = document.getElementById("pixelCanvas");

  for (let i = 0; i < height; i++) {
    let row = table.insertRow(0);
    for (let j = 0; j < width; j++) {
    let cell = row.insertCell(0);
    cell.addEventListener("click", colorMe);
    }
  }
}

function clearGrid() {
  const table = document.getElementById("pixelCanvas");

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      table.rows[i].cells[j].style.backgroundColor = "";
    }
  }
}

document.getElementById("gridSize").addEventListener("submit", makeGrid);

document.getElementById("clear").addEventListener("click", clearGrid);
