const grid = document.querySelector('.grid');

let gridSize = 256;
let cellRowAmount = 256;

createGrid();

document.querySelector('button').addEventListener("click", function() {
    let gridPrompt = prompt("Please enter desired grid width");

    if (gridPrompt > 100) {
        alert("Error. Maximum size is 100 pixels.")
    } else {
        gridSize = (gridPrompt ** 2);
        cellRowAmount = (16 * gridPrompt);
        clearGrid();
        createGrid();
    }
});

function createGrid() {

    grid.style.maxHeight = `${cellRowAmount}px`;
    grid.style.maxWidth = `${cellRowAmount}px`;

    for (let i = 1; i <= gridSize; i++) {
        let cell = document.createElement('div');

        cell.className = 'cell';

        cell.style.backgroundColor = "white";
        cell.style.width = "16px";
        cell.style.height = "16px";
        cell.style.border = "1px solid black";
        cell.style.flexBasis = "16px";
        cell.style.boxSizing = "border-box";

        cell.addEventListener('mouseover', function() {
            this.style.backgroundColor = "red";
        });

        grid.appendChild(cell);
    }
}

function clearGrid() {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}