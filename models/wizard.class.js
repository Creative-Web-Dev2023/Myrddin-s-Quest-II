class Character {
    x;
    y;
    width = 100; // Breite des Charakters
    height = 200; // Höhe des Charakters
    world; // Referenz zur Welt
    speed = 5; // Bewegungsgeschwindigkeit
    isJumping = false; // Status, ob der Charakter springt
    gravity = 1; // Schwerkraft
    velocityY = 0; // Vertikale Geschwindigkeit

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        if (!this.isJumping) {
            this.velocityY = -15; // Sprungkraft
            this.isJumping = true;
        }
    }

    applyGravity() {
        this.y += this.velocityY;
        this.velocityY += this.gravity; // Schwerkraft anwenden

        // Boden-Kollision
        if (this.y >= this.world.canvas.height - this.height) {
            this.y = this.world.canvas.height - this.height;
            this.isJumping = false;
            this.velocityY = 0; // Zurücksetzen der vertikalen Geschwindigkeit
        }
    }

    update() {
        this.applyGravity();
    }

    draw(ctx) {
        ctx.fillStyle = "blue"; // Beispiel-Farbe für den Charakter
        ctx.fillRect(this.x, this.y, this.width, this.height); // Zeichne den Charakter
    }
}
