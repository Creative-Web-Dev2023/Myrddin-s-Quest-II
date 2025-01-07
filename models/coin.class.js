class Coin {
    constructor(x, y) {
        this.x = x; // X-Position der Münze
        this.y = y; // Y-Position der Münze
        this.width = 30; // Breite der Münze
        this.height = 30; // Höhe der Münze
        this.image = new Image(); // Bild für die Münze
        this.image.src = "img/game_ui/coins/coin.png"; // Pfad zum Münzbild
        this.collected = false; // Status, ob die Münze gesammelt wurde
    }

    draw(ctx) {
        if (!this.collected) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height); // Zeichne die Münze
        }
    }

    collect() {
        this.collected = true; // Setze den Status auf gesammelt
    }
} 