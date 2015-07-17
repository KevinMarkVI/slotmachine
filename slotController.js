
$(function() {
  $('.animation').hide();
  var machine = new SlotMachine();
  var clicked = false;
  //Tests
  runTests();

  $('button').click(function() {
    if (!clicked) {
      clicked = true;
      var play = machine.spin();
      var uiMachine = new UIController(play);
      uiMachine.buttonClick(machine);
      setTimeout(function() {clicked = false;}, slotTimings.animationSpin + slotTimings.slotStopInterval * 3);
    }
  });
});

var slotTimings = {
  'slotStopInterval': 500,
  'animationSpin': 2000
};

var resultNotifications = {
  0: "You win a hot cup of coffee!!!",
  1: "You win a hot cup of tea!!!",
  2: "You win a hot cup of espresso!!!",
  3: "Not a winner!!! Try again!!!"
};

var slotImages = {
  1: ['./images/coffeemaker.jpg', './images/teapot.jpg', './images/espressomachine.jpg'],
  2: ['./images/coffeefilter.jpg', './images/teastrainer.jpg', './images/espressotamper.jpg'],
  3: ['./images/coffeegrounds.jpg', './images/looseleaftea.jpg', './images/groundespresso.jpg']
};

var UIController = function(play) {
  this.play = play;
};

//Stops the images and sets the correct images from the randomly created results
UIController.prototype.stopSpin = function() {
  var results = this.play; 
  $('#animFrame1').hide();
  $('.staticImage1').attr('src', slotImages[1][results[0]]).show();
  setTimeout(function() {$('#animFrame2').hide(); $('.staticImage2').attr('src', slotImages[2][results[1]]).show();}, slotTimings.slotStopInterval);
  setTimeout(function() {$('#animFrame3').hide(); $('.staticImage3').attr('src', slotImages[3][results[2]]).show();}, slotTimings.slotStopInterval * 2);
};

//Alerts the user of the results
UIController.prototype.loadResult = function(winner) {
  var notification;
  if (winner) {
    notification = this.play[0];
  } else {
    notification = 3;
  }
  $('<h2></h2>').text(resultNotifications[notification]).appendTo('#resultsDisplay');
};

UIController.prototype.buttonClick = function(machine) {
    $('.staticImage1').hide();
    $('.staticImage2').hide();
    $('.staticImage3').hide();
    $('.animation').show();
    $('h2').remove();
    var winner = machine.isWinner(this.play);  
    setTimeout((function () {this.stopSpin(); }).bind(this), slotTimings.animationSpin);
    setTimeout((function() {this.loadResult(winner);}).bind(this), slotTimings.animationSpin + slotTimings.slotStopInterval * 2);
};
