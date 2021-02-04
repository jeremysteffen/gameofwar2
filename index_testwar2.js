var expect=chai.expect;
describe("war2", function(){
    describe("Player", function(){
        const player= new Player("Aimee");
        it("Player", function(){
            expect(player.name).to.equal("Aimee")
       }) 

       it("addCardsToHand", function(){
           let arrayOfCards =[
               new Card("Suit","Face",1)
           ]
           player.addCardsToHand(arrayOfCards)
           expect(player.hand.length).to.equal(1)
       })

       it("playCard", function(){
           let card=player.playCard()
           expect(card.suit).to.equal("Suit")
           expect(card.face).to.equal("Face")
           expect(card.value).to.equal(1)
       })

       it("increaseScore", function(){
           expect(player.score).to.equal(0)
           player.increaseScore()
           expect(player.score).to.equal(1)
       })
    })

     //   it("handIsEmpty", function(){
     //       let hand=player.playHand() 
     //       expect(hand).to.equal()
     //       player.handIsEmpty()
      //      expect(hand).to.equal(0)
      //  })
    
})

