class World {
  character= new Character();
  statusbarLife = new StatusbarLife();
  statusbarCoins = new StatusbarCoins();
  statusbarPoisonBottle = new StatusbarPoisonBottle();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  draw() {
    this.level.draw(this.ctx);
  }

  setWorld() {
    this.character.world = this ;
  }

  

  
}