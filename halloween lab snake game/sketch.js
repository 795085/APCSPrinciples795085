var snake;
var food;
let scoreElem;



function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  //score of game
scoreElem = createDiv('Score = 0');
scoreElem.position(20, 20);
scoreElem.id = 'score';
scoreElem.style('color', 'white');

  //x= 50;
  //y= 60;
  loadSnake();
  loadFood();
  keyPressed();
}



//  The draw function is called @ 30 fps
//the changing of screens depending on state
var gameState= 1
function draw() {
  if(gameState === 1){
    startGame();
}else if(gameState === 2){
  playGame();
}else if(gameState ===3){
  endGame();
}
  background(0);



  //x= x +xSpeed;
//y= y+ ySpeed;
snake.run();
food.run();

}  //runmainBall();

function loadObjects(n){


  snake = new Snake(width, height, random(-20,20), random(-20,20),1);
  food= new Food(width/10, height/10, random(-2,2), random(-2,2));
}



function runObjects(){

}

function keyPressed(){
  if (keyCode=== UP_ARROW){
    snake.dir(0,-1);
  }else if(keyCode === DOWN_ARROW){
    snake.dir(0,1);
  }else if(keyCode === RIGHT_ARROW){
    snake.dir(1,0);
  }else if(keyCode === LEFT_ARROW){
    snake.dir(-1,0);
  }



}
function startGame(){
  fill(0, 134, 196);
  text('snake game!',25,25);
  fill(120,0, 245);
  textSize(24);
  fill(60,230,45);
  rect(width/5, height, random(-8,8), random(-8,8));

}

function endGame(){

}
