
let firstCard =2
let secondCard = 4
let cards = [firstCard,secondCard]
let sum  = firstCard + secondCard
let hasBlackJack = false
let isAlive = true


let message =""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")

let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector('#cards-el')
function startGame(){
    renderGame();
}

function renderGame(){
    cardEl.textContent =
      "Cards: " + "First_Card:" + cards[0] + " Second_Card:" + cards[1];
    sumEl.textContent= "Sum: "+sum

    if (sum <= 20) {
      message = "Do you want to draw a new card?";
    } else if (sum === 21) {
      message = "Congratulations! You have got blackjack.";
      hasBlackJack = true;
    } else {
      message = "you are out!";
      isAlive = false;
    }
    messageEl.textContent=message;

}

function newCard(){

    console.log("Drawing a new card from the deck!")
    let card = 7
    sum+=card
    renderGame()

}