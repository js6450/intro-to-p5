function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  
  for(let y = 0; y < height; y += 50){
    for(let x = 0; x < width; x += 50){
      noStroke();
      fill(255, 0, 255, 100);
      circle(x, y, 50);
      
      fill(0, 0, 255, 100);
      ellipse(x + 10, y - 20, 30, 20);
      
      fill(255, 255, 0)
      square(x, y, 20);
     
      stroke(0);
      strokeWeight(5);
      line(x - 10, y, x + 10, y + 15);
    }
  }
}