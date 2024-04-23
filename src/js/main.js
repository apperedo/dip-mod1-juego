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
    
    const checkWinner = () => {
        if (game[0][0] === game[0][1] && game[0][0] === game[0][2] && game[0][0] !== null|| game[0][0] === 
            game[1][0] && game[0][0] ===game[2][0] && game[0][0] !== null|| game[0][0] === game[1][1] && 
            game[0][0] === game[2][2] && game[0][0] !== null) {
            if (game[0][0] == 0) {
                alert(`Player ${playerOne} Wins`);
            } else {
                alert(`Player ${playerTwo} Wins`);
            }
            window.location.reload();
            return;
        }
        if (game[1][0] === game[1][1] && game[1][0] === game[1][2] && game[1][0] !== null) {
            if (game[1][0] == 0) {
                alert(`Player ${playerOne} Wins`);
            } else {
                alert(`Player ${playerTwo} Wins`);
            }
            window.location.reload();
            return;
        }
        if (game[2][0] === game[2][1] && game[2][0] === game[2][2] && game[2][0] !== null) {
            if (game[2][0] == 0) {
                alert(`Player ${playerOne} Wins`);
            } else {
                alert(`Player ${playerTwo} Wins`);
            }
            window.location.reload();
            return;
        }
        if (game[0][1] === game[1][1] && game[0][1] === game[2][1] && game[0][1] !== null) {
            if (game[0][1] == 0) {
                alert(`Player ${playerOne} Wins`);
            } else {
                alert(`Player ${playerTwo} Wins`);
            }
            window.location.reload();
            return;
        }
        if (game[0][2] === game[1][2] && game[0][2] === game[2][2] && game[0][2] !== null|| game[0][2] === 
            game[1][1] && game[0][2] === game[2][0] && game[0][2] !== null) {
            if (game[2][0] == 0) {
                alert(`Player ${playerOne} Wins`);
            } else {
                alert(`Player ${playerTwo} Wins`);
            }
            window.location.reload();
            return;
        }
        if (isFull()) {
            alert ("Game over")
        }
    }

    const hasResults = () => {
        const result_boxes = [...game].flat(Infinity);
        const results = result_boxes.some(box => box !== null);
        console.log(result_boxes);
        return results;
    }

    const isFull = () => {
        const full_boxes = [...game].flat(Infinity);
        const isTotal = full_boxes.every(box => box !== null)
        return isTotal;
    }

    boxes.forEach((box) => {
        box.addEventListener('click', () => {
          const row = box.getAttribute('data-row');
          const column = box.getAttribute('data-col');
          game[row][column] = turn === playerOne ? 0 : 1;
          console.log(row,column);
          box.innerHTML=turn;
          turn = turn === playerOne ? playerTwo : playerOne;
          if (hasResults()){
            checkWinner();
          }
        });
    })
})