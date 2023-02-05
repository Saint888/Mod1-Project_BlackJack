// Keeps track of the dealer/player card sum.
let dealerSum = 0; 
let playerSum = 0; 

// Keeps track of the dealer/player ace count to consider how many times 
// we can subtract(-=) 10 so that players are safely below 21.
// Example: A, 2 + 10 -> 11 + 2 + 10 = 23 (no good -> leads to early bust)
//          A, 2 + 10 -> 1 + 2 + 10 = 13 (good -> keeps player below 21)
let dealerAceCount = 0; 
let playerAceCount = 0; 

let faceDown; // Keeps track of dealer face down card 
let deck;   //Keeps track of cards in deck

let playerHit = true; // Allows player 1 to draw while "yourSum" <= 21.

window.onload = function() { 
    buildDeck(); // Builds deck stack for gameplay.
    shuffleDeck(); // Shuffles deck for gameplay.
    startGame(); // Starts the game.
}

// Creates array of cards with item names that correspond with names of card images in img folder.
// Inorder to build the deck for gameplay.
function buildDeck() { 
    let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q']
    let suits = ['C', 'D', 'H', 'S']
    deck = [];

    for(let i = 0; i < suits.length; i++){ // Loops though all of the suits.
        for(let j = 0; j < cards.length; j++){ // For each suit, this loops through all of the cards.
            deck.push(cards[j] + '-' + suits[i]); // Ex: A-C -> K-C, A-D -> K-D, etc.

        }
    }
    // console.log(deck)
}

// Randomizes (shuffles) through array of cards each time the page is loaded or refreshed.
// Inorder to create a fair gameplay.
function shuffleDeck(){
    for(let i = 0; i < deck.length; i++){
        let j = Math.floor(Math.random() * deck.length);
        let tempSwap = deck[i];
        deck[i] = deck[j];
        deck[j] = tempSwap;
    }
    console.log(deck)
}

function startGame() {
    faceDown = deck.pop(); // Deals card to dealer first.
    dealerSum += getCard(faceDown);
    dealerAceCount += checkAce(faceDown);
    // console.log(faceDown)
    // console.log(dealerSum)
    while (dealerSum < 17){
        let cardPic = document.createElement('img');
        let card = deck.pop();
        cardPic.src = './img/cards/' + card + '.png';
        dealerSum += getCard(card);
        dealerAceCount += checkAce(card);
        document.getElementById('dealer-cards').append(cardPic);
    }
    console.log(dealerSum);

    for (let i = 0; i < 2; i++){
        let cardPic = document.createElement('img');
        let card = deck.pop();
        cardPic.src = './img/cards/' + card + '.png';
        playerSum += getCard(card);
        playerAceCount += checkAce(card);
        document.getElementById('player-cards').append(cardPic);  
    }

    console.log(playerSum)
    document.getElementById('hit').addEventListener('click', hit);
    document.getElementById('stay').addEventListener('click', stay);

}

function hit() {
    if(!playerHit){
        return;
    }
    let cardPic = document.createElement('img');
    let card = deck.pop();
    cardPic.src = './img/cards/' + card + '.png';
    playerSum += getCard(card);
    playerAceCount += checkAce(card);
    document.getElementById('player-cards').append(cardPic); 

    if (reduceAce(playerSum, playerAceCount) > 21){
        playerHit = false;
    }
        
}

function stay(){
   dealerSum = reduceAce(dealerSum, dealerAceCount);
   playerSum = reduceAce(playerSum, playerAceCount); 

   playerHit = false;
   document.getElementById('face-down').src = './img/cards/' + faceDown + '.png';

   let message = '';

   if (playerSum > 21){
        message = 'You Lose!';

   }else if(dealerSum > 21){
        message = 'You Win!';

   }else if (playerSum == dealerSum){
        message = 'Draw!';

   }else if (playerSum > dealerSum){
        message = 'You Win!';

   }else if (playerSum < dealerSum){
        message = 'You Lose!'
   }

   document.getElementById('dealer-sum').innerText = dealerSum;
   document.getElementById('player-sum').innerText = playerSum;
   document.getElementById('results').innerText = message;
}

function getCard(card) {
    let data = card.split('-');
    let value = data[0];

    if(isNaN(value)){ // Checking to see if the value is not a number -> checks if value has "digits", if it does not then the statement is true.
        if(value == 'A') { 
            return 11
        }
        return 10;
    }
    return parseInt(value);
}

function checkAce(card) {
    if(card[0] == 'A'){
        return 1;
    }
    return 0;
}

function reduceAce(playerSum, playerAceCount){
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}

