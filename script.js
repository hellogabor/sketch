const gridCont = document.querySelector('#grid-container');

let numberOfBoxes = 16;

let colorChanger = darkener;

function darkener(item) {
    let opacityValue = parseFloat(item.getAttribute('data-opacity'));
    opacityValue += 0.2;
    if (opacityValue > 1) {
        opacityValue = 1;
    }
    item.setAttribute('data-opacity', opacityValue);
    item.style.opacity = `${opacityValue}`;
}

const randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

function colorizer(item) {
    item.style.backgroundColor = `${randomColor()}`;
    item.style.opacity = '1';
    // console.log(item.style.backgroundColor = `${randomColor}`);
}

let createGrid = function() { 
    for (let i = 0; i < numberOfBoxes; i++) {
        const gridRow = document.createElement('div');
        gridRow.className = 'gridRow';
        for (let i = 0; i < numberOfBoxes; i++) {
            const gridElem = document.createElement('div');
            gridElem.style.border = '0.1px solid black';
            gridElem.style.width = 'auto';
            gridElem.style.height = 'auto';
            gridElem.style.flexGrow = '1';
            gridElem.style.display = 'flex';
            gridRow.appendChild(gridElem);
            const gridInnerElem = document.createElement('div');
            gridInnerElem.style.flexGrow = '1';
            gridInnerElem.style.backgroundColor = 'black';
            gridInnerElem.style.opacity = '0';
            gridInnerElem.setAttribute('data-opacity', '0');
            gridElem.appendChild(gridInnerElem);
            gridInnerElem.addEventListener('mouseover', () => colorChanger(gridInnerElem));
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
    numberOfBoxes = 16;
    gridCont.innerHTML = "";
    createGrid();
});

const toggleRandom = document.querySelector('#randomcolors');

toggleRandom.addEventListener('click', function() {
    if(colorChanger == darkener) {
        colorChanger = colorizer;
    } else {
        colorChanger = darkener;
    }
    numberOfBoxes = 16;
    gridCont.innerHTML = "";
    createGrid();
});