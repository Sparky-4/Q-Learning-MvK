WINDOW_WIDTH = window.innerWidth;
WINDOW_HEIGHT = window.innerHeight;

VIRTUAL_WIDTH = 1024;
VIRTUAL_HEIGHT = 576;

SCALE_FACTOR_WIDTH = WINDOW_WIDTH / VIRTUAL_WIDTH;
SCALE_FACTOR_HEIGHT = WINDOW_HEIGHT / VIRTUAL_HEIGHT;

JUMP_SPEED = 4*SCALE_FACTOR_HEIGHT;
GRAVITY = .7;
VERSION = 1.2;

// Show every x generations
let showGenerationNum = 50;

// Train x generations before showing initially
let generations = 50;

let mode = 0;
let popSize = 100;
let timeImpact = 0.9;