var five = require ('johnny-five');
var board = new five.Board();

board.on('ready', function () {
    
    var lcd = new five.LCD ({pins: [12, 11, 5, 4, 3, 2], rows:2, cols: 16}); 

    lcd.cursor(0, 0).print ("NodeBot is Cool");
    lcd.cursor(1,0).print ("Awesome Too");
    
});