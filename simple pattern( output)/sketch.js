function setup() {
  createCanvas(600, 400);
  background(265, 45, 14); // red background

  for (let x = 50; x < width; x += 50) {
    for (let y = 50; y < height; y += 50) {
      fill(255);
      circle(x, y, 20);
    }
  }
}
