import { Scene } from "phaser";
import mummy from "../assets/mummy37x45.png";
import card from "../assets/industrial-zone/4 Animated objects/Card.png";

export class Animation_Spritesheet extends Scene {
  constructor() {
    super("Animation_Spritesheet");
  }

  preload() {
    this.load.spritesheet("mummy", mummy, {
      frameWidth: 37,
      frameHeight: 45,
      endFrame: 18,
    });

    this.load.spritesheet("card", card, {
      frameWidth: 24,
      frameHeight: 24,
      endFrame: 8,
    });
  }
  init() {}
  create() {
    // mummy
    this.anims.create({
      key: "mummyAnimation",
      frames: this.anims.generateFrameNames("mummy", { start: 0, end: 17 }),
      frameRate: 20,
      repeat: -1,
    });

    this.add.sprite(50, 50, "mummy").play("mummyAnimation");

    // card
    this.anims.create({
      key: "cardAnimation",
      frames: this.anims.generateFrameNames("card", { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });

    this.add.sprite(50, 100, "card").play("cardAnimation");
  }
  update() {}
}
