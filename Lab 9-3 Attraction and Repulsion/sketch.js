//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x, y;
var xSpeed, ySpeed;
var balls= []
var mainBall;


function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  //x= 50;
  //y= 60;
  loadBalls(45);


}



//  The draw function is called @ 30 fps
function draw() {
  background(0);
  //x= x +xSpeed;
//y= y+ ySpeed;
  runBalls();
  //runmainBall();
}

function loadBalls(n){
  mainBall = new Ball(width/3, height/3, random(-2,2), random(-2,2), -1);
  console.log(mainBall);
  for(var i = 0; i < n; i++){
    balls[i]= new Ball(random(width), random(height),random(-8,8),random(-8,8), i);
  }
}
function runBalls(){
  mainBall.run();
  for(var i = 0; i< balls.length; i++){
    balls[i].run();
  }
}
