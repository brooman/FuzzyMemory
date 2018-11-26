const gameboard = document.querySelector('#gameboard')
let pairCount = 5

startGame(gameboard, pairCount)

const cards = document.querySelectorAll('.card')
cards.forEach(function(card){
    card.addEventListener('click', function(){
        card.firstChild.textContent = card.dataset.value;
        card.classList.add('active')
        checkState()
    })
})