class Paddle {

constructor(x,y,w,h){
  this.loc = createVector(x,y);
<<<<<<< HEAD
=======
//  this.vel = createVector(w,h);
//  this.acc = createVector(0.2);
>>>>>>> origin/john
  this.w= 100;
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

<<<<<<< HEAD
=======
//this.vel.add(this.acc)
this.loc.add(this.vel)
//this.acc.limit(0.5);
>>>>>>> origin/john




    var mouseLoc = createVector(mouseX, mouseY);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, 1.2);

}
    render(){
      fill(255,255,255);
<<<<<<< HEAD
      rect(this.loc.x , this.loc.y, this.w, this.h);
=======
//        rect(this.loc.x * 10, this.loc.y, this.w* 10, this.h);
        rect(this.loc.x, this.loc.y, this.w, this.h);
>>>>>>> origin/john

    }
    }
