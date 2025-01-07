class DrawableObject {
    constructor() {
        this.image = new Image();
        this.imageCache = {};
        this.x = 0;
        this.y = 0;
        this.width = 100;
        this.height = 100;
    }

    loadImages(images) {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            this.imageCache[src] = img;
        });
    }

    draw(ctx) {
        if (this.image && this.image.complete) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            console.error("Bild ist nicht gesetzt oder nicht geladen:", this.image);
        }
    }

    drawFrame() {
        if(
            this instanceof Character ||
            this instanceof Knight ||
            this instanceof Endboss ||
            this instanceof Snake ||
            this instanceof Coin ||
            this instanceof Poison ||
            this instanceof Key
        ) {
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}