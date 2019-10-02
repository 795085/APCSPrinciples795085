class Paddle {

constructor(x,y,w,h){
  this.loc = createVector(x,y);
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





    var mouseLoc = createVector(mouseX, mouseY);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, 1.2);

}
    render(){
      fill(255,255,255);
      rect(this.loc.x , this.loc.y, this.w, this.h);

    }
    }
