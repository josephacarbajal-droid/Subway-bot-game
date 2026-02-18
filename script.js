// script.js

// Game Configuration
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game Variables
let player;
let obstacles = [];
let score = 0;
let gameOver = false;

// Player Class
class Player {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height - 50;
        this.width = 30;
        this.height = 30;
        this.speed = 5;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    jump() {
        // Jump logic (simple placeholder)
        this.y -= 50;
        setTimeout(() => this.y += 50, 500); // Gravity returns the player after half a second
    }

    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// Obstacle Class
class Obstacle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// Bot AI
class Bot {
    constructor() {
        this.x = canvas.width / 4;
        this.y = canvas.height - 50;
        this.width = 30;
        this.height = 30;
    }

    autoPlay() {
        // Simple AI logic: move left or right randomly
        if (Math.random() < 0.5) {
            this.x += 5;
        } else {
            this.x -= 5;
        }
        
        // Simulate jumping
        if (Math.random() < 0.2) {
            this.jump();
        }
    }

    jump() {
        this.y -= 50;
        setTimeout(() => this.y += 50, 500); // Return to ground
    }

    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// Initialize Game
function init() {
    player = new Player();
    obstacles.push(new Obstacle(100, canvas.height - 30));
    obstacles.push(new Obstacle(200, canvas.height - 30));
    requestAnimationFrame(gameLoop);
}

// Game Loop
function gameLoop() {
    if (gameOver) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
    obstacles.forEach(obstacle => obstacle.draw());
    
    // Update Bot
    const bot = new Bot();
    bot.autoPlay();
    bot.draw();

    // Collision Detection
    // ... (Handle collision logic here)

    requestAnimationFrame(gameLoop);
}

// Start the Game
init();