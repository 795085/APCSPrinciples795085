class Button{
  constructor(x,y, w, h, str,clr){
    this.loc = createVector(x,y);
    this.w = w;
    this.h = h;
    this.msg = str;
    this.clr = clr;

  }


  run(){
    this.render();
  }





  render(){

    fill(134, 0, 210);
    rect(this.loc.x, this.loc.y, this.w, this.h);

    //easy
    textSize(24);
    textAlign('CENTER');
    fill(0);
    text(this.msg, this.loc.x, this.loc.y);



  }

}
//  +++++++++++++++++++++++++++++++++++  end of Button
