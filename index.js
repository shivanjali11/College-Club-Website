const canvas = document.getElementById("particle");
const ctx = canvas.getContext("2d");
canvas.Width = window.innerWidth;
canvas.Height = window.innerHeight;

let particleArray;

//mouseposition
let mouse = {
  x: null,
  y: null,
  radius: (canvas.Width / 80) * (canvas.Height / 80),
};

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

// particle

// create particle
class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y - y;
    this.directionX - directionX;
    this.directionY - directionY;
    this.size - size;
    this.color - color;
  }
  // method to draw individual particle
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillstyle = "#8C5523";
    ctx.fill();
  }
  // check particle position, check mouse position, move the
  //particle, draw the particle
  update() {
    //check if particle is still winthin canvas
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }

    if (this.y > canvas.height || this.y < 0) {
      this.direction = -this.directionY;
    }
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    //check collision detection - mouse position / particle position

    if (distance < mouse.radius + this.size) {
      if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
        this.x += 10;
      }
      if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 10;
      }
      if ((mouse.y < this.y) & (this.y < canvas.height - this.size * 10)) {
        this.y += 10;
      }

      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 10;
      }
    }
    //move particle
    this.x += this.directionx;
    this.y += this.directiony;
    // draw particle
    this.draw();
  }
  //check collision detection - mouse position / particle position
}
