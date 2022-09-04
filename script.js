const grid = document.getElementById('grid');
const resetButton = document.getElementById('reset');
const sizeButton = document.getElementById('size')

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
const collection = document.getElementsByClassName("gridCell");

// this function adds functionality to the reset button 
resetButton.addEventListener('click', reset);
function reset() {
    deleteGrid();
    makeGrid(8)
}

sizeButton.addEventListener('click', size);
function size() {
    let prompt = window.prompt('Please enter a value between 1-100')
    if (prompt > 100 || prompt < 1) {
        alert('Please enter a value between 1-100');
        size()
    } else {
    }
    deleteGrid()
    makeGrid(prompt);
}

function deleteGrid() {
    const deletions = document.querySelectorAll('.gridCell');
    deletions.forEach(deletion => {
        deletion.remove();
    })
}

makeGrid(8)