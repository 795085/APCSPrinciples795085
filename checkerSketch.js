//array for squares
var squares = [];

function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  //score of game

  //x= 50;
  //y= 60;
  loadSquares(64);
  //loop to render squares
  for(var i = 0; i < squares.length; i++){
    squares[i] render();
  }
}

//loading the squares
function loadSquares(){
  squares[i]= new Squares (50, 50, random(-800,800), random(-800,800));
}
