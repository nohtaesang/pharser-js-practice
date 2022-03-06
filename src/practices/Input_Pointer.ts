import { Scene } from "phaser";
export class Input_Pointer extends Scene {
  constructor() {
    super("Input_Pointer");
  }

  preload() {}
  init() {}
  create() {
    this.input.on("pointerdown", function (pointer) {
      console.log("on, pointerdown");
    });

    this.input.on("pointerup", function (pointer) {
      console.log("on, pointerup");
    });

    this.input.on("pointermove", function (pointer) {
      console.log("on, pointermove");
    });

    this.input.once("pointerdown", function () {
      console.log("once, pointerdown");
    });
    this.input.once("pointerup", function (pointer) {
      console.log("once, pointerup");
    });
  }
  update() {
    const { activePointer } = this.input;
  }
}
