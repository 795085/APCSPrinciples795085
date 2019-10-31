class Bar {

//vector matched from sketch
constructor(location, h){
  this.loc = location;
  this.h = h;
}

run(){
  this.render();
}

    render(){
      fill(110, 0 ,230);
      rect(this.loc.x, this.loc.y, barWidth, this.h);
  }
}
