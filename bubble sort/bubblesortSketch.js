var arr = [1,4,6,10,5,3];
var i,j,n,temp;

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
  for( i = arr.length-1; i > 0; i--){
    for(j = 0; j < i;j++){
      if(arr[j+1] < arr[j]){
          temp = arr[j];
         arr[j]= arr[j+1];
         arr[j+1] = temp;
      console.log(arr);
      }
    }
  }
}
