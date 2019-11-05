

class Snake{
constructor(x,y,w,h,clr,head,body){
  this.head = createVector(x,y);
  this.vel = createVector(0,0);
  this.w= 50;
  this.h= 50;
  this.body = [];
}
run(){

  this.update();
  this.render();
  this.tangled();
}


//updating
update(){
<<<<<<< HEAD

  this.head.add(this.vel);

=======
  var x= this.loc.x;
&& x< width && y > 0&& y< height){
  this.loc.add(this.vel);
}
>>>>>>> 2ea57875d54d84603cc40663d6f9a67f31a345b1

}

//renders shapes
render(){
  this.clr = random(132, 189, 245);
  rect(this.loc.x * this.w, this.loc.y * this.h, this.w, this.h);
}

tangled(){

<<<<<<< HEAD
  // for(var i = 0; i < body.length; i++){
  //   var segment = this.body[i];
  //   rect(this.loc.x * this.w, this.loc.y * this.h, this.w, this.h);
  // }
=======
>>>>>>> 2ea57875d54d84603cc40663d6f9a67f31a345b1
}


}
