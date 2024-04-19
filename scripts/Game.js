import {Hero} from "./entities/Hero.js";
import {Stone} from "./entities/Stone.js";
import {ScoreLabel} from "./entities/ScoreLabel.js";
import {RewardNumber} from "./entities/RewardNumber.js";
import {Background} from "./entities/Background.js";

export class Game {
  constructor(app, config) {
    this.app = app;
    this.config = config;

    this.createBackground();
    this.createHero();
    this.createStone();
    this.createScoreUI();

    this.flyingNums = [];

  }

  update() {
    this.hero.update();
    this.flyingNums.forEach(num => num.update());
    this.scores.update()
  }

  createHero() {
    this.hero = new Hero(this.app, this.config);
    this.hero.x = this.app.screen.width / 2 - this.config.sizes.heroWidth / 2;
    this.hero.y = this.app.screen.height - this.config.sizes.heroHeight;
    this.app.stage.addChild(this.hero);
  }

  createStone() {
    this.stone = new Stone(this.app, this.config);
    this.stone.x = this.app.screen.width / 2;
    this.stone.y = this.app.screen.height / 2;
    this.app.stage.addChild(this.stone);


    this.stone.eventMode = 'static';
    this.stone.on('touchstart', (event) => {
      this.config.pointerPos.x = event.global.x - 20;
      this.config.pointerPos.y = event.global.y - 20;

      this.config.score.value += this.config.score.reward;
      this.flyingNums.push(new RewardNumber(this.app, this.config));
      this.flyingNums.forEach(num => this.app.stage.addChild(num));
    });
  }

  createScoreUI() {
    this.scores = new ScoreLabel(this.app, this.config);
    this.app.stage.addChild(this.scores);
  }

  createBackground() {
    this.background = new Background(this.app, this.config);
    this.app.stage.addChild(this.background)
  }
}
