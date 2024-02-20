const grid = document.querySelector('.grid');


for (var i = 1; i <= 256; i++) {
    var cell = document.createElement('div');

    cell.style.width = "16px";
    cell.style.height = "16px";
    cell.style.border = "1px solid black";
    cell.style.flexBasis = "16px";
    cell.style.boxSizing = "border-box";

    grid.appendChild(cell);
}