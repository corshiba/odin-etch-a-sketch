
const container = document.querySelector('.container');

for ( let i = 0; i < 16; i++ ){
    let newRowDiv = document.createElement('div');
    newRowDiv.className = 'flex-row';

    for( let j = 0; j < 16; j++ ){
        let newSquareDiv = document.createElement('div');
        newSquareDiv.className = 'square';

        newRowDiv.appendChild(newSquareDiv);
    }

    container.appendChild(newRowDiv);
}