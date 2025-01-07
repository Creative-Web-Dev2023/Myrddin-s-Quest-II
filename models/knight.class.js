class Knight extends MovableObject {
    IMAGES_IDLE = [
        "img/knight/idle/idle 0.png",
        "img/knight/idle/idle 1.png",
        "img/knight/idle/idle 2.png",
    ];

    IMAGES_WALK = [
        "img/knight/walk/walk 0.png",
        "img/knight/walk/walk 1.png",
        "img/knight/walk/walk 2.png",
        "img/knight/walk/walk 3.png",
        "img/knight/walk/walk 4.png",
        "img/knight/walk/walk 5.png",
    ];

    IMAGES_ATTACK = [
        "img/knight/attack/attack 0.png",
        "img/knight/attack/attack 1.png",
        "img/knight/attack/attack 2.png",
        "img/knight/attack/attack 3.png",
        "img/knight/attack/attack 4.png",
        "img/knight/attack/attack 5.png",
        "img/knight/attack/attack 6.png",
    ];

    IMAGES_HURT = [
        "img/knight/hurt/hurt 0.png",
        "img/knight/hurt/hurt 1.png",
    ];

    IMAGES_DEAD = [
        "img/knight/dead/dead 0.png",
        "img/knight/dead/dead 1.png",
        "img/knight/dead/dead 2.png",
        "img/knight/dead/dead 3.png",
        "img/knight/dead/dead 4.png",
        "img/knight/dead/dead 5.png",
    ];

    constructor(x, y, width, height) {
        super();
        this.loadImages(this.IMAGES_IDLE); // Lade Idle-Bilder
        this.x = x; // X-Position
        this.y = y; // Y-Position
        this.width = width; // Breite
        this.height = height; // Höhe
        this.currentImage = 0; // Aktuelles Bild
        this.energy = 100; // Energie des Knights
        this.isDead = false; // Status, ob der Knight tot ist
        this.animate(); // Starte die Animation
    }

    animate() {
        setInterval(() => {
            if (this.isDead) {
                this.playAnimation(this.IMAGES_DEAD); // Abspielen der Death-Animation
            } else {
                this.playAnimation(this.IMAGES_IDLE); // Idle-Animation abspielen
            }
        }, 100); // Zeitintervall für die Animation
    }

    playAnimation(images) {
        this.currentImage = (this.currentImage + 1) % images.length; // Nächste Bild-Index
        this.img = this.imageCache[images[this.currentImage]]; // Setze das aktuelle Bild
    }

    attack() {
        this.loadImages(this.IMAGES_ATTACK); // Lade Attack-Bilder
        this.playAnimation(this.IMAGES_ATTACK); // Attack-Animation abspielen
    }

    hurt() {
        this.loadImages(this.IMAGES_HURT); // Lade Hurt-Bilder
        this.playAnimation(this.IMAGES_HURT); // Hurt-Animation abspielen
    }

    walk() {
        this.loadImages(this.IMAGES_WALK); // Lade Walk-Bilder
        this.playAnimation(this.IMAGES_WALK); // Walk-Animation abspielen
    }

    die() {
        this.isDead = true; // Setze den Status auf tot
        this.loadImages(this.IMAGES_DEAD); // Lade Death-Bilder
        this.playAnimation(this.IMAGES_DEAD); // Death-Animation abspielen
    }

    update() {
        // Hier kannst du die Logik für die Bewegung und andere Updates hinzufügen
        if (this.energy <= 0) {
            this.die(); // Wenn die Energie 0 erreicht, stirbt der Knight
        }
    }
}
