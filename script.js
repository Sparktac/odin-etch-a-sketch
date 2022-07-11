const containerDiv = document.querySelector('#container')
const gridItemDiv = document.querySelectorAll('div.grid-item');
let gridCount = 0;

function makeGrid(rows, columns) {
    containerDiv.style.setProperty('--grid-rows', rows)
    containerDiv.style.setProperty('--grid-columns', columns)
    for (i = 0; i < (rows * columns); i++) {
        let box = document.createElement('div');
        box.innerText = (i + 1);
        containerDiv.appendChild(box).classList.add('grid-item');
    }
}

makeGrid(16, 16);

function chngBgColor() {
    gridItemDiv.style.setProperty('background-color', 'lightblue')
}


// gridItemDiv.addEventListener('mouseover', chngBgColor);