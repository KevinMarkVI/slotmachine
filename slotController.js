
$(function() {
  var machine = new SlotMachine();
  machine.loadImages('#machine');

  $('button').click(function() {
    $('h2').remove();
    var play = machine.spin();
    var uiMachine = new UIController(play);
    uiMachine.uiSpin();
    setTimeout(function () { uiMachine.stopSpin(); }, 2000);
    var winner = machine.isWinner(play);
    setTimeout(function() {uiMachine.loadResult(winner);}, 3400);
  });
});

//KB: Context global issue.
var UIController = function(play) {
  this.play = play;
};

UIController.prototype.uiSpin = function() {
  this.slot0 = setInterval((function() {this.spinImage('#slot0', slots['1'], slots['2'], slots['3']);}).bind(this), 100);
  this.slot1 = setInterval((function() {this.spinImage('#slot1', slots['4'], slots['5'], slots['6']);}).bind(this), 100);
  this.slot2 = setInterval((function() {this.spinImage('#slot2', slots['7'], slots['8'], slots['9']);}).bind(this), 100);
};

UIController.prototype.stopSpin = function() {
  var results = this.play; //fix
  clearInterval(this.slot0);
  $('#slot0').attr('src', slots[results[0]]);

  setTimeout((function() {clearInterval(this.slot1);}).bind(this), 700);
  setTimeout(function() {$('#slot1').attr('src', slots[results[1]]);}, 800);

  setTimeout((function() {clearInterval(this.slot2);}).bind(this), 1200);
  setTimeout(function() {$('#slot2').attr('src', slots[results[2]]);}, 1300);
};

UIController.prototype.loadResult = function(notification) {
  $('<h2></h2>').text(winnerNotifications[notification]).appendTo('#resultsDisplay');
};

UIController.prototype.spinImage = function(id, img1, img2, img3) {
  var current = $(id).attr('src');
  if (current === img1) {
    $(id).attr('src', img2);
  } 
  if (current === img2) {
    $(id).attr('src', img3);
  } 
  if (current === img3) {
    $(id).attr('src', img1);
  }
};

