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
  if(snake.head.x === this.loc.x && snake.loc.y === this.head.y){
    this.loc.x = Math.floor(random(0, 29))*this.w;
    this.loc.y = Math.floor(random(0, 29))*this.h;
  }

}

render(){
//food is filled
fill(100,2,230);
rect(this.loc.x * this.w, this.loc.y * this.h, this.w, this.h);
}
}
