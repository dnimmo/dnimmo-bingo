// Bingo numbers are set up as a string here because that's what was dictated in the question, but the factory function is set up to prepare an unlimited number of cards, so that we'd have the option of getting any string of numbers from an API/randomly generating (within parameters for bingo rules) etc.
var bingoNumbers = '011722475204365360702637497481233455758302154058881928446789061241507324334876840738576186051132437816395663800818206590104559628214294664710935667287132130687703253151692742547985'

var cardFactory = cardFactory(bingoNumbers)
var viewFactory = viewFactory()
var bingoCaller = bingoCaller(90) // bingoCaller takes the highest number available in the game, to allow us to have variations with different numbers, to account for local variations in Bingo rules

// Setup
var numbers = cardFactory.prepareNumbers()
var cards = cardFactory.createCards(numbers)
var viewCards = viewFactory.findCards()

// Populate cards
for (var i = 0; i < cards.length; i+=1) {
  viewFactory.populateRows(cards[i], viewCards[i]) 
  viewFactory.checkRemainingNumberCount(viewCards[i])
}

// Start game
function gameRound() {
  var isGameOver = false
  var numberCalled = bingoCaller.callNumber()
  viewFactory.updateDisplayNumber(numberCalled)

  // Update counts per turn
  for (var i = 0; i < cards.length; i+=1) {
    if (viewFactory.checkNumberCalled(viewCards[i], numberCalled)) {
      // checkRemainingNumberCount will return true if the game is over
      isGameOver = viewFactory.checkRemainingNumberCount(viewCards[i], true)
      if(isGameOver) {
        viewCards[i].classList.add('winner')
      }
      break;
    }
  }
  if(isGameOver) {
    clearInterval(interval)
  }
}
gameRound()
var interval = setInterval(gameRound, 2000)
