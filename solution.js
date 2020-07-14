// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global
 *    createCanvas
 *    colorMode,
 *    HSB,
 *    background,
 */

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(90);
}