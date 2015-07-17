
var SlotMachine = function() {
};

//Creates a random slot machine pull
SlotMachine.prototype.spin = function() {
  var result = [this.randomSlot(), this.randomSlot(), this.randomSlot()];
  return result;
};

//Determines whether the random pull is a winner and if so returns the appropriate response using the winner notifications object
SlotMachine.prototype.isWinner = function(arr) {
  if (arr[0] === arr[1] && arr[1] === arr[2]) {
    return true;
  }
  return false;
};

//Creates random indexes to make a selection from slot1, slot2, and slot3
SlotMachine.prototype.randomSlot = function() {
  var rand = Math.random(); 
  if (rand <= .33) {
    return 0;
  } else if (rand > .33 && rand <= .66) {
    return 1;
  } else {
    return 2;
  }
};



