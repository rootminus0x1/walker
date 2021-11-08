// main

let w1;

function setup() {
    createCanvas(700, 400, WEBGL);
    w1 = new Walker(200, -300, 50, 1, 0);
}
  
function draw() {
    background(220);

    w1.move();
    w1.display();

    //ellipse(200, 200, 100/5, 100);
}
  