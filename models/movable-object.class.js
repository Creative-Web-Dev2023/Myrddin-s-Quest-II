class MovableObject extends DrawableObject {
    constructor() {
        super(); // Aufruf des Konstruktors der Elternklasse
        this.speed = 10; // Bewegungsgeschwindigkeit
        this.speedY = 0; // Vertikale Geschwindigkeit
        this.acceleration = 2.5; // Beschleunigung
        this.otherDirection = false; // Richtung
        this.lastHit = 0; // Zeitpunkt des letzten Treffers
        this.currentImage = 0; // Aktuelles Bild für Animation

        this.energy = 100; // Energie des Objekts
        this.bottleAmount = 0; // Anzahl der Flaschen
        this.coinAmount = 0; // Anzahl der Münzen

        // Audio für das Sammeln von Objekten
        this.collect_coin_sound = new Audio("collect_bottle.mp3");
        this.collect_bottle_sound = new Audio("audio/pickupBottle.wav");
    }

    // Animation abspielen
    playAnimation(images) {
        this.img = this.imageCache[images[this.currentImage % images.length]];
        this.currentImage++;
    }

    // Bewegung nach rechts
    moveRight() {
        this.x += this.speed;
    }

    // Bewegung nach links
    moveLeft() {
        this.x -= this.speed;
    }

    // Springen
    jump() {
        this.speedY = 30; // Setze die vertikale Geschwindigkeit für den Sprung
    }

    // Schwerkraft anwenden
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY; // Bewege das Objekt nach oben
                this.speedY -= this.acceleration; // Verringere die vertikale Geschwindigkeit
            }
        }, 1000 / 25); // 25 FPS
    }

    // Überprüfen, ob das Objekt über dem Boden ist
    isAboveGround() {
        return this instanceof ThrowableObject || this.y < 180;
    }

    // Kollisionserkennung
    isColliding(object) {
        return (
            this.x + this.hitBoxX + this.hitBoxWidth > object.x + object.hitBoxX &&
            this.y + this.hitBoxY + this.hitBoxHeight > object.y + object.hitBoxY &&
            this.x + this.hitBoxX < object.x + object.hitBoxX + object.hitBoxWidth &&
            this.y + this.hitBoxY < object.y + object.hitBoxY + object.hitBoxHeight
        );
    }

    // Treffer verarbeiten
    hit() {
        const timePassed = (new Date().getTime() - this.lastHit) / 1000;
        if (timePassed > 1) {
            this.energy = Math.max(0, this.energy - 19); // Energie verringern, aber nicht unter 0
            this.lastHit = new Date().getTime(); // Zeitpunkt des letzten Treffers aktualisieren
        }
    }

    // Überprüfen, ob das Objekt verletzt ist
    isHurt() {
        return (new Date().getTime() - this.lastHit) / 1000 < 1;
    }

    // Überprüfen, ob das Objekt tot ist
    isDead() {
        return this.energy === 0;
    }

    // Münze sammeln
    collectCoin(coin) {
        const index = this.world.level.coins.indexOf(coin);
        if (index !== -1) {
            this.world.level.coins.splice(index, 1); // Münze aus der Liste entfernen
            this.playSound(this.collect_coin_sound); // Sammelgeräusch abspielen
        }
    }

    // Flasche sammeln
    collectBottle(bottle) {
        const index = this.world.level.bottles.indexOf(bottle);
        if (index !== -1) {
            this.world.level.bottles.splice(index, 1); // Flasche aus der Liste entfernen
            this.playSound(this.collect_bottle_sound); // Sammelgeräusch abspielen
        }
    }

    // Hilfsmethode zum Abspielen von Geräuschen
    playSound(sound) {
        sound.currentTime = 0; // Setze die Wiedergabezeit zurück
        sound.play(); // Spiele das Geräusch ab
    }
} 