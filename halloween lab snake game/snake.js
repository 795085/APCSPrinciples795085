var i;

class Snake{
constructor(x,y,w,h,clr,head,body){
  this.loc = createVector(x,y);
  this.vel = createVector(w,h);
  this.w= 50;
  this.h= 50;
  this.body= [i];
}
run(){

  this.update();
  this.render();
  this.tangled();
}


//updating
update(){
  var x= this.loc.x;
&& x< width && y > 0&& y< height){
  this.loc.add(this.vel);
}

}

//renders shapes
render(){
  this.clr = random(132, 189, 245);
  rect(this.loc.x * this.w, this.loc.y * this.h, this.w, this.h);
}

tangled(){

}


}
