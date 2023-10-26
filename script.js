const gridCont = document.querySelector('#grid-container');

for (let i = 0; i < 16; i++) {
    let gridRow = document.createElement('div');
    gridRow.className = 'gridRow';
    for (let i = 0; i < 16; i++) {
        let gridElem = document.createElement('div');
        gridElem.style.border = '0.1px solid black';
        gridElem.style.width = '10px';
        gridElem.style.height = '10px';
        gridRow.appendChild(gridElem);
        gridElem.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'black';
        });
    }
    gridRow.style.display = 'flex';
    gridCont.appendChild(gridRow);
}

console.log(gridElem);