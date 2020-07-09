// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global
 *    mouseIsPressed,
 *    HSB,
 *    background,
 *    circle,
 *    color,
 *    colorMode,
 *    createCanvas,
 *    ellipse,
 *    fill,
 *    height,
 *    line,
 *    mouseX,
 *    mouseY,
 *    noStroke,
 *    stroke,
 *    random, 
 *    resizeCanvas,
 *    rect,
 *    strokeWeight,
 *    text,
 *    width,
 *    windowHeight,
 *    windowWidth,
 */

let brushHue, lastX, lastY, currentStrokeWeight, currentStrokeWeightDelta

function setup() {
  // Canvas & color settings
  // createCanvas(windowWidth - 100, windowHeight - 100);
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  currentStrokeWeight = 6;
  currentStrokeWeightDelta = 1;
  background(95);
}

function draw() {
  chooseColors()
  
  currentStrokeWeight += currentStrokeWeightDelta;
  if (currentStrokeWeight == 15 && currentStrokeWeightDelta == 1) {
    currentStrokeWeightDelta = -1;
  } else if (currentStrokeWeight == 5 && currentStrokeWeightDelta == -1) {
    currentStrokeWeightDelta = 1;
  }
  strokeWeight(currentStrokeWeight);

  if (mouseIsPressed) {
    // rect(mouseX, mouseY, 15, 15)
    line(lastX, lastY, mouseX, mouseY);
  }
  
  lastX = mouseX;
  lastY = mouseY;
}

function chooseColors() {
  brushHue = (brushHue + 4) % 360;
  // brushHue = random(360)
  stroke(brushHue, 50, 80)
  fill(brushHue, 50, 80)
}

function keyPressed() {
  background(95);
}

// function mousePressed() {
//   ellipse(random(width), random(height), 30, 30);
// }