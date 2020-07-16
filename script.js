/* ____    ___       _      _       ____  
  / ___|  / _ \     / \    | |     / ___| 
 | |  _  | | | |   / _ \   | |     \___ \ 
 | |_| | | |_| |  / ___ \  | |___   ___) |
  \____|  \___/  /_/   \_\ |_____| |____/ 
                       
1) Create arrays
2) Add elements to arrays
3) Access elements from arrays
4) Iterate over an array with a for loop

  ____    _____   ____    _____   _____    ____   _   _ 
 / ___|  |_   _| |  _ \  | ____| |_   _|  / ___| | | | |
 \___ \    | |   | |_) | |  _|     | |   | |     | |_| |
  ___) |   | |   |  _ <  | |___    | |   | |___  |  _  |
 |____/    |_|   |_| \_\ |_____|   |_|    \____| |_| |_|

1) This code still has some literals that might be called
   “magic numbers” in it. Find them and refactor them.
2) Go back to the raindrops activity from yesterday -
   refactor it with arrays and for loops.

*/

// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global
 *    createCanvas, width, height, windowWidth, windowHeight,
 *    colorMode, HSB,
 *    background,
 *    random,
 *    fill, noStroke, ellipse
 *    collideCircleCircle
 */

let dots = [];
let numDots = 30;

let can;

function setup() {
  can = createCanvas(windowWidth - 20, windowHeight - 20);
  colorMode(HSB, 360, 100, 100);
  
  for (let i = 0; i < numDots; i++) dots.push(new BouncyDot());
}

function draw() {
  background(220, 0, 80);
  for (const d of dots) {
    d.float();
    d.display();
    d.checkColl();
  }
}

class BouncyDot {
  constructor() {
    // Randomly generate position
    this.x = random(width);
    this.y = random(height);
    // Randomly generate radius
    this.r = random(10, 30);
    // Randomly generate color
    this.color = random(360);
    // Randomly generate a master velocity (broken into components)...
    this.masterXvelocity = random(0.5, 3);
    this.masterYvelocity = random(0.5, 3);
    // ...and use those as starting velocities.
    this.xVelocity = this.masterXvelocity;
    this.yVelocity = this.masterYvelocity;
  }

  float() {
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    // Standard bounce code - like the DVD logo, but for spheres.
    if (this.x + this.r > width) {
      this.xVelocity = -1 * this.masterXvelocity;
    }
    if (this.x - this.r < 0) {
      this.xVelocity = this.masterXvelocity;
    }
    if (this.y + this.r > height) {
      this.yVelocity = -1 * this.masterYvelocity;
    }
    if (this.y - this.r < 0) {
      this.yVelocity = this.masterYvelocity;
    }
  }

  display() {
    fill(this.color, 40, 80);
    noStroke();
    ellipse(this.x, this.y, this.r);
  }

  checkColl() {
    for(const d of dots){
        let hit = collideCircleCircle(this.x, this.y, this.r, d.x, d.y, d.r);

        if(hit){
          this.xVelocity = -this.xVelocity;
          this.yVelocity = -this.yVelocity;
          d.xVelocity = -d.xVelocity;
          d.yVelocity = -d.yVelocity;
          break;
        }
    }
  }
}
