var rows, cols;

class Food{
  constructor(x,y,w){
    this.loc = createVector(x,y);
    this.w = w;

  }


  run(){
    this.update();
    this.render();
  }

  update(){
    if(snake.head.x === this.loc.x && snake.head.y === this.loc.y){
      console.log("collsion detected");
      this.loc.x = Math.floor(random(0, 29))*this.w;
      this.loc.y = Math.floor(random(0, 29))*this.w;
    }

  }

  render(){
    //food is filled
    fill(200,2,220);
    rect(this.loc.x*this.w , this.loc.y*this.w , this.w, this.w);
  }
}
