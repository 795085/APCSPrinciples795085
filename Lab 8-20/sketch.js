//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x,y;
var speedX, speedY;


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  x= random(-800,800);
  y= random(-800,800);
  }

//  The draw function is called @ 30 fps
function draw() {
fill(random(0,230,300));
 ellipse(60,60,x,y);
 ellipse(60,60,x,y);
 ellipse(60,60,x,y);

if (x === 50){
  translate(width/4, height/4);
} else{
  translate( width- random(-50,50), height-random(-100,100));
}
}
