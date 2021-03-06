// Enemies our player must avoid
var Enemy = function(iniX, iniY, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = iniX;
    this.y = iniY;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (this.x > 505) {
        this.reset();
    }
    var bugXLeftRange = this.x - 50;
    var bugXRightRange = this.x + 50;
    var bugYTopRange = this.y - 50;
    var bugYBottomRange = this.y + 50;

    if (player.x > bugXLeftRange && player.x < bugXRightRange && player.y > bugYTopRange && player.y < bugYBottomRange) {
        player.resetPlayer();
    }
};

Enemy.prototype.reset = function(){
    this.x = -101;
        this.speed = getRandomSpeed(70, 500);
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var playerx = 200;
var playery = 400;
var Player = function() {
    this.x = playerx;
    this.y = playery;
    this.sprite = "images/char-cat-girl.png";

};

//this is empty because the player will not update itself, it stays at the same position
Player.prototype.update = function() {

};

// Draw the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.resetPlayer = function() {
    this.x = playerx;
    this.y = playery;
};

//the following code handles the input and do proper movement according to the input
//the code also detect if the player is reached at the wall and prevent the player to get out of the wall
Player.prototype.handleInput = function(input) {
    var Horizontal_step = 101;
    var Vertical_step = 83;
    if (input === "up") {
        if (this.y <= 83) {
            this.resetPlayer();
        } else {
            this.y -= Vertical_step;
        }
    }

    if (input === "down") {
        if (this.y >= 400) {
            this.y = this.y;

        } else {
            this.y += Vertical_step;
        }
    }

    if (input === "left") {
        if (this.x <= 34) {
            this.x = this.x;
        } else {
            this.x -= Horizontal_step;
        }
    }

    if (input === "right") {
        if (this.x >= 366) {
            this.x = this.x;
        } else {
            this.x += Horizontal_step;
        }
    }
};
//helper method to get speed within a range
function getRandomSpeed(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];

for (var i = 0; i < 3; i++) {
    var tempSpeed = getRandomSpeed(70, 500);
    allEnemies.push(new Enemy(-101, 60 + 83 * i, tempSpeed));
}

// Place the player object in a variable called player
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});