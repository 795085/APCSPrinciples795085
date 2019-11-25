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

//detects collision in the food code
  update(){


  }

  render(){
    //food is filled
    fill(200,2,220);
    rect(this.loc.x * this.w , this.loc.y * this.w, this.w, this.w);
  }
}
