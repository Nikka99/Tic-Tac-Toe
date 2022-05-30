console.log('Tic Tac Toe SuunChokadi');
let music = new Audio('music.mp3');
let audioTurn = new Audio('ting.mp3');
let gameover = new Audio('gameover.mp3');
let turn = "X";
let isgameover = false;

//function to change the turn 

const changeTurn = ()=> {
    return turn === "X"? "0" : "X";
}

//function to check for a win

const checkWin = ()=> {
    let boxtext = document.getElementsByClassName('boxvalue');
    let wins= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText)  && (boxtext[e[0]].innerText !== ""))
        {
            
        }
    })
}