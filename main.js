const gameboard = document.querySelector('#gameboard')

const difficulty = document.querySelectorAll('.difficulty-selector')

//How many pairs on each difficulty
const pairCount = {
    easy: 6,
    medium: 7,
    hard: 8
}

//Selected difficulty
let setDifficulty = "easy"

//Update difficulty
difficulty.forEach(function(item){
    item.addEventListener('click', function(){
        setDifficulty = this.id;
        resetGame(gameboard, pairCount[setDifficulty])
    })
})

//Start the game on load
startGame(gameboard, pairCount[setDifficulty])


//Register Reset button
const reset = document.querySelector('#reset')

reset.addEventListener('click', function(){resetGame(gameboard, pairCount[setDifficulty])})