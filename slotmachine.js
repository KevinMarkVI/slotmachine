var SlotMachine = function() {
  this.slot1 = [1, 2, 3];
  this.slot2 = [1, 2, 3];
  this.slot3 = [1, 2, 3];
};


SlotMachine.prototype.spin = function()  { 
  return '' + this.slot1[slotIndex()] + '' + this.slot2[slotIndex()] + '' +  this.slot3[slotIndex()] + '';
};

var slotIndex = function() {
  var rand = Math.random(); 
  if (rand <= .33) {
    return 0;
  } else if (rand > .33 && rand <= .66) {
    return 1;
  } else {
    return 2;
  }
};

var result = function(str) {
  if (str === '111' || str === '222' || str === '333') {
    console.log("YOU WIN!!!!");
  } else {
    console.log("YOU LOSE!!! TRY AGAIN!");
  }
};