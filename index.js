import * as PIXI from './lib/pixi.mjs';
import {Game} from "./scripts/Game.js";
import {Config} from "./scripts/Config.js";

const app = new PIXI.Application();
await app.init({antialias: true, resizeTo: window});

const game = new Game(app, Config);
app.ticker.add(game.update, game);

document.body.appendChild(app.canvas);


