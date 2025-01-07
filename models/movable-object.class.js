class MovableObject extends DrawableObject {
  
        speed = 10; // Bewegungsgeschwindigkeit
        speedY = 0; // Vertikale Geschwindigkeit
        acceleration = 2.5; // Beschleunigung
        otherDirection = false; // Richtung
        lastHit = 0; // Zeitpunkt des letzten Treffers
        currentImage = 0; // Aktuelles Bild für Animation

        energy = 100; // Energie des Objekts
        bottleAmount = 0; // Anzahl der Flaschen
        coinAmount = 0; // Anzahl der Münzen

        // Audio für das Sammeln von Objekten
        collect_coin_sound = new Audio("audio/collect_bottle.mp3");
   
  


    playAnimation(images) {
        this.img = this.imageCache[images[this.currentImage % images.length]];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }


    moveLeft() {
        this.x -= this.speed;
    }


    jump() {
        this.speedY = 30; // Setze die vertikale Geschwindigkeit für den Sprung
    }
    applyGravity() { // Apply gravity effect to the object
        this.gravityInterval = setInterval(() => {
          if (this.isAboveGround() || this.speedY > 0) { // Überprüfe, ob der Charakter über dem Boden ist oder nach oben springt
            this.y -= this.speedY; // Bewege das Objekt nach oben, wenn speedY positiv ist
            this.speedY -= this.acceleration; // Verringere die vertikale Geschwindigkeit
          } else {
            this.y = 150; // Setze die y-Position auf den Boden, wenn das Objekt den Boden erreicht
            this.speedY = 0; // Setze die vertikale Geschwindigkeit zurück
          }
        }, 1000 / 25); // Intervall für die Schwerkraft
      }

 
    isAboveGround() { // Check if object is above ground 
        return this.y < 150;
    }
   
    isColliding(object) {
        return (
            this.x + this.hitBoxX + this.hitBoxWidth > object.x + object.hitBoxX &&
            this.y + this.hitBoxY + this.hitBoxHeight > object.y + object.hitBoxY &&
            this.x + this.hitBoxX < object.x + object.hitBoxX + object.hitBoxWidth &&
            this.y + this.hitBoxY < object.y + object.hitBoxY + object.hitBoxHeight
        );
    }

    hit() {
        const timePassed = (new Date().getTime() - this.lastHit) / 1000;
        if (timePassed > 1) {
            this.energy = Math.max(0, this.energy - 19); // Energie verringern, aber nicht unter 0
            this.lastHit = new Date().getTime(); // Zeitpunkt des letzten Treffers aktualisieren
        }
    }


    isHurt() {
        return (new Date().getTime() - this.lastHit) / 1000 < 1;
    }


    isDead() {
        return this.energy === 0;
    }


    collectCoin(coin) {
        const index = this.world.level.coins.indexOf(coin);
        if (index !== -1) {
            this.world.level.coins.splice(index, 1); // Münze aus der Liste entfernen
            this.playSound(this.collect_coin_sound); // Sammelgeräusch abspielen
        }
    }


    collectBottle(bottle) {
        const index = this.world.level.bottles.indexOf(bottle);
        if (index !== -1) {
            this.world.level.bottles.splice(index, 1); // Flasche aus der Liste entfernen
            this.playSound(this.collect_bottle_sound); // Sammelgeräusch abspielen
        }
    }


    playSound(sound) {
        sound.currentTime = 0; 
        sound.play(); 
    }
} 
