class snake{
constructor(x,y,w,h,clr,head,body){
  this.loc = createVector(x,y);
  this.vel = createVector(w,h);
  this.w= 50;
  this.h= 50;
  this.body= [];
}
run(){
  this.update();
  this.render();
}

//updating
update(){
  this.loc.add(this.vel);
  this.vel.limit(10);

}

//renders shapes
render(){
  this.clr = random(132, 189, 245);
  head.loc = (width *w);
}

  
}
