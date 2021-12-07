// https://editor.p5js.org/sporadicAbigail/sketches/l65fY3crF

let diameter = 150;

function setup() {
  //   runs once
  var myCanvas = createCanvas(400, 400);
  myCanvas.parent("sketch");
  frameRate(1);
}

function draw() {
//   runs in a loop
  diameter = 100*sin(frameCount);
  background(100, 0, 100); //rgb
  fill(100);
  stroke(255,50,150);
  strokeWeight(5);
  circle(frameCount, height/2, diameter)
  rect(30, 20, 55, 55);
  print("hello");
  print(frameCount);
}
