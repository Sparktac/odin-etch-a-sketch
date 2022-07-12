const containerDiv = document.querySelector('#container')
const gridItemDiv = document.querySelectorAll('div.grid-item');
const button = document.querySelector('button');

function makeGrid(rows, columns) {

    //Create the grid
    containerDiv.style.setProperty('--grid-rows', rows)
    containerDiv.style.setProperty('--grid-columns', columns)
    containerDiv.style.width = "960px";
    containerDiv.style.overflow = "hidden";
    for (i = 0; i < (rows * columns); i++) {
        let box = document.createElement('div');
        box.style.minWidth = "0";
        box.style.minHeight = "0";
        box.style.overflow = "hidden";
        containerDiv.appendChild(box).classList.add('grid-item');
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = "lightblue";
        })
    }
}

makeGrid(16, 16);

function promptUser() {
    prompt('How many squares would you like per side?')
}