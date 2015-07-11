$(function(){

  var stopSpin = function() {
    clearInterval(slot1);
    setTimeout(function() {clearInterval(slot2);}, 400);
    setTimeout(function() {clearInterval(slot3);}, 1000);
  };

  var changeImage = function(id, img1, img2, img3) {
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

  var startSpin = function() {
    slot1 = setInterval(function() {changeImage('#slot1', './images/coffeemaker.jpg', './images/teapot.jpg', './images/espressomachine.jpg');}, 100);
    slot2 = setInterval(function() {changeImage('#slot2', './images/teastrainer.jpg', './images/coffeefilter.jpg', './images/espressotamper.jpg');}, 100);
    slot3 = setInterval(function() {changeImage('#slot3', './images/coffeegrounds.jpg', './images/looseleaftea.jpg', './images/groundespresso.jpg');}, 100);
    setTimeout(stopSpin, 2000);
  };

  $('button').click(function() {
    startSpin();
  });
});







