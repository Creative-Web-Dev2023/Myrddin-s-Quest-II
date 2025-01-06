class BackgroundObject extends MovableObject {
    constructor(imagePath, x, y = 480 - 500) {
        super();
        this.width = 720;
        this.height = 500;
        this.x = x;
        this.y = y;
        this.loadImage(imagePath);
    }

    move(speed) {
        this.x -= speed;
        if (this.x <= -this.width) {
            this.x += this.width;
        }
    }

    draw(ctx) {
        let width = this.width;
        let height = this.height;
        let yOffset = 0;

        if (this.img.src.includes('candle')) {
            width = 200;
            height = 320;
            yOffset = 115;
        } else if (this.img.src.includes('skull')) {
            width = 180;
            height = 160;
            yOffset = 273;
        }

        ctx.drawImage(this.img, this.x, this.y + yOffset, width, height);
    }
}
