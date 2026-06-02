function setup() {
  createCanvas(500, 500);
  background(220);
}

function draw() {
  background(220);

  // Top bun
  fill(222, 184, 135);
  arc(250, 180, 250, 140, PI, TWO_PI);

  // Sesame seeds
  fill(255);
  ellipse(200, 145, 8, 4);
  ellipse(240, 130, 8, 4);
  ellipse(280, 145, 8, 4);
  ellipse(320, 150, 8, 4);
  ellipse(260, 160, 8, 4);

  // Lettuce
  fill(50, 180, 75);
  rect(130, 180, 240, 15, 5);

  // Cheese
  fill(255, 204, 0);
  quad(160, 195, 340, 195, 320, 225, 180, 225);

  // Patty
  fill(90, 50, 30);
  rect(130, 210, 240, 40, 10);

  // Tomato
  fill(220, 50, 50);
  rect(140, 255, 220, 15, 5);

  // Bottom bun
  fill(222, 184, 135);
  rect(120, 270, 260, 50, 10);
}