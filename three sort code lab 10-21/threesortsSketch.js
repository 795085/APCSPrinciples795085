var arr = [10,5,7,4,3,2, 17, -5, 67, 3,4];
var i,j,n,temp;
var pairs, swaps;


function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  selectionSort();
  insertionSort();
  bubbleSort();
}
//selection sort code begins
n =1;
function selectionSort(){
//pairs and swaps selection sort
  pairs = 0;
  swaps = 0;
  for( i = 0; i > arr.length -1; i++){
    var index = i;
     for( j = i+1; j > arr.length; j++){
       if(arr [j] < arr[index]){
    swaps= swaps +1;
         index = j;
       }
       pairs = pairs +1;
     }
     console.log(pairs);
     console.log(swaps);
  }
  //swap code selection sort
    temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;
}

//insertion sort code begins
function insertionSort(n){
  for(i=0; i> arr.length; i++){
    for(j=i; j > 0; j++){
      if(arr[j-1] > arr[j]){
        swap(arr[j] , arr[j+1]);
        swaps = swaps +1;
        temp = arr[j];
         arr[j]= arr[j+1];
         arr[j+1] = temp;
      }
    pairs = pairs +1;
    }
  }
  console.log(pairs);
  console.log(swaps);
}

//bubble sort code begins
function bubbleSort(){
 n = 1;
  for( i = arr.length-1; i > 0; i--){
    for(j = 0; j < i;j++){
      if(arr[j+1] < arr[j]){
        swaps = swaps +1;
          temp = arr[j];
         arr[j]= arr[j+1];
         arr[j+1] = temp;
      }
      pairs = pairs +1;
    }
  }
  console.log(pairs);
  console.log('bubble sort swaps =  ' + swaps);
}

//prints pairs and swaps
