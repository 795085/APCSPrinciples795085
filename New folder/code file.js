function nestedLoopTester(){
    var sum = 0;
    for( var i =0; i < 3; i++){
for( var j = 0; j <= i; j++){
   			sum = sum + i + j;
      	}
     }
    console.log(sum);
}
nestedLoopTester();
