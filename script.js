// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global square, createCanvas, random, background, fill, color, rect, ellipse, stroke, noStroke, noFill, strokeWeight */

const ASPECT_RATIO = 16 / 9;
const SCREEN_HEIGHT = 300;
const SCREEN_WIDTH = Math.round(SCREEN_HEIGHT * ASPECT_RATIO);

const LOGO_SIZE = 50;

let x = 0, y = 0;
let xDelta = 1, yDelta = 1;

function setup() {
  // Code here runs only once
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  background(0);
}

function draw() {
  // Code here runs continuously

  // move Logo
  x = x + xDelta;
  if (x === 0 && xDelta === -1) {
    xDelta = 1;
  } else if (x + LOGO_SIZE === SCREEN_WIDTH && xDelta === 1) {
    xDelta = -1;
  }

  y = y + yDelta;
  if (y === 0 && yDelta === -1) {
    yDelta = 1;
  } else if (y + LOGO_SIZE === SCREEN_HEIGHT && yDelta === 1) {
    yDelta = -1;
  }

  // draw Logo
  fill('blue');
  square(x, y, LOGO_SIZE, 10, 10, 10, 10);
}