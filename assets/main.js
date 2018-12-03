const gameboard = document.querySelector('#gameboard')

const difficulty = document.querySelectorAll('.difficulty-selector')

//How many pairs on each difficulty
const pairCount = {
    easy: 8,
    medium: 9,
    hard: 10
}

//Selected difficulty
let setDifficulty = "easy"

//Update difficulty
difficulty.forEach(function(item){
    item.addEventListener('click', function(){
        setDifficulty = this.id;
        resetGame(gameboard, pairCount[setDifficulty])
        updateStatusText(`${setDifficulty.toUpperCase()}`)
    })
})

//Start the game on load
startGame(gameboard, pairCount[setDifficulty])
updateStatusText(`${setDifficulty.toUpperCase()}`)

//Register Reset button
const reset = document.querySelector('#reset')

reset.addEventListener('click', function(){
    resetGame(gameboard, pairCount[setDifficulty])
    updateStatusText(`${setDifficulty.toUpperCase()}`)
})