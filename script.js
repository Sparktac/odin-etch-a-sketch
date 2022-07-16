const containerDiv = document.querySelector('#container')
const gridItemDiv = document.querySelectorAll('div.grid-item');

makeGrid(16, 16);

function makeGrid(rows, columns) {
    containerDiv.style.setProperty('--grid-rows', rows)
    containerDiv.style.setProperty('--grid-columns', columns)
    for (i = 0; i < (rows * columns); i++) {
        const box = getBoxElement();
        const innerBox = getBoxElement();
        containerDiv.appendChild(box).classList.add('grid-item-outer');
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
        document.querySelectorAll('.grid-item-outer').forEach(e => e.remove());
        let userInput;
        userInput = prompt('Please enter the number of grid squares per side (Max: 100): ');
        while (isInvalidUserInput(userInput)) {    
            userInput = prompt('Please enter a valid number 1-100: ');
            console.log(userInput);
        }
        makeGrid(userInput, userInput);

        // if (userInput > 100) {
        //     alert('ERROR! You have entered a grid size larger than 100.');
        // } if (isNaN(userInput) || userInput == null || userInput <= 0 || userInput == '') {
        //     alert('Please enter a valid number 1-100: ');  
        // } if (userInput >= 1 && userInput <= 100) {
        //     rows = userInput;
        //     columns = userInput;
        //     makeGrid(rows, columns);
        // }
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
    return box;
}

function isInvalidUserInput(userInput) {
    if (userInput > 100) {
            alert('ERROR! You have entered a grid size larger than 100.');
            return true;
        } if (isNaN(userInput) || userInput == null || userInput <= 0 || userInput == '') {
            alert('Please enter a valid number 1-100: ');
            return true;
    } 
    return false;
}