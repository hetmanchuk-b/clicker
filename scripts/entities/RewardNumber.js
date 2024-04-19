import {Container, Text, TextStyle} from "../../lib/pixi.mjs";

export class RewardNumber extends Container {
  constructor(app, config) {
    super();
    this.app = app;
    this.config = config;

    const textStyle = new TextStyle(this.config.scoreStyle)
    this.view = new Text({
      text: `+${this.config.score.reward}`,
      style: textStyle,
    });
    this.view.x = this.config.pointerPos.x;
    this.view.y = this.config.pointerPos.y;

    this.addChild(this.view);
  }

  update() {
    this.view.y -= this.config.rewardsSpeed;

    if (this.view.y <= -50) this.destroy();
  }

}
