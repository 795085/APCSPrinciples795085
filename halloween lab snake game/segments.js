class Segment{
  constructor(x,y,w){
    this.loc= createVector(snake.head.x,snake.head.y);
    this.vel = createVector(0,0);
    this.w = w;
    this.clr = color(12,189,12);
  }

run(){
  this.update();
  this.render();
  this.tangled();
}

//segment update
update(){
  this.loc.add(this.vel);
  this.vel.limit(2);
}

//segment renders after collided
render(){
  for(var i = snake.head.x; i > 0; i++){
    if(snake.isColliding()){
      rect(snake.head.x + this.i, snake.head.y + this.i, this.w);
    }
  }
}
}
