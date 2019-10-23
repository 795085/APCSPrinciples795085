class Bar {

constructor(x,y,w,h){
  this.loc = createVector(x,y);
  this.w = w;
  this.h = h;
}

run(){
  this.update();
  this.render();
}


update(){


}
    render(){
      fill(255, 0, 0)
      rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}
