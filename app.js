const container = document.getElementById("grid-container");

function makeRows(rows, cols){
    for(let i = 0; i < rows * cols; i++){
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        container.appendChild(cell);
    }
}

makeRows(8,8);