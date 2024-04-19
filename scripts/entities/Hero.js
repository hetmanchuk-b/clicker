import {Container, Graphics} from "../../lib/pixi.mjs";

export class Hero extends Container {
  constructor(app, config) {
    super();
    this.app = app;
    this.config = config;

    const view = new Graphics();
    view.rect(0, 0, this.config.sizes.heroWidth, this.config.sizes.heroHeight);
    view.fill('#fff');

    this.addChild(view)
  }

  update() {}
}
