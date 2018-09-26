
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 500},
            debug: false,
            setBounds: false
        }
    },
    scene: [startscreen, Level1]
};


var game = new Phaser.Game(config);
