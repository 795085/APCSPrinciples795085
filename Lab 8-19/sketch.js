//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins

var x, y;
var xSpeed, ySpeed;

function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  x= 50;
  y= 60
}



//  The draw function is called @ 30 fps
function draw() {
  x= x +xSpeed;
  y= y+ ySpeed

fill(250,250,250);
ellipse(x, y, x+40, y+30);
}
