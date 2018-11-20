function createCard(value, img){
    return `<div class="card" data-value="${value}">${img}</div>`
}

function startGame(gameboard, pairCount){
    //We make duplicates by creating (pairCount * 2) cards
    //Card value is 'i' if we are below paircount and 'i' - 'pairCount' if we are above.
    //This creates 2 of each card with same value.
    for (let i = 0; i < pairCount * 2; i++) {
        let value = i >= pairCount ? i - pairCount : i
        gameboard.innerHTML += createCard(value, 'string')
    }
}

function resetGame(gameboard, pairCount){
    gameboard.innerHTML = ''
    startGame(gameboard, pairCount)
}

//Check the state of the game
function checkState(){
    const cards = document.querySelectorAll('.card')
    const activeCards = document.querySelectorAll('.active')
    
    //Compare selected card values and complete them on match
    if(activeCards.length === 2){
        if(activeCards[0].dataset.value === activeCards[1].dataset.value){
            activeCards[0].classList.add('completed')
            activeCards[1].classList.add('completed')
        }

        //Unselect selected cards
        activeCards.forEach(function(card){
            card.classList.remove('active')
        })
    }

    //Check if game is completed
    const completedCards = document.querySelectorAll('.completed')
    if(completedCards.length === cards.length){
        console.log('Game won!')
    }
}