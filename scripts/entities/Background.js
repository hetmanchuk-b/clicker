import {Assets, Container, Sprite} from "../../lib/pixi.mjs";

export class Background extends Container {

  constructor(app, config) {
    super();

    this.app = app;
    this.config = config;

    this.draw();
  }

  async draw() {
    const texture = await Assets.load('assets/bg.png');
    this.view = new Sprite(texture);
    this.view.width = 32;
    this.view.height = 32;

    const rows = Math.ceil(this.app.screen.width / this.view.width);
    const cols = Math.ceil(this.app.screen.height / this.view.height);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const bg = new Sprite(texture);
        bg.x = this.view.width * j;
        bg.y = this.view.height * i;
        this.addChild(bg)
      }
    }
  }
}
