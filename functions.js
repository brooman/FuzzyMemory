function createCard(value, img){
    return `<div class="card flipped" data-value="${value}">${img}</div>`
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