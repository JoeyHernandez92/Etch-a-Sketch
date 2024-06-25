const container = document.getElementById("grid-container");

const button = document.querySelector('button');

//needs implementation to alert and change grid
button.addEventListener('click', () => {
    const rows = prompt("Enter the number of Rows you would like.");
    const columns = prompt("Enter the number of columns you would like.");
    
    if(rows && columns && !isNaN(rows) && !isNaN(columns)){
        container.innerHTML = '';
    }
});

function makeRows(rows, cols){
    for(let i = 0; i < rows * cols; i++){
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        container.appendChild(cell);
    }
}

makeRows(16,16);