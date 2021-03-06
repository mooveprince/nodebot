var five = require ('johnny-five');
var board = new five.Board();

board.on('ready', function () {
    
    var ledPins = [2, 3, 4, 5];
    var leds = new five.Leds(ledPins);
    
  function oneByOne() {
    var delay = 1;
    board.counter = 0;
    for (var i = 0; i < leds.length; i++) {
      console.log ("Now Processing..." + i);

      board.wait(delay,function(){
        console.log ("Inside Delay 1");  
        console.log(this.counter + " on")
        leds[this.counter].on();
      })
      board.wait(delay + 200,function(){
          console.log ("Inside Delay 2");  
        console.log(this.counter + " off")
        leds[this.counter].off();
        this.counter = (this.counter + 1) % leds.length;
      })
      delay += 500;
    }
  }
    
    oneByOne ();
    board.loop(2000, oneByOne);
    
});
