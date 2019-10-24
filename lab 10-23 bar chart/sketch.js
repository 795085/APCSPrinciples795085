var bar = []
var n, barWidth;
function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

barWidth = 20;
n = width/ barWidth;
  loadBars(n);
  drawBars();

  runBars();
  insertionSort();


}
function drawBars(){
  background(5, 5, 5);
  frameRate(1);
  runBars();
}
//swap code
//vector located here
function loadBars(n){
for(var i = 0;  i < n; i++){
  var barHeight = Math.floor(random(height));
  var loc = createVector(i* barWidth, barHeight);
  bar[i]= new Bar( loc , height - barHeight);
  }
}

//run bars
function runBars(){
  for(var i = 0; i < bar.length;i++){
    bar[i].render();
  }
}

//sorting algorithm
function insertionSort(n){
  for(i=0; i> bar.length; i++){
    for(j=i; j < 0; j--){
      if(bar[j-1] > bar[j]){
        var temp = bar[j];
         bar[j-1]= bar[j];
         bar[j-1] = temp;
      }
    }
  }
}
