import {Container, Graphics, TextStyle, Text} from "../../lib/pixi.mjs";

export class ScoreLabel extends Container {
  constructor(app, config) {
    super();
    this.app = app;
    this.config = config;

    const coin = new Graphics();
    coin.circle(20, 20, this.config.sizes.coin / 2);
    coin.fill('#ffcc00');
    this.addChild(coin);

    const textStyle = new TextStyle(this.config.scoreStyle)
    this.view = new Text({
      text: this.config.score.value,
      style: textStyle
    });

    this.view.x = 10 + this.config.sizes.coin;
    this.view.y = 0;

    this.addChild(this.view);
  }

  update() {
    this.view.text = this.config.score.value;
  }
}
