window.addEventListener('load',()=>{
    const playerOne = 'X';
    const playerTwo = '1';
    let turn = playerOne;
    const game = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    const boxes = document.querySelectorAll('.box');
    
    const isFull = () => {
        const cp_boxes = [...game].flat(Infinity);
        const isTotal = cp_boxes.every(box => box !== null);
        return isTotal;
        //if ( isWinnerRowOne == true || isWinnerRowTwo == true || isWinnerRowThree == true
            //|| isWinnerColOne == true || isWinnerColTwo == true || isWinnerColThree == true
            //|| isWinnerDiagonalOne == true || isWinnerDiagonalTwo == true){
              //  return;
            }
    //}
    
    const checkWinner = () => {
        const isWinnerRowOne = [game[0][0], game[0][1], game[0][2]].every(item => item === game[0][0]);
        const isWinnerRowTwo = [game[1][0], game[1][1], game[1][2]].every(item => item === game[1][0]);
        const isWinnerRowThree = [game[2][0], game[2][1], game[2][2]].every(item => item === game[2][0]);
        const isWinnerColOne = [game[0][0], game[1][0], game[2][0]].every(item => item === game[0][0]);
        const isWinnerColTwo = [game[0][1], game[1][1], game[2][1]].every(item => item === game[0][1]);
        const isWinnerColThree = [game[0][2], game[1][2], game[2][2]].every(item => item === game[0][2]);
        const isWinnerDiagonalOne = [game[0][0], game[1][1], game[2][2]].every(item => item === game[0][0]);
        const isWinnerDiagonalTwo = [game[0][2], game[1][1], game[2][0]].every(item => item === game[0][2]);
        if (isWinnerRowOne || isWinnerColOne || isWinnerDiagonalOne) {
            if (game[0][0] == 0) {
                alert(`Player ${playerOne} Wins`);
            } else {
                alert(`Player ${playerTwo} Wins`);
            }
            window.location.reload();
            return;
            
        }
        if (isWinnerRowTwo) {
            if (game[1][0] == 0) {
                alert(`Player ${playerOne} Wins`);
            } else {
                alert(`Player ${playerTwo} Wins`);
            }
            window.location.reload();
            return;
            
        }
        if (isWinnerRowThree) {
            if (game[2][0] == 0) {
                alert(`Player ${playerOne} Wins`);
            } else {
                alert(`Player ${playerTwo} Wins`);
            }
            window.location.reload();
            return;
            
        }
        if (isWinnerColTwo) {
            if (game[0][1] == 0) {
                alert(`Player ${playerOne} Wins`);
            } else {
                alert(`Player ${playerTwo} Wins`);
            }
            window.location.reload();
            return;
            
        }
        if (isWinnerColThree || isWinnerDiagonalTwo) {
            if (game[2][0] == 0) {
                alert(`Player ${playerOne} Wins`);
            } else {
                alert(`Player ${playerTwo} Wins`);
            }
            window.location.reload();
            return;
        }
        else alert("Game over");
    }

    boxes.forEach((box) => {
        box.addEventListener('click', () => {
          const row = box.getAttribute('data-row');
          const column = box.getAttribute('data-col');
          game[row][column] = turn === playerOne ? 0 : 1;
          console.log(row,column);
          box.innerHTML=turn;
          turn = turn === playerOne ? playerTwo : playerOne;
          if (isFull()){
            checkWinner();
          }
          
        });
    })
    
})