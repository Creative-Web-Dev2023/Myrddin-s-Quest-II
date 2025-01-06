class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
    });
}
draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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