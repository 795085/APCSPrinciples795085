//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var b1,b2,b3;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  b1= new Ball(random(width),random(height),random(-4,4),random(-4,4));
  b2= new Ball(random(width),random(height),random(-4,4),random(-4,4));
  b3= new Ball(random(width),random(height),random(-4,4),random(-4,4));
}

//  The draw function is called @ 30 fps
function draw() {
b1.run();
b2.run();
b3.run();
}
