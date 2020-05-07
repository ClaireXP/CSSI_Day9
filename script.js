// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, random, background, fill, color, rect, ellipse, stroke, noStroke, noFill, strokeWeight */

function setup(){
  // Code here runs only once
  createCanvas(300, 300)
}

let x = 50, y = 50;
let w = 10, h = 50;

function draw(){
  // Code here runs continuously
  background(50)

  ellipse(x++ % 200,
          y++ % 200,
          (10 + (w++ % 40)),
          (50 - (h++ % 40)))

}