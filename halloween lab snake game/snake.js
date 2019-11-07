

class Snake{
constructor(x,y,w,h,clr,head,body){
  this.body = [];
  this.head = createVector(x,y);
  this.vel = createVector(0,0);
  this.w= 50;
  this.h= 50;
}
run(){

  this.checkEdges();
  this.update();
  this.render();
  this.tangled();
}

//checks the edges of snake so it wont go off screen
checkEdges(){
  if(keyCode === UP_ARROW){
    this.vel.x = 0;
    this.vel.y = w;
  } else if(keyCode === DOWN_ARROW){
    this.vel.x = 0;
    this.vel.y = h;
  }else if(keyCode === LEFT_ARROW){
    this.vel.x = w;
    this.vel.y = 0;
  }else if(keyCode === RIGHT_ARROW){
    this.vel.x = h;
    this.vel.y = 0;
  }
}


//updating
update(){
  this.body[0].x = this.head.x;
  this.body[0].y = this.head.y;

  this.head.add(this.vel);


  this.body[0].x += this.xdir;
  this.body[0].y += this.ydir;

}




//renders shapes
render(){
  this.clr = random(132, 189, 245);
  rect(this.head.x * this.w, this.head.y * this.h, this.w, this.h);

  //loop adding segment
  for(var i = 0; i<this.body.length;i++){
    rect(this.body[i].x, this.body[i].y, this.w, this.h);
  }

}

tangled(){


  // for(var i = 0; i < body.length; i++){
  //   var segment = this.body[i];
  //   rect(this.loc.x * this.w, this.loc.y * this.h, this.w, this.h);
  //
}


}
