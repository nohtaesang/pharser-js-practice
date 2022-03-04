import "./index.css";
import { World } from "matter";
import { Game, Scene } from "phaser";
// import test from "./assets/industrial-zone/3 Objects/0.png";

class PracticeScene extends Scene {
  constructor() {
    super({ key: "PracticeScene" });
  }

  preload() {
    console.log("hihihi");
    console.log(process.env.NODE_ENV);
    // this.load.image("test", test);
  }
  create() {
    // this.add.sprite(400, 300, "test");
  }
}

const gameConfig = {
  width: "100vw",
  height: "100vh",
  scene: [PracticeScene],
};

const game = new Game(gameConfig);
