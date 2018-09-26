class StartScreen extends Phaser.Scene {
  constructor() {
    super({
      key: 'startscreen'
    });
  }
  preload() {
    console.log("Start screen");
this.load.image ('ocean', 'assets/ocean2.png');
  }
  create() {
    //background image
   this.add.sprite(0,0, 'ocean').setOrigin(0,0);
    var testText = this.add.text(100,100,'Click to start the game.',{
      fontSize: '32px',
      fill: '#FFF'
    });
    testText.setInteractive()
    testText.on('pointerdown',startGameplay)

  }
  update() {

  }
}
function startGameplay() {
    game.scene.stop('startscreen');
    game.scene.start('Level1');
}
