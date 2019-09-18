class Paddle {

constructor(x,y,w,h){
  this.loc = createVector(x,y);
  this.vel = createVector(w,h);
}

run(){
  this.checkEdges();
  this.update();
  this.render();
}
  checkEdges(){
    if (this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if (this.loc.x > w){
      this.vel.x= -this.vel.x;
    }
    if (this.loc.y <)

    }//translate(this.speedX, this.speedY);
    //rotate(90);//translate(this.speedX, this.speedY);
    //rotate(90);
    update(){


    this.loc.add(this.vel)


  this.update = function(){
    var mouseLoc = createVector(mouseX, mouseY);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .07);
  }
  }







    render(){
      fill(255,255,255);
      rect(this.loc.x, this.loc.y, this.w, this.h);

    }
}
