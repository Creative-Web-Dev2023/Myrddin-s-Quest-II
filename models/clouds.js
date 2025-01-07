class Clouds extends MovableObject {
    cloudWidth = 720;
    cloudHeight = 480;
    cloudY = 30;
    cloudSpeed = 0.05 + Math.random() * 0.1; // Initialspeed (0.05 bis 0.15)
    targetSpeed = this.cloudSpeed; // Targetspeed
    initialTransitionSpeed = this.cloudSpeed;
    speedChangeInterval = 60000; // 60 seconds
    transitionDuration = 10000; // 10 seconds
    lastSpeedChange = Date.now();
    transitionStartTime = null;
   

    constructor() {
        super(this.x, this.y, this.width, this.height); // Rufe den Konstruktor der Basisklasse auf
        this.loadImage("img/clouds/full.png"); // Lade ein Bild für die Wolke
        this.x = 480; // Startposition
    }

    move() {
        // Bewegung der Wolke
        this.x -= this.cloudSpeed;
        if (this.x + this.cloudWidth < 0) {
            this.x = 480 + Math.random() * 200; // Neue Position außerhalb des Bildschirms rechts
        }
        this.adjustSpeed();
    }

    adjustSpeed() {
        const now = Date.now();

        // Überprüfe, ob es Zeit ist, die Zielgeschwindigkeit zu ändern
        if (now - this.lastSpeedChange >= this.speedChangeInterval) {
            this.lastSpeedChange = now;
            this.targetSpeed = 0.1 + Math.random() * 0.25; // Neue Zielgeschwindigkeit (0.1 bis 0.35)
            this.transitionStartTime = now;
            this.initialTransitionSpeed = this.cloudSpeed;
        }

        // Wenn wir uns in der Übergangsphase befinden
        if (this.transitionStartTime && now - this.transitionStartTime <= this.transitionDuration) {
            const elapsed = now - this.transitionStartTime;
            const t = elapsed / this.transitionDuration; // Normalisierte Zeit (0 bis 1)
            this.cloudSpeed = this.initialTransitionSpeed + t * (this.targetSpeed - this.initialTransitionSpeed);
        } else if (this.transitionStartTime) {
            // Übergang abgeschlossen
            this.cloudSpeed = this.targetSpeed;
            this.transitionStartTime = null;
        }
    }

}
