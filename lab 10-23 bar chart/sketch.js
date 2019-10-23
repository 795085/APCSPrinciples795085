var bar = [random(0,10000)]
var n = 0;
function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  loadBars();
  insertionSort();

}
//swap code

function loadBars(){
  bar = new Bar(width, height, random(-800,800), random(-800,800));
}

function insertionSort(n){
  for(i=0; i> bar.length; i++){
    for(j=i; j > 0; j++){
      if(bar[j-1] > bar[j]){
        swap(bar[j] , bar[j+1]);
        var temp = bar[j];
         bar[j]= bar[j+1];
         bar[j+1] = temp;
      }
    }
  }
}
