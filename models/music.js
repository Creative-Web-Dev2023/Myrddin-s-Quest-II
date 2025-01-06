const AUDIO_PATHS = {
    background: 'audio/woodsounds.mp3',
    walking: 'audio/',
    attack: 'audio/wizard_attack.mp3',
    fireAttack: 'audio/fire_attack.mp3',
    throwPoisonBottle: 'audio/throw-poison-bottle.mp3',
    collectPoisonBottle: 'audio/collect_bottle.mp3',
    jump: 'audio/jump.mp3',
    level1: 'audio/woodsounds.mp3',
    level2: 'audio/level2_sound.mp3'
};

let backgroundMusic = new Audio(AUDIO_PATHS.background);
let walkingSound = new Audio(AUDIO_PATHS.walking);
let attackSound = new Audio(AUDIO_PATHS.attack);
let fireAttackSound = new Audio(AUDIO_PATHS.fireAttack);
let throwPoisonBottleSound = new Audio(AUDIO_PATHS.throwPoisonBottle);
let collectPoisonBottleSound = new Audio(AUDIO_PATHS.collectPoisonBottle);
let jumpSound = new Audio(AUDIO_PATHS.jump);
let level1Sound = new Audio(AUDIO_PATHS.level1);
let level2Sound = new Audio(AUDIO_PATHS.level2);
let allSounds = [backgroundMusic, walkingSound, attackSound, fireAttackSound, throwPoisonBottleSound, jumpSound, level1Sound, level2Sound];

function playSound(sound) {
    if (musicIsOn && sound.paused) {
        sound.play();
    }
}

function playWalkingSound() {
    playSound(walkingSound);
}

function playAttackSound() {
    playSound(attackSound);
}

function playFireAttackSound() {
    playSound(fireAttackSound);
}

function playPoisonBottleSound() {
    playSound(throwPoisonBottleSound);
}

function playJumpSound() {
    playSound(jumpSound);
}

function playCollectPoisonBottleSound() {
    playSound(collectPoisonBottleSound);
}
