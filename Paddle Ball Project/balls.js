class Ball {
  constructor(x,y,speedX,speedY, paddle){
    this.loc= createVector(x,y);
    this.vel= createVector(speedX, speedY);
    this.acc= createVector(0, -10);
    this.clr= color(random(0),random(199), random(230));
    this.paddle = paddle;
  }

  run(){
      this.checkEdges();
      this.isColliding();
    this.update();
    this.render();
  }

  checkEdges(){
    //translate(this.speedX, this.speedY);
    //rotate(90);

    if (this.loc.x < 0){
      this.vel.x= -this.vel.x;
    }
    if (this.loc.x > width){
      this.vel.x= -this.vel.x;
    }
    if (this.loc.y < 0){
      this.vel.y= - this.vel.y;
    }
    if (this.loc.y > height ){
      this.vel.y= -this.vel.y;
    }
    //if mouseClicked(){
      //rotateZ(180);
    }

    update(){
    this.loc.add(this.vel)
    this.vel.limit(2)

    }

    render(){
      stroke(random(200), random(0), random(255));
      //background(0);
      // fill(this.clr)
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, 20,20);
  }

  isColliding() {

      if (this.loc.x > this.paddle.loc.x &&
          //this.loc.x < paddle.loc.x + w &&
          this.loc.x < this.paddle.loc.x + this.paddle.w &&
          this.loc.y > this.paddle.loc.y &&
          //this.loc.y < paddle.loc.y + h){
          this.loc.y < this.paddle.loc.y + this.paddle.h) {
          this.vel.y = -this.vel.y;
      }
  }
}
//end of class
