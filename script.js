// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, random, background, fill, color, rect, ellipse, stroke, noStroke, noFill, strokeWeight */

function setup(){
  // Code here runs only once
  createCanvas(300, 300)
}

let x = 50, y = 50;
let w = 10, h = 50;

function draw() {
  // Code here runs continuously
  background(220)

  // ellipse(x++ % 200,
  //         y++ % 200,
  //         (10 + (w++ % 40)),
  //         (50 - (h++ % 40)))
  
  drawOlympicRings(0, 0, 50);

}

/**
 * @param {number} x x-coord of left end of pattern
 * @param {number} y y-coord of left end of pattern
 *
 *
 */
function drawOlympicRings(x, y, ringSize) {
  noFill();
  strokeWeight(ringSize / 10);
  const ringSpacer = ringSize / 2 + ringSize / 10;
  let xPos = x + ringSize;
  const yTop = y + ringSize;
  const yBottom = y + ringSize * 1.5;
  
  stroke('blue');
  ellipse(xPos, yTop, ringSize, ringSize);
  
  xPos += ringSpacer;
  stroke('yellow');
  ellipse(xPos, yBottom, ringSize, ringSize);
  
  xPos += ringSpacer;
  stroke('black');
  ellipse(xPos, yTop, ringSize, ringSize);
  
  xPos += ringSpacer;
  stroke('green');
  ellipse(xPos, yBottom, ringSize, ringSize);
  
  xPos += ringSpacer;
  stroke('red');
  ellipse(xPos, yTop, ringSize, ringSize);
}