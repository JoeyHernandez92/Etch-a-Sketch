const container = document.getElementById("grid-container");

const button = document.querySelector('button');

//needs implementation to alert and change grid
button.addEventListener('change grid', () => {

});

function makeRows(rows, cols){
    for(let i = 0; i < rows * cols; i++){
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        container.appendChild(cell);
    }
}

makeRows(16,16);