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
    //button.addEventListener('click', () => {
        document.querySelectorAll('.grid-item').forEach(e => e.remove());
        let userInput = prompt('Please enter the number of grid squares per side (Max: 100): ');
        if (userInput > 100) {
            alert('ERROR! You have entered a grid size larger than 100.');
            return;
        } if (userInput === null) {
            return;
        } if (isNaN(userInput) || userInput == '') {
            prompt('Please enter a valid number 1-100: ');
        }
        rows = userInput;
        columns = userInput;
        makeGrid(rows, columns);
}
