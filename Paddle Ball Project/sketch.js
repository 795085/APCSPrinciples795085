var ball = [];
var paddle;
var scoreElem;
var health;
var gameMode;
var gameState = 1;
var btnEasy, btnMed, btnHard;
var difficulty;


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  //score of game
  scoreElem = createDiv('Score = 0');
  scoreElem.position(150, 80);
  scoreElem.id = 'score';
  scoreElem.style('color', 'white');

  //health
  health = createDiv('Health = 50');
  health.position(230, 80);
  health.id = 'health';
  health.style('color', 'white');
//create buttons
makeButtons();
loadObjects();
}


//  The draw function is called @ 30 fps
//the changing of screens depending on state
//creating buttons
function makeButtons(){
  btnEasy = new Button(100, 200, 50, 50, "easy", fill(random(0,123,210)));
  btnMed = new Button(100, 300, 50, 50, "medium", fill(random(0, 136, 213)));
  btnHard= new Button(100, 400, 50, 50, "hard", fill(random(50, 0, 210)));
}

//draw function
function draw() {
  if(gameState === 1){
    startGame();
  }else if(gameState === 2){
    playGame();
  }else if(gameState ===3){
    endGame();
  }

}  //  end of draw;

function loadObjects(n){
  //creates new objects
  paddle = new Paddle (width, height, random(-20,20), random(-20,20),1);
//for loop loading balls
  for(var i = 0; i < n; i++){
    ball [i]= new Ball(width/10, height/10, random(-2,2), random(-2,2));
  }
}



function runObjects(){
  for (var i = 0; i< ball.length; i++){
    ball[i].run();
  }
  paddle.run();
}


function startGame(){

  background (0, 134, 196);
  textSize(52);
  textAlign('CENTER');
  text('Paddle Game',120,120);
  fill(120,0, 245);

  //instructions
  textSize(24);
  textAlign('CENTER');
  text('Try to catch the ball with the paddle without losing health!');
  fill(120, 0 , 245);
  text('If you earn more than 20 points and stay alive, you win!');
  fill(120, 0 , 245);
  //run buttons
  btnEasy.run();
  btnMed.run();
  btnHard.run();
  //load objects
  if (mouseClicked()){
    if (difficulty === "easy"){
      loadObjects(1);
    }
    if (difficulty === "medium"){
      loadObjects(5);
    }
    if (difficulty === "hard"){
      loadObjects(15);
    }

  }


}



function playGame(){
  background(0);
  runObjects();
  isColliding();
}



function endGame(){
  background(10,10,230);
  text ('Play Again', 150,150);
  textSize(32);
  if(scoreElem < 20 && scoreElem >= 0 && health === 0){
    text ('You Lost',120, 120);
    fill(255,0,0);
  }else{
    text('You Won', 120,120);
    fill(0,255,0);
  }
}
  //mouseClicked function
  function mouseClicked(){
    if (mouseX > btnEasy.loc.x && mouseX < btnEasy.loc.x + btnEasy.w && mouseY > btnEasy.loc.y && mouseY < btnEasy.loc.y + btnEasy.h && btnEasy.msg === "easy"){
      gameState = 2;
      difficulty = "easy";
      console.log("mouse clicked btnEasy");
      return true;
    }
    if (mouseX > btnMed.loc.x && mouseX < btnMed.loc.x + btnMed.w && mouseY > btnMed.loc.y && mouseY < btnMed.loc.y + btnMed.h && btnMed.msg === "medium"){
      gameState =2;
      console.log("mouse clicked btnMed");
      difficulty = "medium";
      return true;
    }
    if (mouseX > btnHard.loc.x && mouseX < btnHard.loc.x + btnHard.w && mouseY > btnHard.loc.y && mouseY < btnHard.loc.y + btnHard.h && btnHard.msg === "hard"){
      gameState = 2;
      console.log("mouse clicked btnHard");
      difficulty = "hard";
      return true;
    }
    return false;
}
function isColliding(){
for(var i= ball.length-1; i >=0; i--){
  var one_ball = ball [i];
   if (one_ball.loc.x> paddle.loc.x &&
   one_ball.loc.x < paddle.loc.x +  one_ball.w &&
    one_ball.loc.y > paddle.loc.y &&
    one_ball.loc.y < paddle.loc.y +  one_ball.h){
     return true;}
     else{
       return false;
     }
     if ( one_ball.loc.x = paddle.loc.x){
        one_ball.vel.x = - one_ball.vel.x;
     }
     if( one_ball.loc.y= paddle.loc.y){
        one_ball.vel.y = - one_ball.vel.y;
     }

      // if(balls[i].isColliding()){
        // balls.splice(1,1);
       }
     }



//++++++++++++++++++++++++++end of mouseClicked
