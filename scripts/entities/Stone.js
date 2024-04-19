import {Assets, Container, Graphics, Sprite} from "../../lib/pixi.mjs";

export class Stone extends Container {
  constructor(app, config) {
    super();
    this.app = app;
    this.config = config;

    this.draw();
  }

  async draw() {
    this.view = new Graphics();
    this.view.circle(0, 0, this.config.sizes.stone / 2);
    this.view.fill('#004422');

    const stoneTexture = await Assets.load('assets/stone.png');
    const stonePicture = new Sprite(stoneTexture);
    stonePicture.width = this.config.sizes.stone;
    stonePicture.height = this.config.sizes.stone;
    stonePicture.x = -stonePicture.width / 2;
    stonePicture.y = -stonePicture.height / 2;

    this.addChild(this.view);
    this.addChild(stonePicture);
  }
}
