var five = require ('johnny-five');
var board = new five.Board ();

board.on ('ready', function () {
    
    var thermometer = new five.Thermometer ('A1');
    
    thermometer.on ('change', function () {
        console.log (this.C + '^C');
    });
    
});
