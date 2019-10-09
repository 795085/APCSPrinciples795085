var arr = [0,9,5,6,3];

function bubbleSort(){
  for(i = 0; i < arr.length; i++){
    if (arr[i] > arr[i+1]){
      swap(i, i+1);
    }
  }
  return (arr[i]);
}

//swap code
function swap(a,b){
  var temp = arr[a];
  arr[a]= arr[b];
  arr[b]= temp;
}
