/*
EXTRA CHALLENGES:

1) Can you randomize the xSpeed and ySpeed values every time the ellipse hits the canvas edges?
2) Can you tweak the if statements to factor in the radius of the ellipse to make the ellipse bounce of its edge rather than its center?
3) Can you randomize the color of the ellipse as well? Can you randomize it every time it hits the canvas edges?
*/

// Define global variables for x and y positions and x and y speeds
let xPos;
let yPos;
let xSpeed;
let ySpeed;

// Define global variables for red, green, and blue color values to be used as fill color of the bouncing ball
let redValue;
let greenValue;
let blueValue;

function setup() {
  // Create a canvas using browser (or preview window) width and browser (or preview window) height
  createCanvas(windowWidth, windowHeight);
  
  // Set initial value of x and y positions to be the middle of the canvas
  xPos = width / 2;
  yPos = height / 2;
  
  // Generate a random number between -3 and 3 for the x and y speeds 
  xSpeed = random(-3, 3);
  ySpeed = random(-3, 3);
  
  // Generate a random number between 0 and 255 for the red, green, and blue color values
  redValue = random(0, 255);
  greenValue = random(0, 255);
  blueValue = random(0, 255);
}

function draw() {
  // Refresh canvas by reseting background color to black
  background(0);
  
  // Set fill color for ellipse using randomized values
  fill(redValue, greenValue, blueValue);
  // Draw ellipse at (xPos, yPos) with width and height of 100px
  ellipse(xPos, yPos, 100, 100);
  
  // Move xPos by xSpeed
  xPos = xPos + xSpeed; // OR can write xPos += xSpeed;
  // Move yPos by ySpeed // OR can write yPos += ySpeed;
  yPos = yPos + ySpeed;
  
  // If xPos is smaller than 0 OR greater than width of the canvas
  if(xPos < 0 || xPos > width){
    // Code block inside curly brackets run only if either conditions in line 45 is true
    // Inverse the xSpeed value to go opposite direction horizontally
    xSpeed = xSpeed * -1; // OR can write xSpeed *= -1;
    
    // Randomize fill color for ellipse
    redValue = random(0, 255);
    greenValue = random(0, 255);
    blueValue = random(0, 255);
  }
  
  // If yPos is smaller than 0 OR greater than height of the canvas
  if(yPos < 0 || yPos > height){
    // Code block inside curly brackets run only if either conditions in line 57 is true
    // Inverse the ySpeed value to go opposite direction horizontally
    ySpeed = ySpeed * -1; // OR can write ySpeed *= -1;
    
    // Randomize fill color for ellipse
    redValue = random(0, 255);
    greenValue = random(0, 255);
    blueValue = random(0, 255);
  }
}