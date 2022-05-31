import { preload } from "../scenes/preload";
import { MainMenu } from "../scenes/MainMenu";
import { play } from "../scenes/play";
import { retry } from "../scenes/retry";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      min: {
        width: 800,
        height: 600,
      },
      max: {
        width: 1600,
        height: 1200,
      },
    },
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 300 },
        debug: false,
      },
    },
    scene: [preload, MainMenu, play, retry], 
  }
   var game = new Phaser.Game(config);