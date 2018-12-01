function createCard(value, img){
    return `<div class="card" data-value="${value}"><h1>?</h1></div>`
}

function createGrid(pairCount){
    const cols = Math.ceil(Math.sqrt(pairCount * 2))
    let rows = cols;

    //Check if we have an empty row, if so remove it.
    if(cols * rows > ((pairCount * 2) + cols) - 1){
        rows--;
    }

    return `grid-template-columns: ${"1fr ".repeat(cols)};
    grid-template-rows: ${"1fr ".repeat(rows)};`
}

function startGame(gameboard, pairCount){

    // Build CSS Grid to hold cards
    gameboard.setAttribute('style', createGrid(pairCount))

    //Build array of numbers
    let orderArr = []

    for (let i = 0; i < pairCount; i++) {
        orderArr.push(i)
    }

    //Duplicate array
    orderArr.push(...orderArr)

    //Shuffle array
    for(let i = orderArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = orderArr[i]
        orderArr[i] = orderArr[j]
        orderArr[j] = temp
    }

    //Create cards
    orderArr.forEach(function(value){
        gameboard.innerHTML += createCard(value)
    })

    // Register card EventListeners
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
    //Remove current gameboard and call startGame
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
            window.setTimeout(function(){
                card.classList.remove('active')
                if(!card.classList.contains('completed')){
                    card.firstChild.textContent = '?'
                }
            }, 600)
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