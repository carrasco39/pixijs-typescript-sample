import { Application, loader, Text } from 'pixi.js';
import 'pixi-layers';
import { CardScene } from '@app/scenes/cardScene';
class Game {
  app: Application;
  fpsText: Text;
  constructor() {
    // instantiate app
    this.app = new Application({
      autoResize: true,
      width: window.innerWidth,
      height: window.innerHeight,
      resolution: devicePixelRatio,
      backgroundColor: 0x1099bb
    }); 
    document.body.appendChild(this.app.view);

    window.addEventListener('resize', this.resize.bind(this));

    loader.add("assets/img/card.png");

    loader.load(this.setup.bind(this));
  }

  setup(): void {

    this.fpsText = new PIXI.Text('oi', { fill: 0xb6f442, fontSize: 14 });
    this.fpsText.x = this.app.screen.left;
    this.fpsText.y = this.app.screen.top;
    this.app.stage = new CardScene();
    this.app.stage.addChild(this.fpsText);
    this.app.ticker.add(this.update.bind(this));
  }


  resize() {
    this.app.renderer.resize(window.innerWidth, window.innerHeight);
  }
  update() {
    this.fpsText.text = "FPS: " + this.app.ticker.FPS.toFixed(2);
  }
}

export const instance = new Game();
