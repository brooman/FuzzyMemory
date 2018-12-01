const gameboard = document.querySelector('#gameboard')

const difficulty = document.querySelectorAll('.difficulty-selector')

const pairCount = {
    easy: 6,
    medium: 7,
    hard: 8
}

let setDifficulty = "easy"

difficulty.forEach(function(item){
    item.addEventListener('click', function(){
        setDifficulty = this.id;
        resetGame(gameboard, pairCount[setDifficulty])
    })
})

startGame(gameboard, pairCount[setDifficulty])


//Register Reset button
const reset = document.querySelector('#reset')

reset.addEventListener('click', function(){resetGame(gameboard, pairCount[setDifficulty])})