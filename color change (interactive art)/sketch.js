let circleColor;

function setup() {
  createCanvas(600, 400);
  circleColor = color(255, 255, 255);
}

function draw() {
  background(255, 165, 0); // Orange background

  // Instructions
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("Move your mouse and click!", width / 2, 40);

  // Circle follows mouse
  fill(circleColor);
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);
}

function mousePressed() {
  // Random color when clicked
  circleColor = color(
    random(255),
    random(255),
    random(255)
  );
}
