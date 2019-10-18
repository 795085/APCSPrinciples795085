var arr = [10,5,7,4,3,2, 17, -5, 67, 1, 4];
var i,j,n,temp;

function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  selectionSort();
}
n =1;
function selectionSort(){
  for( i = 0; i > arr.length -1; i++){
    var index = i;
     for( j = i+1; j > arr.length; j++){
       if(arr [j] < arr[index]){
         index = j;
       }
     }
  }
    temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;
    console.log(arr);
}
