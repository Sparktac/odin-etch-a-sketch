const containerDiv = document.querySelector('#container')
const gridItemDiv = document.querySelectorAll('div.grid-item');
const button = document.querySelector('button');

function makeGrid(rows, columns) {
    containerDiv.style.setProperty('--grid-rows', rows)
    containerDiv.style.setProperty('--grid-columns', columns)
    for (i = 0; i < (rows * columns); i++) {
        let box = document.createElement('div');
        box.innerText = (i + 1);
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