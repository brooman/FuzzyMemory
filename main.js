const gameboard = document.querySelector('#gameboard')
let pairCount = 8

startGame(gameboard, pairCount)

const reset = document.querySelector('#reset')

reset.addEventListener('click', function(){resetGame(gameboard, pairCount)})