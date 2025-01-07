class BackgroundObject {
    constructor(imagePaths, x, y, width = 720, height = 480) {
        this.images = []; // Array für mehrere Bilder
        this.currentImageIndex = 0; // Aktueller Bildindex für Animation
        this.animationSpeed = 100; // Zeit zwischen den Animationen in Millisekunden
        this.animationInterval = null; // Intervall für die Animation
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        // Überprüfe, ob imagePaths ein Array ist
        if (Array.isArray(imagePaths)) {
            this.loadImages(imagePaths); // Lade die Bilder
        } else {
            console.error("imagePaths muss ein Array sein:", imagePaths);
        }

        // Starte die Animation
        this.startAnimation();
    }

    loadImages(imagePaths) {
        imagePaths.forEach((path) => {
            const img = new Image();
            img.src = path;
            this.images.push(img);
        });
    }

    startAnimation() {
        this.animationInterval = setInterval(() => {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length; // Nächster Bildindex
        }, this.animationSpeed);
    }

    draw(ctx) {
        if (this.images.length > 0 && this.images[this.currentImageIndex].complete) {
            ctx.drawImage(this.images[this.currentImageIndex], this.x, this.y, this.width, this.height);
        } else {
            console.error("Bild ist nicht geladen:", this.images[this.currentImageIndex]?.src);
        }
    }

    stopAnimation() {
        clearInterval(this.animationInterval); // Stoppe die Animation
    }
}
