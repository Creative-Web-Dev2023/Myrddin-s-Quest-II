let cannvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
    ctx = canvas.getContext("2d");
}

// Event listener for key presses

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
      keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
      keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
      keyboard.UP = true;
    }
    if (e.keyCode == 40) {
      keyboard.DOWN = true;
    }
    if (e.keyCode == 87) {
      keyboard.JUMP = true;
    }
    if (e.code === "KeyA") {
      keyboard.ATTACK = true; // Attack key
    }
    if (e.code === "KeyS") {
      keyboard.THROW_FIRE = true; // Fire animation key
  
    }
    if (e.code === "KeyD") {
      keyboard.D = true; // D key
      
    }
  });
  
  // Event listener for key releases
  window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
      keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
      keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
      keyboard.UP = false;
    }
    if (e.keyCode == 40) {
      keyboard.DOWN = false;
    }
    if (e.keyCode == 87) {
      keyboard.JUMP = false; // Release jump key
    }
    if (e.code === "KeyA") {
      keyboard.ATTACK = false; // Release attack key
    }
    if (e.code === "KeyS") {
      keyboard.THROW_FIRE = false; // Release fire animation key
  
    }
    if (e.code === "KeyD") {
      keyboard.D = false; // Release D key
    }
  });
  
