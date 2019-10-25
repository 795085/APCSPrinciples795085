var bar = [0,2,5,1];
var n = 0;
var x, y;
var i, j;
function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);


  insertionSort();

}
//swap code



function insertionSort(){
  for(i=0; i < bar.length; i++){
    for(j=i; j > 0; j--){
      if(bar[j-1] < bar[j]){
        var temp = bar[j];
         bar[j-1]= bar[j];
         bar[j-1] = temp;
         drawBars();
      }
    }
  }
}

function drawBars(){
  for(i = 0; i< bar.length; i++){
    var w=3;
    var bar = new Bar(i*3, 0,w,bar[i]);
    bar.render;
  }
}
