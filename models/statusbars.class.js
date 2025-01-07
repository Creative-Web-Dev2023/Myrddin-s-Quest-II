class StatusBar extends DrawableObject {
    constructor(maxValue, x, y, width, height, imageSrc) {
        super();
        this.maxValue = maxValue; // Maximale Werte
        this.currentValue = maxValue; // Aktueller Wert
        this.x = x; // X-Position
        this.y = y; // Y-Position
        this.width = width; // Breite der Statusleiste
        this.height = height; // Höhe der Statusleiste
        this.image = new Image(); // Bild für die Statusleiste
        this.image.src = imageSrc; // Bildquelle
    }

    setPercentage(percentage) {
        this.percentage = percentage; // Setze den Prozentwert
        let path = this.IMAGES[this.calculateImageIndex()]; // Setze den Bildpfad basierend auf dem Prozentwert
        this.img = this.imageCache[path]; // Setze das Bild
    }

    calculateImageIndex() {
        if (this.percentage >= 100) return 5;
        if (this.percentage >= 80) return 4;
        if (this.percentage >= 60) return 3;
        if (this.percentage >= 40) return 2;
        if (this.percentage >= 20) return 1;
        return 0;
    }
}

class PoisonStatusBar extends DrawableObject {
    IMAGES = [
        "img/game_ui/statusbars/statusbar-poison/0.png",
        "img/game_ui/statusbars/statusbar-poison/20.png",
        "img/game_ui/statusbars/statusbar-poison/40.png",
        "img/game_ui/statusbars/statusbar-poison/60.png",
        "img/game_ui/statusbars/statusbar-poison/80.png",
        "img/game_ui/statusbars/statusbar-poison/100.png",
    ];

    percentage = 0; // Start mit einer leeren Statusleiste

    constructor() {
        super(); // Rufe den Konstruktor der Basisklasse auf
        this.loadImages(this.IMAGES); // Lade die Bilder
        this.x = 2; // Position der Statusleiste
        this.y = 50; // Position der Statusleiste
        this.width = 190; // Breite anpassen
        this.height = 50; // Höhe anpassen
        this.setPercentage(0); // Initialisiere mit 0%
    }

    setPercentage(percentage) { // Setze den Prozentwert
        this.percentage = percentage;
        let path = this.IMAGES[this.calculateImageIndex()]; // Setze den Bildpfad basierend auf dem Prozentwert
        this.img = this.imageCache[path];
    }

    calculateImageIndex() {
        if (this.percentage >= 100) return 5;
        if (this.percentage >= 80) return 4;
        if (this.percentage >= 60) return 3;
        if (this.percentage >= 40) return 2;
        if (this.percentage >= 20) return 1;
        return 0;
    }

    increasePercentage(amount) { // Erhöhe den Prozentwert
        this.percentage = Math.min(100, this.percentage + amount); // Erhöhe den Prozentwert
        this.setPercentage(this.percentage); // Setze den Prozentwert
    }
}

class EndbossStatusbar extends DrawableObject {
    IMAGES = [
        "img/game_ui/statusbars/statusbar-knight/0.png",
        "img/game_ui/statusbars/statusbar-knight/20.png",
        "img/game_ui/statusbars/statusbar-knight/40.png",
        "img/game_ui/statusbars/statusbar-knight/60.png",
        "img/game_ui/statusbars/statusbar-knight/80.png",
        "img/game_ui/statusbars/statusbar-knight/100.png",
    ];

    constructor() {
        super(this.IMAGES, 0, 0); // Position der Statusleiste
    }
}

class WizardStatusBar extends DrawableObject {
    IMAGES = [
        "img/game_ui/statusbars/statusbar-wizard/0.png",
        "img/game_ui/statusbars/statusbar-wizard/20.png",
        "img/game_ui/statusbars/statusbar-wizard/40.png",
        "img/game_ui/statusbars/statusbar-wizard/60.png",
        "img/game_ui/statusbars/statusbar-wizard/80.png",
        "img/game_ui/statusbars/statusbar-wizard/100.png",
    ];

    constructor() {
        super(10, 10); // Position der Statusleiste
    }
} 
class StatusBarCoins extends DrawableObject{
    static IMAGES = [
        "img/game_ui/statusbars/statusbar-coins/0.png",
        "img/game_ui/statusbars/statusbar-coins/20.png",
        "img/game_ui/statusbars/statusbar-coins/40.png",
        "img/game_ui/statusbars/statusbar-coins/60.png",
        "img/game_ui/statusbars/statusbar-coins/80.png",
        "img/game_ui/statusbars/statusbar-coins/100.png",
    ];

    constructor(maxCoins, x, y) {
        super(maxCoins, x, y, 200, 20);
       // Rufe den Konstruktor der Basisklasse auf
    }
}

