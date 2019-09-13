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

    if (this.x < 3){
      this.speedX= -this.speedX;
    }
    if (this.x > -2){
      this.speedX= -this.speedX;
    }
    if (this.y < 0){
      this.speedY= - this.speedY;
    }
    if (this.y > -1){
      this.speedY= -this.speedY;
    }
    // if mouseClicked(){
    //   rotateZ(180);
    // } else{
    //   rotateY(230);
    // }
  }
  update(){
    this.x = this.x+ this.speedX;
    this.y= this.y+this.speedY;
    this.speedX = this.y/5;



  }
  render(){
    fill(this.clr);
    ellipse(random(width), random(height), 30, 30);
  }
}
class Triangle {
  constructor(x,y,speedX,speedY){
    this.x=x;
    this.y=y;
    this.speedX= speedX;
    this.speedY= speedY;
    this.clr= color(random(255),random(45), random(10));
  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }
  checkEdges(){

    if (this.x < 0){
      this.speedX= -this.speedX;
    }
    if (this.x > width){
      this.speedX= -this.speedX;
    }
    if (this.y < 0){
      this.speedY= - this.speedY;
    }
    if (this.y > height){
      this.speedY= -this.speedY;
    }
    // if mouseClicked(){
    //   rotateZ(180);
    // } else{
    //   rotateY(230);
    // }
  }
  update(){
    this.x = this.x+ this.speedX;
    this.y= this.y+this.speedY;
}

  render(){
    fill(this.clr);
    triangle(random(width), random(height), 30, 30, 45, 45);
  }
}
