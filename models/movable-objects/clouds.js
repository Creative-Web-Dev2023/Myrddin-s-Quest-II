class Cloud extends MovableObject {
    constructor(initialX = Math.random() * 2600) {
        super().loadImage('img/clouds/full.png');
        this.width = 600; // Breite der Wolke
        this.height = 200; // Höhe der Wolke
        this.speed = 0.2; // Geschwindigkeit der Wolke
        this.x = initialX; // Starte mit der übergebenen oder zufälligen x-Position
        this.y = Math.random() * 50; // Zufällige y-Position (Wolkenhöhe)
        this.startAnimation(); // Starte die Animation
    }

    startAnimation() {
        setInterval(() => this.moveLeft(), 1000 / 60); // 60 FPS für flüssige Bewegung
    }

    moveLeft() {
        this.x -= this.speed; // Bewege die Wolke nach links
        if (this.x + this.width < 0) {
            this.resetPosition(); // Setze die Wolke zurück, wenn sie den Bildschirm verlässt
        }
    }

    resetPosition() {
        this.x = 2600 + Math.random() * 500; // Setze sie weit rechts zurück
        this.y = Math.random() * 50; // Ändere die y-Position zufällig
    }
}

class Clouds {
    constructor(clouds) {
        this.clouds = clouds; // Array von Wolken
    }

    randomizePositions(totalLength = 2600) {
        const spacing = totalLength / this.clouds.length; // Abstand zwischen den Wolken

        this.clouds.forEach((cloud, index) => {
            cloud.x = index * spacing + Math.random() * spacing; // Verteile gleichmäßig und zufällig
            cloud.y = Math.random() * 50; // Zufällige y-Position
        });
    }
} 