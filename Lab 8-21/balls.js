class Ball {
  constructor(x,y,speedX,speedY){
    this.x=x;
    this.y=y;
    this.speedX= speedX;
    this.speedY= speedY;
    this.clr= color(random(0),random(199), random(230));
  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }
  checkEdges(){
    translate(this.speedX, this.speedY);
    rotate(90);

    if (this.x < 10){
      this.speedX= -this.speedX;
    }
    if (this.x > -2){
      this.speedX= -this.speedX;
    }
    if (this.y < 0){
      this.speedY= - this.speedY;
    }
    if (this.y > height *5){
      this.speedY= -this.speedY;
    }
    if mouseClicked(){
      rotateZ(180);
    }
  }
  update(){
    this.x = this.x+ this.speedX;
    this.y= this.y+this.speedY;
  }
  render(){
    fill(this.clr);
    ellipse(random(width), random(height), this.x, this.y);
  }
}
