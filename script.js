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
 *    createCanvas,
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
 *    loadImage,
 */

let brushHue, backgroundColor, coinX, coinY, score, time, gameIsOver, hit;
let powerUpX, powerUpY;

let marioImage;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  backgroundColor = 95;
  
  marioImage = loadImage('https://icons.iconarchive.com/icons/ph03nyx/super-mario/48/Paper-Mario-icon.png');
  coinX = random(width);
  coinY = random(height);
  
  powerUpX = random(width);
  powerUpY = random(height);

  time = 1000;
  gameIsOver = false;
  score = 0;
}

function draw() {
  background(backgroundColor);
  
  drawCoins();
  
  ellipse(mouseX, mouseY, 20);
  
  // fill('red');
  ellipse(powerUpX, powerUpY, 10);
  // fill('white');
  
  text(`Time remaining: ${time}`, 20, 40);
  // text('Time remaining: ' + time, 20, 80);
  handleTime();
  handleCoinCollision();
  handlePowerUpCollision();
  
  text(`Score: ${score}`, 20, 20);
}

function drawCoins() {
  circle(mouseX, mouseY, 20);
}

function handleCoinCollision() {
  // We'll write code for what happens if your character hits a coin.
  
  // If the mouse is hitting the coin, move the coin and update the score
  let hit = false;
  hit = collideCircleCircle(mouseX, mouseY, 20, coinX, coinY, 20);
  
  if (hit) {
    text('hit!', 100, 100);
    
    // Move the coin somewhere else.
    coinX = random(width);
    coinY = random(height);
    
    score++;
  }
  
  // collideCircleCircle(mouseX,mouseY,150,200,200,100)
}

function handlePowerUpCollision() {
  
}

function handleTime() {
  if (time > 0) {
    time = time - 1;
    // time -= 1;
    // time--;
  }
  
  if (time == 0) {
    gameIsOver = true;
  }
  
  // We'll write code to handle the time.
}