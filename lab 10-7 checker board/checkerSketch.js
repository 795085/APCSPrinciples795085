var squares = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  //score of game

loadSquares(64);
this.loc = createVector(x,y);
//loop iteration
}
 function loadSquares(){
    squares [i] = new Squares(this.x.loc, this.y.loc, this.width, this.height);

   for (var i = 0; i< squares.length; i++){
     for(var j = 0; i < squares.length;i++){
       if (j % 2 === 0){
       if (i % 2 === 0){
         fill(157, 0, 210);
       }else{
         fill(0,124, 234);
       }
     }else{
       if(i % 2 === 0){
         fill(0,124,234);
       }
       else{
         fill(157, 0,210);
       }
     }
  }
}
  console.log(i)
}
//  The draw function is called @ 30 fps
//the changing of screens depending on state
//creating buttons
