function viewFactory(cards, numbers) {
  
  function rollDice() {
    // randomly generate numbers between 1 and 3. This is to help ensure that we don't overwrite any squares that aren't empty
    return Math.floor(Math.random() * 3)
  }
  
  // Made this a separate function to avoid repetition; pass in the 'card' you need, along with the class of the column you need to populate, and the number you need to populate it with
  function populateIndividualColumn(viewCard, requiredColumn, number) {
    // Grab all of the columns we want
    var columnNodeList = viewCard.querySelectorAll(requiredColumn)
    
    // Convert this into an array to make it easier to work with
    var columnArray = Array.prototype.slice.call(columnNodeList)
    
    // If a space has already been fille, we need to ensure that we don't try and re-populate it
    var unavailableSpaces = []
    
    // Loop through the column array and record any spaces already filled
    for (var i = 0; i < columnArray.length; i+=1) {
      if(columnArray[i].innerHTML !== '&nbsp;') {
        unavailableSpaces.push(i)
      }
    }
    console.log(unavailableSpaces)
    var diceRoll = rollDice()
    while(unavailableSpaces.indexOf(diceRoll) !== -1) {
      diceRoll = rollDice()
    }
    columnArray[diceRoll].innerHTML = number;
  }
  return {
    findCards : function() {
      return document.querySelectorAll('.card')
    },
    populateRows : function (modelCard, viewCard) {
      modelCard.forEach(function(number) {
        switch(true) {
          case number < 10:
            populateIndividualColumn(viewCard, '.column-1', number)
            break
          case number < 20:
            populateIndividualColumn(viewCard, '.column-2', number)
            break
          case number < 30:
            populateIndividualColumn(viewCard, '.column-3', number)
            break
          case number < 40: 
            populateIndividualColumn(viewCard, '.column-4', number)
            break
          case number < 50:
            populateIndividualColumn(viewCard, '.column-5', number)
            break
          case number < 60: 
            populateIndividualColumn(viewCard, '.column-6', number)
            break
          case number < 70:
            populateIndividualColumn(viewCard, '.column-7', number)
            break
          case number < 80:
            populateIndividualColumn(viewCard, '.column-8', number)
            break
          case number <= 90:
            populateIndividualColumn(viewCard, '.column-9', number)
            break
        }
      })
    }
  }
}