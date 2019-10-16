var arr = [];
var n = 0;
function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  bubbleSort();

}
//swap code



function bubbleSort(){
  for(i = 0; i < n-1; i++){
    for(j = 0; j < n-1-i;j++){
      if(arr[j+1] < arr[j]){
        swap(arr[j] , arr[j+1]);
        // var temp = arr[j];
        // arr[j]= arr[j+1];
        // arr[j+1] = temp;
      }
    }
  }

}

function swap(i,j){
  var temp = arr[i];
  arr[i]= arr[j];
  arr[j]= temp;
}
