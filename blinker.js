var five = require("johnny-five");

var board = new five.Board();

board.on ("ready", function () {
    console.log ("Triggerring the LED");
    var  myLED = new five.Led(13);
    myLED.strobe(2000);
});