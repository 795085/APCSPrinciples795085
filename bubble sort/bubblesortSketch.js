<<<<<<< HEAD
var arr = [1,4,6,10,5,3];
var i,j,n,temp;
=======
var arr = [10,5,7,4,3,2, 17, -5, 67, 1, 4];
//var i,j,n,temp;
>>>>>>> a1ef06d5226b331806777f4a1755fdb572f2314b

function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  bubbleSort();
}
//swap code



function bubbleSort(){
 n = 1;
  for(var i = arr.length-1; i > 0; i--){
    for( var j = 0; j < i; j++){
      if(arr[j+1] < arr[j]){
          temp = arr[j];
         arr[j]= arr[j+1];
         arr[j+1] = temp;
      console.log(arr);
      }
    }
  }
}
