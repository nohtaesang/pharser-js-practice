import { Scene } from "phaser";

export class Scene_CreateScene extends Scene {
  constructor() {
    super("Scene_CreateScene");
  }
  preload() {
    console.log("main preload");
  }
  init() {
    console.log("main init");
  }
  create() {
    console.log("main crate");
  }
  update() {}
}
