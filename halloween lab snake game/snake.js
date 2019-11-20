class Snake{
constructor(x,y,w){

  this.head = createVector(x,y);
  this.vel = createVector(0,0);
  this.body = [];
  this.w= w;
  this.clr = color(12, 189, 12);
}
run(){

  this.checkEdges();
  this.update();
  this.render();
  this.tangled();
}


//checks the edges of snake so it wont go off screen
checkEdges(){

}


//updating
update(){
//defines the x and y values and helps move body

this.head.add(this.vel);
this.vel.limit(2);
// for(var i = this.body.length-1;i>=0;i--){
//   if(i===0){
//     this.body[i].x = this.head.x;
//     this.body[i].y = this.head.y;
//   }else{
//     this.body[i].x = this.body[i-1].x;
//     this.body[i].y = this.body[i-1].y;
//   }
// }
//   this.head.add(this.vel);
//
// for(var i= this.body.length-1; i>=0;i--){
//   if(i===0){
//     this.body[i].x += this.vel.x;
//     this.body[i].y += this.vel.y;
//   }else{
//       this.body[i].x +=this.body[i-1].x;
//       this.body[i].y += this.body[i-1].y;
//     }
//   }
}




//renders shapes
render(){
  fill(this.clr);
  rect(this.head.x , this.head.y, this.w, this.w);
  //console.log("-->"  +this.head.x * this.w);
  //loop adding segment
  // for(var i = 0; i<this.body.length;i++){
  //   rect(this.body[i].x, this.body[i].y, this.w, this.w);
  // }

}

//collides with food
    isColliding(){
        console.log("this.head.x" + this.head.x);
        console.log("this.head.y" + this.head.y);
        console.log("food.loc.x" + food.loc.x);
        console.log("food.loc.y" + food.loc.y);
        console.log("this.w" + this.w);
        if (this.head.x> food.loc.x &&
            this.head.x < food.loc.x + this.w &&
            this.head.y > food.loc.y &&
            this.head.y < food.loc.y + this.w){
            return true;}
        else{
            return false;
        }
    }

tangled(){

  }
}
