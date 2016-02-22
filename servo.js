var five = require ('johnny-five');
var board = new five.Board ();

board.on('ready', function () {
    
    var servo = new five.Servo (9);
    
    servo.to (180, 6000);   //Take 5 sec to move to 180`
    
    /*servo.sweep(); */
   
    
    board.wait ('6050', function () {
        servo.stop();
        //servo.center();
    }); 
    
});