const containerDiv = document.querySelector('#container')
const gridItemDiv = document.querySelectorAll('div.grid-item');

makeGrid(16, 16);

function makeGrid(rows, columns) {
    containerDiv.style.setProperty('--grid-rows', rows)
    containerDiv.style.setProperty('--grid-columns', columns)
    containerDiv.style.width = "960px";
    containerDiv.style.overflow = "hidden";                                     //Overflow? Make grid fit inside set parameters
    for (i = 0; i < (rows * columns); i++) {
        const box = getBoxElement();
        const innerBox = getBoxElement();
        containerDiv.appendChild(box);
        box.appendChild(innerBox).classList.add('grid-item');
        box.addEventListener('mouseover', () => {
            if (box.style.backgroundColor == ('')) {
                box.style.backgroundColor = '#000000';
                innerBox.style.backgroundColor = getRandomColor();
                innerBox.style.opacity = '1';
            }
            else if (innerBox.style.opacity > 0) {
                innerBox.style.opacity = parseFloat(innerBox.style.opacity) - .10;
            }
        })
    }
}

function promptUser() {
        document.querySelectorAll('.grid-item').forEach(e => e.remove());
        let userInput = prompt('Please enter the number of grid squares per side (Max: 100): ');
        if (userInput > 100) {
            alert('ERROR! You have entered a grid size larger than 100.');
            makeGrid(16, 16);
        } if (userInput === null || userInput < 0 || userInput == '' || isNaN(userInput)) {
            alert('Please enter a valid number 1-100: ');
            makeGrid(16, 16);
        } if (userInput >= 1 && userInput <= 100) {
            rows = userInput;
            columns = userInput;
            makeGrid(rows, columns);
        }
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

function getBoxElement() {
    let box = document.createElement('div');
    box.style.minWidth = "0";
    box.style.minHeight = "0";
    box.style.overflow = "hidden";
    return box;
}