window.onload = function() {
  var config = {
  width: 256,
  height: 272,
  backgroundColor: '#007236',
  scene: [scene1, scene2],
  pixelArt: true
  }
  console.log("Hey everyone I love you all\n" , "Your config settings:", config);
  var game = new Phaser.Game(config);
}
