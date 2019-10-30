var bar = []
var n,barWidth;
function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

barWidth = 20;
n = width/ barWidth;

//loading bars
for(var i = 0;  i < n; i++){
  var barHeight = Math.floor(random(height));
  var loc = createVector(i* barWidth, barHeight);
  bar[i]= new Bar( loc , height - barHeight);
  }
  //functions called
  drawBars();
}

//run bars

function drawBars(){
  background(5, 5, 5);
  frameRate(1);

//runs bars
  for(var i = 0; i < bar.length;i++){
    bar[i].render();
  }
//loop insertion sorting bars
   //for(i=0; i< bar.length; i++){
    for(var j=0; j > 0; j--){
      if(bar[j-1] > bar[j]){
        var temp = bar[j];
         bar[j-1]= bar[j];
         bar[j-1] = temp;
      }
    }
  // }
console.log(bar[i]);
 console.log(bar[j]);
}


//swap code
//vector located here

//sorting algorithm

  //
