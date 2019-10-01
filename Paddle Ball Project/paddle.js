class Paddle {

constructor(x,y,w,h){
  this.loc = createVector(x,y);
  this.vel = createVector(w,h);
  this.acc = createVector(0.2);
  this.w= 10;
  this.h= 10;
}

run(){
  this.checkEdges();
  this.update();
  this.render();
}
checkEdges(){


}

update(){

  this.vel.add(this.acc)
  this.loc.add(this.vel)
  this.acc.limit(0.5);




    var mouseLoc = createVector(mouseX, mouseY);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, 1.2);

}
    render(){
      fill(255,255,255);
      rect(this.loc.x * 10, this.loc.y, this.w* 10, this.h);

    }
    }
