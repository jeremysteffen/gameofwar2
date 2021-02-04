//Coding Steps:
//For the final project you will be creating an automated version 
//of the classic card game WAR.
//Think about how you would build this project and 
//write your plan down. Consider classes such 
//as Card, Deck, and Player and what fields 
//and methods they might each have. 
//You can implement the game however you’d like 
//(i.e. printing to the console, using alert, or some other way). 
//The completed project should, when ran, do the following:
//-	Deal 26 Cards to two Players from a Deck. 
//-	Iterate through the turns where each Player plays a Card
//-	The Player who played the higher card is awarded a point
//o	Ties result in zero points for either Player
//-	After all cards have been played, display the score.
//Write Unit Tests using Mocha and Chai for each 
//of the functions you write.

//test Player and Deck / create a Deck and check to make sure it has cards / create a Player

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
    addCardsToHand(cards) {
        this.hand = cards
    }
    playCard() {
        return this.hand.pop()
    }
    increaseScore() {
        this.score++
    }
    handIsEmpty() {
        return !this.hand.length > 0
    }
}

class Deck {
    constructor() {
        this.cards = [];
        const suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
        const facesAndValues = [
            {face: "Ace", value:16},
            {face: "King", value: 15},
            {face: "Queen", value: 14},
            {face: "Jack", value: 13},
            {face: "Ten", value: 10},
            {face: "Nine", value: 9},
            {face: "Eight", value: 8},
            {face: "Seven", value: 7},
            {face: "Six", value: 6},
            {face: "Five", value: 5},
            {face: "Four", value: 4},
            {face: "Three", value: 3},
            {face: "Two", value: 2},
        ]
        suits.forEach(suit => {
            facesAndValues.forEach(faceAndValue => {
                this.cards.push(new Card(suit, faceAndValue.face, faceAndValue.value))
            }
            )
        }) 
        this.cards = this.cards.sort( () => Math.random() - 0.5) ;
    }
}

class Card {
    constructor(suit, face, value) {
        this.suit = suit;
        this.face = face;
        this.value = value;
    }
        
}

// create 2 players

let player1 = new Player("Jeremy")
let player2 = new Player("Aimee")

// build a deck

let deck = new Deck()

// deal cards to players

player1.addCardsToHand(deck.cards.slice(0, 26))
player2.addCardsToHand(deck.cards.slice(26))

// play the game

var round = 0
function scoreAround() {
    round++
    let player1currentCard = player1.playCard()
    let player2currentCard = player2.playCard()

    if (player1currentCard.value > player2currentCard.value) {
        player1.increaseScore()
        console.log(`Player1 wins round: ${round}`)
        
    } else if (player1currentCard.value < player2currentCard.value) {
        player2.increaseScore()
        console.log(`Player2 wins round: ${round}`)
    } else {
        console.log(`Round ${round} was a draw`)
    }    
}

while (!player1.handIsEmpty() || !player2.handIsEmpty() ) {
    scoreAround()
}

// score the game winner
    if (player1.score > player2.score) {
        console.log("Player1 wins")
    } else if (player1.score < player2.score) {
        console.log("Player2 wins")
    } else {
        console.log("Draw")
    }
 
    console.log (`Player1 score: ${player1.score}`)
    console.log (`Player2 score: ${player2.score}`)