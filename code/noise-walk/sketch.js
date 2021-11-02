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

  x += (noise(frameCount * 0.01) - 0.5) * 10;
  y += (noise(frameCount * 0.02) - 0.5) * 10;

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