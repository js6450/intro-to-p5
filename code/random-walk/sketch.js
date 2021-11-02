let x, y;
let px, py;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width / 2;
  y = height / 2;
  px = x;
  py = y;

  background(0);
}

function draw() {

  x += random(-50, 50);
  y += random(-50, 50);

  if (x > width) {
    px = x = 0;
  }
  if (x < 0) {
    px = x = width;
  }
  if (y > height) {
    py = y = 0;
  }
  if (y < 0) {
    py = y = height;
  }

  stroke(255);
  line(x, y, px, py);

  px = x;
  py = y;
}