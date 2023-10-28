const gridCont = document.querySelector('#grid-container');

let numberOfBoxes = 16;

let createGrid = function() { for (let i = 0; i < numberOfBoxes; i++) {
    let gridRow = document.createElement('div');
    gridRow.className = 'gridRow';
    for (let i = 0; i < numberOfBoxes; i++) {
        let gridElem = document.createElement('div');
        gridElem.style.border = '0.1px solid black';
        gridElem.style.width = 'auto';
        gridElem.style.height = 'auto';
        gridElem.style.flexGrow = '1';
        gridRow.appendChild(gridElem);
        gridElem.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'black';
            this.style.opacity="0.1";
        });
    }
    gridRow.style.display = 'flex';
    gridRow.style.flexGrow = '1';
    gridCont.appendChild(gridRow);
}
}

createGrid();

let btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
    gridCont.innerHTML = "";
    numberOfBoxes = document.querySelector('#input').value;
    if (numberOfBoxes > 100) {
        numberOfBoxes = 100;
    } else if (numberOfBoxes == '') {
        numberOfBoxes = 16;
    }
    createGrid();
    console.log(numberOfBoxes);
});

const resetbtn = document.querySelector('#resetbtn');

resetbtn.addEventListener('click', function() {
    gridCont.innerHTML = "";
    createGrid();
});
