var five = require ('johnny-five');
var board = new five.Board ();

board.on('ready', function () {
    
    var myMotor = new five.Motor(9);

    myMotor.start();    
    
    myMotor.on("start", function( err, timestamp ) {
        console.log( "started", timestamp );

        // stop after 2 seconds
        board.wait(2000, function() {
        myMotor.stop();
        });
    });
  
  
});