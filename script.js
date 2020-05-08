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

let brushHue, lastX, lastY

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  strokeWeight(6);
  background(95);
}

function draw() {
  chooseColors()
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 15, 15)
  }
}

function chooseColors() {
  brushHue = (brushHue + 4) % 360;
  stroke(brushHue, 50, 80)
  fill(brushHue, 50, 80)
}

// function mousePressed() {
//   ellipse(random(width), random(height), 30, 30);
// }