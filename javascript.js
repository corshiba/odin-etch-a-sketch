

function drawBoard( boardSize = 16 ){
    const container = document.querySelector('.container');

    // Clear the board
    container.replaceChildren();

    // Create the board based on args
    for ( let i = 0; i < boardSize; i++ ){
        let newRowDiv = document.createElement('div');
        newRowDiv.className = 'flex-row';

        for( let j = 0; j < boardSize; j++ ){
            let newSquareDiv = document.createElement('div');
            newSquareDiv.className = 'square';

            newRowDiv.appendChild(newSquareDiv);
        }

        container.appendChild(newRowDiv);
    }

    attachEventListener();
}

drawBoard();

const btn = document.querySelector('.btn-create');
btn.addEventListener('click', promptAndRefresh);

function promptAndRefresh(){
    const currentBoard = document.querySelector('.container');
    let previousSize = currentBoard.children.length;

    // prompt user for board size
    let boardSize = parseInt( prompt("What is the new board size?", previousSize) );
    console.log(boardSize);
    drawBoard(boardSize);

    attachEventListener();
}

function attachEventListener(){
    // get all square divs
    const squares = document.querySelectorAll('.square');

    squares.forEach( (square) => {
        square.addEventListener('mouseover', hoverEffect);
    });
}

function hoverEffect(event) {
    this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
   //this.classList.add('hoverColor');
}