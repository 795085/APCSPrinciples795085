class Ball {
  constructor(x,y,speedX,speedY){
    this.loc= createVector(x,y);
    this.vel= createVector(speedX, speedY);
    this.acc= createVector(0, -5);
    this.clr= color(random(0),random(199), random(230));
  }
  run(){
    this.checkEdges();
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
  }
  render(){
    stroke(random(200), random(0), random(255));
    background(0);
    fill(this.clr);
    ellipse( this.loc.x, this.loc.y, 20, 20);

  }
}

class Triangle {
  constructor(x,y,speedX,speedY){
    this.loc= createVector(x,y);
    this.vel= createVector(speedX, speedY);
    this.acc= createVector(0, -4);
    this.clr= color(random(255),random(0), random(150));
  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }
  checkEdges(){

    if (this.loc.x < 0){
      this.loc.x= -this.loc.x;
    }
    if (this.vel.x > width){
      this.vel.x= -this.vel.x;
    }
    if (this.loc.y < 0){
      this.loc.y= - this.loc.y;
    }
    if (this.vel.y > height){
      this.vel.y= -this.vel.y;
    }
    // if mouseClicked(){
    //   rotateZ(180);
    // } else{
    //   rotateY(230);
    // }
  }
  update(){
    this.loc.sub(this.vel)
}

  render(){
    noStroke();
    fill(this.clr);
    triangle(random(width), random(height), 130, 20, 130, 90);
  }
}
