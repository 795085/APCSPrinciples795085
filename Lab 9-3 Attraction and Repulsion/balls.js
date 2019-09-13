class Ball {
  constructor(x,y,speedX,speedY,id){
    this.loc= createVector(x,y);
    this.vel= createVector(speedX, speedY);
    this.acc= createVector(0, -10);
    this.clr= color(random(0),random(199), random(230));
    this.id = id;
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
    var distToMainBall;

    //if (this.id >= 0){
      distToMainBall = this.loc.dist(mainBall.loc);
      console.log(distToMainBall);
//}
      if (distToMainBall< 250){
        this.acc= p5.Vector.sub (mainBall.loc, this.loc);
        this.acc.normalize();
        this.acc.mult();
      }
      if (distToMainBall > 150){
        this.acc= p5.Vector.sub (this.loc, mainBall.loc);
        this.acc.normalize();
        this.acc.mult();
      }




  this.loc.add(this.vel)

  }
  render(){
    stroke(random(200), random(0), random(255));
    //background(0);
    // fill(this.clr);
    if(this.id === -1){
      fill(255,255,255);
      ellipse( this.loc.x, this.loc.y, 50, 50);
    }else{
      fill(this.clr);
      ellipse( this.loc.x, this.loc.y, 10, 10);
    }


  }
}
