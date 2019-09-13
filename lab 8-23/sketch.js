//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins

var x, y;
var xSpeed, ySpeed;
var balls= []
var triangles=[]

function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  //x= 50;
  //y= 60;
  loadBalls(50);
  loadTriangles(2)
}



//  The draw function is called @ 30 fps
function draw() {
  x= x +xSpeed;
  y= y+ ySpeed;
  runBalls();
  runTriangles();
}

function loadBalls(n){
  //console.log("loadBalls");
  for(var i = 0; i < 50; i++){
    balls[i]= new Ball(random(width), random(height),random(-8,8),random(-8,8));
  }
}


function runBalls(){
    for(var i = 0; i < 50; i++){
      balls[i].run();
}
  }

function loadTriangles(){
  for(var i = 0; i < 2; i++){
    triangles[i]= new Triangle(random(width), random(height), random(-20, 20), random(-20,20),random(-25, 25), random(-25,25));
  }
}

function runTriangles(){
  for (var i = 0; i < 2; i++){
    triangles[i].run();
  }
}
