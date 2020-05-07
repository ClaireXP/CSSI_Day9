// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global
 *    background,
 *    color,
 *    createCanvas,
 *    fill,
 *    image,
 *    loadImage,
 *    random,
 *    square,
 */

const ASPECT_RATIO = 16 / 9;
const SCREEN_HEIGHT = 300;
const SCREEN_WIDTH = Math.round(SCREEN_HEIGHT * ASPECT_RATIO);

const LOGO_SIZE = 100;
let DVD_IMAGE;

let x = 0, y = 0;
let xDelta = 1, yDelta = 1;

function setup() {
  // Code here runs only once
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  background(0);

  DVD_IMAGE = loadImage(
      "https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
}

function draw() {
  // Code here runs continuously

  // move Logo
  x = x + xDelta;
  if (x === 0 && xDelta === -1) {
    xDelta = 1;
    fill(randomColor());
  } else if (x + LOGO_SIZE === SCREEN_WIDTH && xDelta === 1) {
    xDelta = -1;
    fill(randomColor());
  }

  y = y + yDelta;
  if (y === 0 && yDelta === -1) {
    yDelta = 1;
    fill(randomColor());
  } else if (y + LOGO_SIZE === SCREEN_HEIGHT && yDelta === 1) {
    yDelta = -1;
    fill(randomColor());
  }

  // draw Logo
  fill('blue');
  image(DVD_IMAGE, x, y, LOGO_SIZE, LOGO_SIZE);
  // square(x, y, LOGO_SIZE, 10, 10, 10, 10);
}

function randomColor() {
  return color(random(0, 256), random(0, 256), random(0, 256));
}