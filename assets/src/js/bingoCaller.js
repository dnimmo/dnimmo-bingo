function bingoCaller(maxNumber) {
  var state = {
    numbersAvailable : []
  }
  var i = 0
  while(i++ !== maxNumber) {
    state.numbersAvailable.push(i)
  }
  return {
    callNumber : function() {
      var numberCalled = state.numbersAvailable[Math.floor(Math.random() * state.numbersAvailable.length)]
      // remove this number from the available numbers
      var numberToRemove = state.numbersAvailable.indexOf(numberCalled)
      state.numbersAvailable.splice(numberToRemove, 1)
      return numberCalled   
    }
  }
}