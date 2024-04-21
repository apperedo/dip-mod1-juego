window.addEventListener('load',()=>{
    const playerOne = 'X';
    const playerTwo = '0';
    let turn = playerOne;
    const game = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('click', () => {
          const row = box.getAttribute('data-row');
          const column = box.getAttribute('data-col');
          game[row][column] = turn === playerOne ? 0 : 1;
          console.log(row,column);
          box.innerHTML=turn;
          turn = turn === playerOne ? playerTwo : playerOne;
          console.log(game);
        });
    })
    
})