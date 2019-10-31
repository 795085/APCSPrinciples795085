var arr = [34, 67, 10000, 23, 45, 67000,12,3, 50, 6];
var i,j,n,temp;

function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

  insertionSort();
}

function insertionSort(){
  n=1;
  for(i=1;i < arr.length; i++){
    for(j = i; j > 0; j--){
      if(arr[j]> arr[j-1]){
        temp= arr[j];
        arr[j-1] = arr[j];
        arr[j-1] = temp;
      }
    }
  }
  console.log(arr);
}
