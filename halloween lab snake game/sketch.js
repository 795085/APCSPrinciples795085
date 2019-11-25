var snake;
var food;
var numberFood = 1;
var scoreElem;
var w = 20;
var gameState= 1;
var button;
//above are the global variables



function setup() {

//canvas is created here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  frameRate(3);
  background(5, 5, 5);
  fill(200, 30, 150);
  //score of game
// scoreElem = createDiv('Score = 0');
// scoreElem.position(20, 20);
// scoreElem.id = 'score';
// scoreElem.style('color', 'white');

  //x= 50;
  //y= 60;
  makeButton();
  loadObjects();

}



//  The draw function is called @ 30 fps
//the changing of screens depending on state


function draw() {
    background(0);
    if(gameState === 1){
      startGame();
    }else if(gameState === 2){
      playGame();
    }else if(gameState ===3){
      endGame();
      text("YOU LOST!, 400, 400");
    }


}

//button made press play to begin
function makeButton(){
  button = new Button(100,25,100,25, "play", fill(random(234,0,150)));
}

//loads the snake in the food by making new objects
function loadObjects(){
  snake = new Snake(Math.floor(random(0,700/w)), Math.floor(random(0,700/w)), w);
  food= new Food(Math.floor(random(0,700/w)), Math.floor(random(0,700/w)), w);
}

//start of the game state
function startGame(){
  //creates my start game screen
  background(0,233, 233);
  fill(0, 134, 196);
  textAlign('CENTER');
  text('snake game!',300,300);
  fill(120,0, 245);
  textSize(400);
  fill(60,230,45);
  rect(width/5, height, random(-8,8), random(-8,8));
  //button running
  button.run();
}

//objects appear in the play game state
function playGame(){
    food.run();
    snake.run();
    console.log("jlf1");
    console.log("jlf" + snake.isColliding());
    if (snake.isColliding()){
      //grow function called
        snake.grow();
        food= new Food(Math.floor(random(0,700/w)), Math.floor(random(0,700/w)), w);
    }
}



function endGame(){

}

function keyPressed(){

//makes the arrow keys work in order to move the snake
  if(keyCode === UP_ARROW){
    snake.vel = createVector(0, -1);

  } else if(keyCode === DOWN_ARROW){
    snake.vel = createVector(0, 1);
  }else if(keyCode === LEFT_ARROW){
    snake.vel = createVector(-1,0);
  }else if(keyCode === RIGHT_ARROW){
    snake.vel = createVector(1,0);
  }
}

//when the mouse clicked the button the game starts
function mouseClicked(){
  if (mouseX > button.loc.x && mouseX < button.loc.x + button.w && mouseY > button.loc.y && mouseY < button.loc.y + button.h && button.msg === "play"){
    gameState = 2;
    console.log("mouse clicked button");
    return true;
  }
  return false;
}

//ends the game if snake hits wall
function hitsWall(){
  if(snake.head.loc.x || snake.head.loc.y === 800){
    gameState = 3;
    console.log("snake hits wall");
    return true;
  }
  return false;
}
