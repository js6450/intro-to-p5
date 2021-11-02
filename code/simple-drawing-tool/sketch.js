let redVal = 255;
let greenVal = 255;
let blueVal = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}

function draw() {
  // background(0, 5);
  
  fill(redVal, greenVal, blueVal, 50);
  ellipse(mouseX, mouseY, 100, 100);
}

function mousePressed(){
  redVal = random(255);
  greenVal = random(255);
  blueVal = random(255);
}