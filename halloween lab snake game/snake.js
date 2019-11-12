

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
    this.vel.y = this.w;
  } else if(keyCode === DOWN_ARROW){
    this.vel.x = 0;
    this.vel.y = this.h;
  }else if(keyCode === LEFT_ARROW){
    this.vel.x = this.w;
    this.vel.y = 0;
  }else if(keyCode === RIGHT_ARROW){
    this.vel.x = this.h;
    this.vel.y = 0;
  }
}


//updating
update(){
//defines the x and y values and helps move body
for(var i = this.body.length-1;i>=0;i--){
  if(i===0){
    this.body[0].x = this.head.x;
    this.body[0].y = this.head.y;
  }else{
    this.body[i].x = this.body[i-1].x;
    this.body[i].y = this.body[i-1].y;
  }
}
  this.head.add(this.vel);

for(var i= this.body.length-1; i>=0;i--){
  if(i===0){
    this.body[0].x += this.vel.x;
    this.body[0].y += this.vel.y;
  }else{
      this.body[i].x +=this.body[i-1].x;
      this.body[i].y += this.body[i-1].y;
    }
  }
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
