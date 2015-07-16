var slotMachineType = {
  'coffee': 1,
  'tea': 2,
  'espresso': 3,
  'noWin': 4
};

var winnerNotifications = {
  1: "YOU WIN A HOT CUP OF COFFEE!!!",
  2: "YOU WIN A HOT CUP OF TEA!!!",
  3: "YOU WIN A HOT CUP OF ESPRESSO!!!",
  4: "NOT A WINNER!!! TRY AGAIN!!!"
};

var slots = {
  1: './images/coffeemaker.jpg',
  2: './images/teapot.jpg',
  3: './images/espressomachine.jpg',
  4: './images/coffeefilter.jpg',
  5: './images/teastrainer.jpg',
  6: './images/espressotamper.jpg',
  7: './images/coffeegrounds.jpg',
  8: './images/looseleaftea.jpg',
  9: './images/groundespresso.jpg'
};


var SlotMachine = function() {
  this.slot1 = [1,2,3];
  this.slot2 = [4,5,6];
  this.slot3 = [7,8,9];
};

//Creates a random slot machine pull
SlotMachine.prototype.spin = function() {
  var result = [this.slot1[this.randomSlotIndex()], this.slot2[this.randomSlotIndex()], this.slot3[this.randomSlotIndex()]];
  return result;
};

//Detirmines whether the random pull is a winner and if so returns the appropriate response using the winner notifications object
SlotMachine.prototype.isWinner = function(arr) {
  if (arr[0] === 1 && arr[1] === 4 && arr[2] === 7) {
    return slotMachineType.coffee;
  } else if (arr[0] === 2 && arr[1] === 5 && arr[2] === 8) {
    return slotMachineType.tea;
  } else if (arr[0] === 3 && arr[1] === 6 && arr[2] === 9) {
    return slotMachineType.espresso;
  } else {
    return slotMachineType.noWin;
  }
};

//Creates random indexes to make a selection from slot1, slot2, and slot3
SlotMachine.prototype.randomSlotIndex = function() {
  var rand = Math.random(); 
  if (rand <= .33) {
    return 0;
  } else if (rand > .33 && rand <= .66) {
    return 1;
  } else {
    return 2;
  }
};

//Loads the initial images to the page
//TODO: Get more images that explain what each frame uses.
SlotMachine.prototype.loadImages = function(target) {
  pathArr = [slots['1'], slots['5'], slots['9']];
  for (var i = 0; i < pathArr.length; i++){
    var img = $('<img>').attr('id', 'slot'+ i).attr('src', pathArr[i]);
    img.load(function() {
      $(this).appendTo(target);
    });
  }
};






