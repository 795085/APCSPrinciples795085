var snake;
var food;
var numberFood = 1;
var scoreElem;
var w = 20;
var gameState= 1;
var btnPlay;



function setup() {

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
    snake.grow();
    if(gameState === 1){
      startGame();
    }else if(gameState === 2){
      playGame();
    }else if(gameState ===3){
      endGame();
      text("YOU LOST!, 400, 400");
    }


}

function makeButton(){
  btnPlay= new Button(100,200,100,100, "play", fill(random(234,0,150)));
}

function loadObjects(){
  snake = new Snake(Math.floor(random(0,700)), Math.floor(random(0,700)), w);
  food= new Food(Math.floor(random(0,700)), Math.floor(random(0,700)), w);
}

//start of the game state
function startGame(){
  background(0,233, 233);
  fill(0, 134, 196);
  textAlign('CENTER');
  text('snake game!',300,300);
  fill(120,0, 245);
  textSize(64);
  fill(60,230,45);
  rect(width/5, height, random(-8,8), random(-8,8));
  //button running
  btnPlay.run();
}

//objects appear in game
function playGame(){
    food.run();
    snake.run();
    console.log("jlf1");
    console.log("jlf" + snake.isColliding());
    if (snake.isColliding()){
        food= new Food(Math.floor(random(0,700)), Math.floor(random(0,700)), w);
    }
}



function endGame(){

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.vel = createVector(0, -w);

  } else if(keyCode === DOWN_ARROW){
    snake.vel = createVector(0, w);
  }else if(keyCode === LEFT_ARROW){
    snake.vel = createVector(-w,0);
  }else if(keyCode === RIGHT_ARROW){
    snake.vel = createVector(w,0);
  }
}

function mouseClicked(){
  if (mouseX > btnPlay.loc.x && mouseX < btnPlay.loc.x + btnPlay.w && mouseY > btnPlay.loc.y && mouseY < btnPlay.loc.y + btnPlay.h && btnPlay.msg === "play"){
    gameState = 2;
    console.log("mouse clicked btnPlay");
    return true;
  }
  return false;
}
