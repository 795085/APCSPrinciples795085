//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins

var ball;
var paddle;


function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  //x= 50;
  //y= 60;
  loadObjects();


}



//  The draw function is called @ 30 fps
function draw() {
  background(0);
  //x= x +xSpeed;
//y= y+ ySpeed;
  runObjects();
  //runmainBall();
}

function loadObjects(n){

  ball= new Ball(width/10, height/10, random(-2,2), random(-2,2), -2);
  paddle = new Paddle (width/3, height/13, random(-2,2), random(-2,2),0.1);
  }

function runObjects(){
  ball.run();
  paddle.run();
  }
