var rows, cols;

class Food{
  constructor(x,y,w,h,clr){
  this.loc = createVector(x,y);
  this.w = 30;
  this.h = 30
  }


run(){
  this.update();
  this.render();
}

update(){

}

render(){
fill(100,2,230);
rect(this.loc.x * this.w, this.loc.y * this.h, this.w, this.h)
}
}
