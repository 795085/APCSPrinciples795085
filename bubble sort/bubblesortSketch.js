var arr = [10,5,7,4,3,2];
var i,j,n;

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
  for( i = arr.length-1; i < 0; i--){
    for(j = 0; j < i;j++){
      if(arr[j+1] < arr[j]){
        swap(arr[j] , arr[j+1]);
        // var temp = arr[j];
        // arr[j]= arr[j+1];
        // arr[j+1] = temp;
        console.log(arr[i]);
        console.log(arr[j]);
      }
    }
  }
}

function swap([arr],i,j){
  var temp = arr[i];
  arr[i]= arr[j];
  arr[j]= temp;
}
