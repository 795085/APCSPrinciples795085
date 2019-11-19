

class Snake{
constructor(x,y,w,h,clr,head,body){
  this.head = createVector(x,y);
  this.vel = createVector(0,0);
  this.w= 50;
  this.h= 50;
  this.body = [];
}
run(){
  this.setDir();
  this.update();
  this.render();
  this.tangled();
}

setDir(x,y){
  this.xdir = x;
  this.ydir = y;
}

//updating
update(){


  this.head.add(this.vel);

  var x= this.head.x;
  var y= this.head.y;
  if(x > 0 && x< width && y > 0&& y< height){
  this.head.add(this.vel);
}

this.body[0].x += this.xdir;
this.body[0].y += this.ydir;

}

//renders shapes
render(){
  this.clr = random(132, 189, 245);
  rect(this.head.x * this.w, this.head.y * this.h, this.w, this.h);
}

tangled(){


   for(var i = 0; i < body.length; i++){
     var segment = this.body[i];
     rect(this.loc.x * this.w, this.loc.y * this.h, this.w, this.h);

}


}
}
