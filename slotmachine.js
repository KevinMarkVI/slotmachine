var SlotMachine = function(el) {
  this.slot1 = [1,2,3];
  this.slot2 = [4,5,6];
  this.slot3 = [7,8,9];
  this.el = el;
};



SlotMachine.prototype.play = function() {
  var spinMachine = spin(this.slot1, this.slot2, this.slot3);
  var selections = spinMachine.join();
  if (selections === '1,4,7') {
    console.log("YOU WIN COFFEE!!!");
  } else if (selections === '2,5,8') {
    console.log("YOU WIN TEA!!!");
  } else if (selections === '3,6,9') {
    console.log("YOU WIN ESPRESSO!!!");
  } else {
    console.log("YOU LOSE!!! TRY AGAIN!");
  }
};

var spin = function(arr1, arr2, arr3)  { 
  var results = [arr1[slotIndex()], arr2[slotIndex()], arr3[slotIndex()]];
  return results;
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

var slots = {
  '1': './images/coffeemaker.jpg',
  '2': './images/teapot.jpg',
  '3': './images/espressomachine.jpg',
  '4': './images/coffeefilter.jpg',
  '5': './images/teastrainer.jpg',
  '6': './images/espressotamper.jpg',
  '7': './images/coffeegrounds.jpg',
  '8': './images/looseleaftea.jpg',
  '9': './images/groundespresso.jpg'
};

$(function() {
  $('button').click(function() {
    console.log("BUTTON WORKS");
  });
  loadImages('#machine');
});


var loadImages = function(target, pathArr) {
  pathArr = pathArr || [slots['1'], slots['5'], slots['9']];
  for (var i = 0; i < pathArr.length; i++){
    $('<img id="slot'+ i +'" src="'+ pathArr[i] +'">').load(function() {
      $(this).appendTo(target);
    });
  }
};




