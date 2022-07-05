class scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }
  create(){
    //this.background = this.add.image(0,0,"background");
    //this.background.setOrigin(0,0);

    this.residentialSprite = this.add.image(this.game.config.width/2 - 50, this.game.config.height/2, "residentialSprite");
    this.commercialSprite = this.add.image(this.game.config.width/2, this.game.config.height/2, "commercialSprite");
    this.industrialSprite = this.add.image(this.game.config.width/2 + 50, this.game.config.height/2, "industrialSprite");
    this.residentialSprite.setScale(5);
    this.add.text(20,20,"Playing game"), {
      font: "25px Arial",
      fill: "yellow"
    };
  }
  update(){
    this.setPosition(this.residentialSprite,this.randomInt(0,270),this.randomInt(0,270));
    this.moveShip(this.industrialSprite, 5,"x");
    //this.moveShip(this.industrialSprite, 5,y);
  }

  moveShip(entity, speed, xy) {
    if (xy == "x") {
      entity.x += speed;
    } else if (xy == "y") {
      entity.y += speed;
    } else {
      console.log("Error: xy input isn't x or y");
    }
  }
  setPosition(thisEntity, x, y){
    thisEntity.x = x;
    thisEntity.y = y;
  }
  randomInt(min, max){
    return Phaser.Math.Between(min, max);
  }
}

//this.OBJECT.setScale(5);
