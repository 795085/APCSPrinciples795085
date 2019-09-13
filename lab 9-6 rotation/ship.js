class Ship {

constructor(x,y,speedX,speedY,angle){
  this.loc= createVector(x,y);
  this.vel= createVector(speedX, speedY);
  this.acc= createVector(0, -10);
  this.clr= color(random(0),random(199), random(230));
  this.angle = 90
}


  checkEdges(){
    if (this.loc.x < 0){
      this.loc.x= width;
    }
    if (this.loc.x > width){
      this.loc.x= 0;
    }
    if (this.loc.y < 0){
      this.loc.y= height;
    }
    if (this.loc.y > height){
      this.loc.y= 0;
    }//translate(this.speedX, this.speedY);
    //rotate(90);//translate(this.speedX, this.speedY);
    //rotate(90);


    //if mouseClicked(){
      //rotateZ(180);
    }

  update(){

    var distToattr;

    //if (this.id >= 0){
      distToattr = this.loc.dist(attr.loc);
//}
      if (distToattr< 250){
        this.acc= p5.Vector.sub (attr.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      if (distToattr > 150){
        this.acc= p5.Vector.sub (this.loc, attr.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      var distToreplr;

      //if (this.id >= 0){
        distToreplr= this.loc.dist(attr.loc);
  //}
        if (distToreplr> 250){
          this.acc= p5.Vector.sub (replr.loc, this.loc);
          this.acc.normalize();
          this.acc.div(0.1);
        }
        if (distToattr < 150){
          this.acc= p5.Vector.sub (this.loc, replr.loc);
          this.acc.normalize();
          this.acc.div(0.1);
        }

this.vel.add(this.acc)
  this.loc.add(this.vel)
}







  render(){
    fill(this.clr);
    this.angle = this.angle + .1;
    push();
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    triangle(-5, 0, 5, 0, 0, -8);
    pop();

  }
}
