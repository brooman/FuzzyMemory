const gameboard = document.querySelector('#gameboard')
let pairCount = 6

startGame(gameboard, pairCount)

const reset = document.querySelector('#reset')

reset.addEventListener('click', function(){resetGame(gameboard, pairCount)})