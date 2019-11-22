class Snake{
constructor(x,y,w){
//creates the vector for the head
  this.head = createVector(x,y);
  this.vel = createVector(0,0);
  //segments are defined as an array, many of them can be present in the game
  this.segments = [];
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
this.vel.limit(0);

//algorithm helping the segments to appear when touching food
for(var i = this.segments.length-1;i>=0;i--){
  if(i===0){
    this.segments[i].x = this.head.x;
    this.segments[i].y = this.head.y;
  }else{
    this.segments[i].x = this.segments[i-1].x;
    this.segments[i].y = this.segments[i-1].y; }
}
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
}


grow(){
  this.segments.push(createVector(0,0));
}




//renders shapes
render(){
  fill(this.clr);
  rect(this.head.x , this.head.y, this.w, this.w);
  //console.log("-->"  +this.head.x * this.w);
  //loop adding segment
  for(var i=0; i<this.segments.length;i++){
    rect(this.segments[i].x, this.segments[i].y, this.w, this.w);
  }
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
            return true;
            //if true the collision will push or make a new segment
            this.segments.push(rect());
          }
        else{
            return false;
        }
    }

tangled(){

  }
}
