function createCard(value, img){
    return `<div class="card" data-value="${value}"><h1>?</h1></div>`
}

function startGame(gameboard, pairCount){
    let cols = Math.ceil(Math.sqrt(pairCount * 2))
    let rows = Math.floor(Math.sqrt(pairCount * 2))

    let grid = `grid-template-columns: ${"1fr ".repeat(cols)};
    grid-template-rows: ${"1fr ".repeat(rows)};`
    console.log(grid)

    gameboard.setAttribute('style', grid)


    //We make duplicates by creating (pairCount * 2) cards
    //Card value is 'i' if we are below paircount and 'i' - 'pairCount' if we are above.
    //This creates 2 of each card with same value.
    for (let i = 0; i < pairCount * 2; i++) {
        let value = i >= pairCount ? i - pairCount : i
        gameboard.innerHTML += createCard(value)
    }

    const cards = document.querySelectorAll('.card')
    cards.forEach(function(card){
        card.addEventListener('click', function(){
            card.firstChild.textContent = card.dataset.value;
            card.classList.add('active')
            checkState()
        })
    })
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
        //Unselect selected cards
        activeCards.forEach(function(card){
            card.classList.remove('active')
            window.setTimeout(function(){if(!card.classList.contains('completed')){card.firstChild.textContent = '?'}}, 600)
        })

        //Check if they matched
        if(activeCards[0].dataset.value === activeCards[1].dataset.value){
            activeCards[0].classList.add('completed')    
            activeCards[1].classList.add('completed')

            //Display their value when completed
            activeCards[0].firstChild.textContent = activeCards[0].dataset.value;
            activeCards[1].firstChild.textContent = activeCards[1].dataset.value;
        }
    }

    //Check if game is completed
    const completedCards = document.querySelectorAll('.completed')
    if(completedCards.length === cards.length){
        console.log('Game won!')
    }
}