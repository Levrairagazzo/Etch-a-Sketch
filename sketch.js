// var container = document.getElementById("grid");


// function generateGrid(cells){
// for (let index = 0; index < cells; index++) {
//     var cell = document.createElement("div");
//     cell.className += "myDivs";
//     cell.innerHTML = index;
//     container.appendChild(cell);
    
// }
// }

// generateGrid(256);

const boardSizeSelect = document.querySelector('#size-select'),
  boardContainer = document.querySelector('.board-container')

boardSizeSelect.addEventListener('change', e => {
  const option = e.currentTarget,
    boardSize = Math.pow(option.value, 2)

  boardContainer.style.gridTemplateColumns = `repeat(${option.value}, 1fr)`

  boardContainer.innerHTML = ''
  for (let i = 1; i <= boardSize; i++){
    boardContainer.innerHTML += `<div>${i}</div>`;
}
})


