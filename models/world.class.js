import Level1 from './levels/level1.js'; // Importieren Sie Level1

class World {
  character = new Character(50, 400);
  knight = new Knight(100, 300, 100, 200);
  statusbarCoins = new StatusBarCoins(100, 10, 40);
  poisonStatusbar = new PoisonStatusBar(5, 10, 70);
  wizardStatusBar = new WizardStatusBar();
  levels = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  clouds = [
    new Cloud(0, 50),
    new Cloud(500, 100),
    new Cloud(1000, 150)
  ];
  backgroundObjects = [];
  enemies = [];

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.keyboard = keyboard;
    
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  draw(ctx) {
    this.level.draw(this.ctx);
    this.character.draw(this.ctx);
    this.knight.draw(this.ctx);
    this.statusbarCoins.draw(this.ctx);
    // this.statusbarPoisonBottle.draw(this.ctx);
    this.wizardStatusBar.draw(this.ctx);
    this.backgroundObjects.forEach((backgroundObject) => {
      backgroundObject.draw(ctx);
    });
    const speed = 2;
    this.clouds.forEach((cloud) => {
      cloud.update(speed);
      cloud.draw(ctx);
    });
    this.enemies.forEach((enemy) => {
      enemy.draw(ctx);
    });
  }

  update() {
    this.character.update();
    this.knight.update();

    if (this.keyboard.RIGHT) {
      this.knight.walk();
      this.knight.x += 5;
    }
    if (this.keyboard.LEFT) {
      this.knight.walk();
      this.knight.x -= 5;
    }
  }
}