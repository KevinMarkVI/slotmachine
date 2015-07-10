$(function(){

  var changeImage = function() {
    console.log("CALLED");
    var img1 = "./images/teapot.jpg";
    var img2 = "./images/coffeemaker.jpg";
    var img3 = "./images/espressomachine.jpg";
    var current = $('#slot1').attr('src');

    if (current === img1) {
      console.log('1');
      $('#slot1').attr('src', img2);
    } 
    if (current === img2) {
      console.log('2');
      $('#slot1').attr('src', img3);
    } 
    if (current === img3) {
      console.log('3');
      $('#slot1').attr('src', img1);
    }
  };
  setInterval(changeImage, 100);
});




