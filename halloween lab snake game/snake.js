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
}


//checks the edges of snake so it wont go off screen
checkEdges(){

}


//updating
update(){
//defines the x and y values and helps move body

//algorithm helping the segments to appear when touching food
for(var i = this.segments.length-1;i>=0;i--){
  if(i===0){
    this.segments[i].x = this.head.x;
    this.segments[i].y = this.head.y;
  }else{
    this.segments[i].x = this.segments[i-1].x;
    this.segments[i].y = this.segments[i-1].y; }
}

this.head.add(this.vel);
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
  rect(this.head.x * this.w , this.head.y * this.w, this.w, this.w);
  //console.log("-->"  +this.head.x * this.w);
  //loop adding segment
  for(var i=0; i<this.segments.length;i++){
    rect(this.segments[i].x * this.w, this.segments[i].y * this.w, this.w, this.w);
  }
  // }

}

//collides with food
    isColliding(){
        if (this.head.x === food.loc.x &&
            this.head.y === food.loc.y){

            //if true the collision will push or make a new segment

            return true;
          }
        else{
            return false;
        }
    }
}
