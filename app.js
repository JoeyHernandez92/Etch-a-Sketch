const container = document.getElementById("grid-container");

const button = document.querySelector('button');

//needs implementation to alert and change grid
button.addEventListener('click', () => {
    const rows = prompt("Enter the number of Rows you would like.");
    const columns = prompt("Enter the number of columns you would like.");
    
    if(rows && columns && !isNaN(rows) && !isNaN(columns)){
        container.innerHTML = '';
        makeRows(parseInt(rows), parseInt(columns));
    }
    else{
        alert("Please enter a valid number value");
    }
});

function makeRows(rows, columns){
    container.style.display = 'grid';
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;


    for(let i = 0; i < rows * columns; i++){
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        container.appendChild(cell);
    }
}

makeRows(16,16);