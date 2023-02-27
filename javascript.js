

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
}

drawBoard();

