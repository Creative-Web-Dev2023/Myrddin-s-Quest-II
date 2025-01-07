class Level {
    enemies;
    clouds;
    backgroundObjects;
    poisonBottles;
    coins;
    level_end_x = 8000; // Level endet bei x = 8000;
    
    constructor(enemies, clouds, backgroundObjects, poisonBottles, coins) {
        this.enemies = enemies || [];
        this.clouds = clouds || [];
        this.backgroundObjects = backgroundObjects || [];
        this.poisonBottles = poisonBottles || [];
        this.coins = coins || [];
    }

    draw(ctx) {
        // Zeichne Hintergrundobjekte
        this.backgroundObjects.forEach((backgroundObject) => {
            backgroundObject.draw(ctx);
        });

        // Zeichne andere Objekte (z.B. Gegner, Wolken, etc.)
        this.enemies.forEach((enemy) => {
            enemy.draw(ctx);
        });

        this.clouds.forEach((cloud) => {
            cloud.draw(ctx);
        });

        this.poisonBottles.forEach((poisonBottle) => {
            poisonBottle.draw(ctx);
        });

        this.coins.forEach((coin) => {
            coin.draw(ctx);
        });
    }
}
  