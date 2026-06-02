function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(135, 206, 235); // Sky blue background

  // Red Balloon
  fill(255, 0, 0);
  ellipse(120, 150, 80, 100);
  stroke(0);
  line(120, 200, 120, 300);

  // Blue Balloon
  fill(0, 100, 255);
  ellipse(240, 130, 80, 100);
  line(240, 180, 240, 300);

  // Green Balloon
  fill(0, 200, 100);
  ellipse(360, 160, 80, 100);
  line(360, 210, 360, 300);

  // Yellow Balloon
  fill(255, 215, 0);
  ellipse(480, 140, 80, 100);
  line(480, 190, 480, 300);
}