
const board = document.querySelector(".board");
let globalColor = "black";

function populateBoard(size, color) {
    deleteBoard();

  let squares = board.querySelectorAll("div");
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
    square.addEventListener('mouseover', () =>{

        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        if (color === "random"){
            colorPicked = '#' + randomColor;
        }else{
            colorPicked = color;
        }
        if(square.style.backgroundColor === "white")
            square.style.backgroundColor = colorPicked;
    })
    
    board.insertAdjacentElement("beforeEnd", square);
  }
}

function deleteBoard(){
    let allCells = board.querySelectorAll('div');
    allCells.forEach((div) => div.remove());
}
function resetGrid(){
    let allCells = board.querySelectorAll('div');
    allCells.forEach((div) => div.style.backgroundColor = "white");

}

function hoverColor(){
    let allCells = board.querySelectorAll('div');
    allCells.forEach(div.addEventListener('mouseover', () =>{
      
            div.style.backgroundColor = "black";
    }))
}

populateBoard(32, "random");

