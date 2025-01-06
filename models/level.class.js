class Level {
    enemies;
    clouds;
    backgroundObjects;
    poisonBottles;
    coins;
    level_end_x = 8000; // Level endet bei x = 5000;
    
    constructor(enemies, clouds, backgroundObjects, poisonObjects) {
      this.enemies = enemies;
      this.clouds = clouds;
      this.backgroundObjects = backgroundObjects;
      this.poisonBottles = poisonBottles;  // Poison-Objekte initialisieren
      this.coins = coins;
    }
  }
  