SlotMachineType = {
  'coffee': 1,

};
var SlotMachine = function() {
  this.slot1 = [1,2,3];
  this.slot2 = [4,5,6];
  this.slot3 = [7,8,9];
};


SlotMachine.prototype.spin = function() {
  var result = [this.slot1[slotIndex()], this.slot2[slotIndex()], this.slot3[slotIndex()]];
  return result;
};


SlotMachine.prototype.isWinner = function(arr) {
  if (arr[0] === 1 && arr[1] === 4 && arr[2] === 7) {
    return SlotMachineType.coffee;
  } else if (arr[0] === 2 && arr[1] === 5 && arr[2] === 8) {
    return 2;
  } else if (arr[0] === 3 && arr[1] === 6 && arr[2] === 9) {
    return 3;
  } else {
    return false;
  }
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






// new SlotMachine().spin() => [0, 2, 2];
// SlotMachine.is_winner()


// SlotController
//   => start_spin
//     result = new SlotMachine.spin();
//     // Start the ui spinning
//     // Schedule stopping the ui spinning
//     // Scheduling updating with images that map to result
//   => stop_spin
//   => load_images


