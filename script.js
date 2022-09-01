const grid = document.getElementById('grid');

function makeGrid(size) {
    let cellLength = 550 / size;
    for (i = 0; i < size ** 2; i++) {
        let cell = document.createElement('div');
        cell.classList.add('gridCell');
        cell.style.width = cellLength + 'px'
        cell.style.length = cellLength + 'px'
        if (i == 0) {
            cell.style.borderTopLeftRadius = 10 + 'px' 
        } else if (i == size - 1) {
            cell.style.borderTopRightRadius = 10 + 'px'
        } else if (i == size ** 2 - size) {
            cell.style.borderBottomLeftRadius = 10 + 'px'
        } else if (i == size ** 2 -1) {
            cell.style.borderBottomRightRadius = 10 + 'px'
        }
        grid.appendChild(cell);
    }
}

makeGrid(8)