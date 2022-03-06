import "./index.css";
import { Game, Scene } from "phaser";
import { Scene_CreateScene } from "./practices/Scene_CreateScene";
import { Input_Pointer } from "./practices/Input_Pointer";
import { Animation_Spritesheet } from "./practices/Animation_Spritesheet";

class MainScene extends Scene {
  constructor() {
    super("MainScene");
  }

  preload() {}
  init() {}
  create() {
    const { scene } = this;
    this.input.on("pointerdown", function (pointer) {
      // scene.start("Input_Pointer");
    });
  }
  update() {}
}

const gameConfig = {
  width: "100vw",
  height: "100vh",
  scene: [Animation_Spritesheet, MainScene, Scene_CreateScene, Input_Pointer],
};

const game = new Game(gameConfig);
