const container = document.getElementById("container");

for (i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.classList.add('col')
    container.appendChild(cell);
}
