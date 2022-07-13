const containerDiv = document.querySelector('#container')
const gridItemDiv = document.querySelectorAll('div.grid-item');

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
            if (box.style.backgroundColor == ('')) {
                let color = getRandomColor();
                box.style.backgroundColor = color;
                box.style.opacity = '0.10';
                return box.style.backgroundColor;
            }
            else if (box.style.opacity <= '0.90') {
                box.style.opacity = parseFloat(box.style.opacity) + .10;
                return box.style.backgroundColor;
            }
        })
    }
}

makeGrid(16, 16);

function promptUser() {
        document.querySelectorAll('.grid-item').forEach(e => e.remove());
        let userInput = prompt('Please enter the number of grid squares per side (Max: 100): ');
        if (userInput > 100) {
            alert('ERROR! You have entered a grid size larger than 100.');
        } if (userInput === null) {
            prompt('Input field must be valid');
        } if (isNaN(userInput) || userInput == '') {                            //Not working as intended
            prompt('Please enter a valid number 1-100: ');
        }
        rows = userInput;
        columns = userInput;
        makeGrid(rows, columns);
}

//Random color generator function
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}