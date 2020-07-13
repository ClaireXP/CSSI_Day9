/* ____    ___       _      _       ____  
  / ___|  / _ \     / \    | |     / ___| 
 | |  _  | | | |   / _ \   | |     \___ \ 
 | |_| | | |_| |  / ___ \  | |___   ___) |
  \____|  \___/  /_/   \_\ |_____| |____/ 
                       
-- Let's come up with goals together! --
1) Make the time count down
2) Figured out how to bring in a library
3) Check if the mouse hits the coin
3a) Move the coin somewhere else
3b) Update the score
4) stop the game when time is up
5) Show 'game over' or something similar

  ____    _____   ____    _____   _____    ____   _   _ 
 / ___|  |_   _| |  _ \  | ____| |_   _|  / ___| | | | |
 \___ \    | |   | |_) | |  _|     | |   | |     | |_| |
  ___) |   | |   |  _ <  | |___    | |   | |___  |  _  |
 |____/    |_|   |_| \_\ |_____|   |_|    \____| |_| |_|

1)  Multiple coins on the screen at a time
2)  Coins of varying values
3)  Colors and decorations for coins
4)  Time-extending power-ups
5)  Coins that expire / move after a certain length of time.
6)  A player token that grows or shrinks as coins are collected.
7)  Coins that bounce around screen like the DVD logo did.
8)  Coins that simulate the rotating motion of Mario coins.
9)  A “restart” button or click function.
10) A larger, more pronounced “game over” proclamation.
11) A score rater (i.e. okay, good, great, outstanding!)
12) A high score over multiple plays.

*/

// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global
 *    createCanvas, WEBGL,
 *    colorMode,
 *    HSB,
 *    random,
 *    width,
 *    height,
 *    background,
 *    ellipse,
 *    mouseX,
 *    mouseY,
 *    createCanvas,
 *    text,
 *    collideCircleCircle,
 *    circle,
 *    loadImage, loadFont, textFont, textSize,
 *    image,
 *    fill,
 *    WEBGL,
 *    textAlign, RIGHT, LEFT,
 *    rotateY, translate, angleMode, DEGREES,
 */

let brushHue, backgroundColor, score, time, gameIsOver, hit;
let coin1X, coin1Y;
coin2X, coin2Y, coin3X, coin3Y;
let powerUpX, powerUpY;
let marioSize;
let coinSize, coinRotation;

let marioImage, coinImage;
let productSansFont;

function preload() {
  marioImage = loadImage('https://cdn.glitch.com/3a489548-02ed-4b83-aa36-a81617fdea0a%2FPaper-Mario-icon.png?v=1594675429292');
  coinImage = loadImage('https://cdn.glitch.com/3a489548-02ed-4b83-aa36-a81617fdea0a%2Fcoin.png?v=1594677304311');
  productSansFont = loadFont('https://cdn.glitch.com/3a489548-02ed-4b83-aa36-a81617fdea0a%2FProductSans-Regular.ttf?v=1594678726380');
}

function setup() {
  // Canvas & color settings
  createCanvas(400, 400, WEBGL);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  backgroundColor = 95;
  
  coin1X = random(width);
  coin1Y = random(height);
  coin2X = random(width);
  coin2Y = random(height);
  coin3X = random(width);
  coin3Y = random(height);
  
  powerUpX = random(width);
  powerUpY = random(height);
  
  marioSize = 24;
  coinSize = 20;
  coinRotation = 0;
  angleMode(DEGREES);

  textFont(productSansFont);
  textSize(15);
  time = 1000;
  gameIsOver = false;
  score = 0;
}

function draw() {
  background(backgroundColor);
  
  drawGameData();
  drawCoins();
  drawMushrooms();
  drawMario();
}

function drawGameData() {
  fill('black');
  textAlign(LEFT);
  text(`Time remaining: ${time}`, 10 - width / 2, 20 - height / 2);
  textAlign(RIGHT);
  text(`Score: ${score}`, width / 2 - 10, 20 - height / 2);

  if (time > 0) {
    time = time - 1;
    // time -= 1;
    // time--;
  }
  
  if (time == 0) {
    gameIsOver = true;
  }
}

function drawCoins() {
  // Draw each coin; if Mario is hitting it, move it and update the score.

  drawCoin(coin1X, coin1Y);  
  if (collideCircleCircle(mouseX, mouseY, marioSize, coin1X, coin1Y, coinSize)) {
    // Move the coin somewhere else.
    coin1X = random(width);
    coin1Y = random(height);
    score++;
  }

  drawCoin(coin2X, coin2Y);  
  if (collideCircleCircle(mouseX, mouseY, marioSize, coin2X, coin2Y, coinSize)) {
    // Move the coin somewhere else.
    coin2X = random(width);
    coin2Y = random(height);
    score++;
  }

  drawCoin(coin3X, coin3Y);  
  if (collideCircleCircle(mouseX, mouseY, marioSize, coin3X, coin3Y, coinSize)) {
    // Move the coin somewhere else.
    coin3X = random(width);
    coin3Y = random(height);
    score++;
  }
}

function drawCoin(x, y) {
  // We want the image to be centered over the its coordinates.
  let coinImageX = x - width / 2 - coinSize / 2;
  let coinImageY = y - height / 2 - coinSize / 2;
  coinRotation -= 5;
  
  translate(coinImageX, coinImageY);
  rotateY(coinRotation);
  
  image(coinImage, - coinSize / 2, - coinSize / 2, coinSize, coinSize);
  
  rotateY(-coinRotation);
  translate(-coinImageX, -coinImageY);
}

function drawMario() {
  // We want the image to be centered over the mouse.
  let marioX = mouseX - width / 2 - marioSize / 2;
  let marioY = mouseY - height / 2 - marioSize / 2;
  image(marioImage, marioX, marioY, marioSize, marioSize);
  // ellipse(mouseX, mouseY, 20);
}

function drawMushrooms() {
  fill('red');
  ellipse(powerUpX - width / 2, powerUpY - height / 2, 10);
}