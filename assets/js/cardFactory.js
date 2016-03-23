function cardFactory(numbers) {
  var state = {
    numbers : numbers
  }
  
  return {
    prepareNumbers : function() {
      var length = state.numbers.length
      var numberArray = []

      // Create an array consisting of two-digit numbers
      for (var i = 0; i<length; i+=2) {
        numberArray.push(parseInt(state.numbers.slice(i, i+2)))
      }
      return numberArray
    },
    createCards : function(numberArray) {
      var length = numberArray.length
      var cardArray = []
      
      // Create an array consisting of fifteen numbers
      for (var i = 0; i<length; i+=15) {
        cardArray.push(numberArray.slice(i, i+15))
      }
      return cardArray
    },
    checkNumbersRemaining : function(card) {
      var remainingNumberCount = 0
      return remainingNumberCount
    }
  }
}