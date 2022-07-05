class scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload(){
    //this.load.image("background", "assets/images/background.png");
    this.load.image("residentialSprite", "assets/images/residentialSprite.png");
    this.load.image("commercialSprite", "assets/images/commercialSprite.png");
    this.load.image("industrialSprite", "assets/images/industrialSprite.png");
  }
  create() {
    this.add.text(50, 50, "Loading game...");
    this.scene.start("playGame");
  }

}



//init() pepares data
//preload() load music and images to memory
//create() add objects to game
//update() runs on an infinite loop
//this.add.text
//this.add.image(x,y,"defined name")
//this.load.image("define". "path/to/loacation")
