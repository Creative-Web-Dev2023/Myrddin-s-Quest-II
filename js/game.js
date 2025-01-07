let canvas;
let world;
let keyboard = new Keyboard();
let character;

function startGame() {
    document.querySelector(".overlay").style.display = "none";
    document.getElementById("audioSwitcher").classList.remove("hidden");
    document.getElementById("bigScreen").classList.remove("hidden");
    document.getElementById('key-info').classList.add('show');

    document.getElementById("audioSwitcher").setAttribute("onclick", "musicSwitcher()");
    init();
}

function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
    character = world.character;
    gameLoop();
}

function checkOrientation() {
    const rotateElement = document.getElementById('rotate');
    rotateElement.style.display = (window.innerHeight > window.innerWidth && window.innerWidth <= 720) ? 'flex' : 'none';
}
window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);

function handleDescription() {
    const description = document.getElementById("description");
    description.classList.toggle("hidden");
    description.classList.toggle("show");
}

function tryAgain() {
    location.reload();
}

function goBack() {
    const description = document.getElementById("description");
    const impressum = document.getElementById("impressum");
    description.classList.add("hidden");
    impressum.classList.add("hidden");
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        canvas.requestFullscreen().catch(err => {});
    } else {
        document.exitFullscreen();
    }
}

function handleImpressum() {
    const impressum = document.getElementById("impressum");
    impressum.classList.toggle("hidden");
    impressum.classList.toggle("show");
}

window.addEventListener("DOMContentLoaded", () => {
    const bigScreenButton = document.getElementById("bigScreen");
    if (bigScreenButton) {
        bigScreenButton.addEventListener("click", toggleFullscreen);
    } else {
        console.error("Element mit ID 'bigScreen' nicht gefunden.");
    }
});

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) keyboard.RIGHT = true;
    if (e.keyCode == 37) keyboard.LEFT = true;
    if (e.keyCode == 38) {
        keyboard.UP = true;
        character.jump();
    }
    if (e.keyCode == 40) keyboard.DOWN = true;
    if (e.keyCode == 87) keyboard.JUMP = true;
    if (e.code === "KeyA") keyboard.ATTACK = true;
    if (e.code === "KeyS") keyboard.THROW_FIRE = true;
    if (e.code === "KeyD") keyboard.D = true;
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) keyboard.RIGHT = false;
    if (e.keyCode == 37) keyboard.LEFT = false;
    if (e.keyCode == 38) keyboard.UP = false;
    if (e.keyCode == 40) keyboard.DOWN = false;
    if (e.keyCode == 87) keyboard.JUMP = false;
    if (e.code === "KeyA") keyboard.ATTACK = false;
    if (e.code === "KeyS") keyboard.THROW_FIRE = false;
    if (e.code === "KeyD") keyboard.D = false;
});

function gameLoop() {
    world.update();
    world.draw();
    requestAnimationFrame(gameLoop);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("startButton").addEventListener("click", startGame);
});

