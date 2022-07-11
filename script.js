const containerDiv = document.querySelector('#container')
let gridCount = 0;

function makeGrid(rows, columns) {
    containerDiv.style.setProperty('--grid-rows', rows)
    containerDiv.style.setProperty('--grid-columns', columns)
    console.log(containerDiv);
    console.log(rows);
    console.log(columns);
    for (i = 0; i < (rows * columns); i++) {
        let box = document.createElement('div');
        box.innerText = (i + 1);                //Used to number or label boxes remove when unneeded
        containerDiv.appendChild(box).className = 'grid-item';
    }
}

makeGrid(16, 16);

function chngBgColor() {
    let colorBox = document.querySelectorAll('div.grid-item');
    colorBox.style.setProperty('background-color', 'lightblue')
}


makeGrid.addEventListener('mouseover', chngBgColor);