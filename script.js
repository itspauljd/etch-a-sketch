const grid = document.getElementById('grid');
const resetButton = document.getElementById('reset');


// This function makes the grid and adds on hover events
function makeGrid(size) {
    let cellLength = 550 / size;
    for (i = 0; i < size ** 2; i++) {
        let cell = document.createElement('div');
        cell.classList.add('gridCell');
        cell.style.width = cellLength + 'px'
        cell.style.length = cellLength + 'px'
        cell.addEventListener('mouseover', makeColor);
        function makeColor() {
            cell.style.backgroundColor = 'black';
        }
        if (i == 0) {
            cell.style.borderTopLeftRadius = 10 + 'px'
        } else if (i == size - 1) {
            cell.style.borderTopRightRadius = 10 + 'px'
        } else if (i == size ** 2 - size) {
            cell.style.borderBottomLeftRadius = 10 + 'px'
        } else if (i == size ** 2 - 1) {
            cell.style.borderBottomRightRadius = 10 + 'px'
        }
        grid.appendChild(cell);
    }
}

resetButton.addEventListener('click', reset);
function reset() {
    const collection = document.getElementsByClassName("gridCell");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.backgroundColor = 'rgb(194, 179, 179)';
    }
}

makeGrid(8)
