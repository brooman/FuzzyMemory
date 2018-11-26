const gameboard = document.querySelector('#gameboard')
let pairCount = 5

startGame(gameboard, pairCount)

const reset = document.querySelector('#reset')

reset.addEventListener('click', function(){resetGame(gameboard, pairCount)})