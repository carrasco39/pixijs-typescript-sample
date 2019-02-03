import { Application, loader, Text } from 'pixi.js';
import 'pixi-layers';
import { IconStage } from '@app/stages/IconStage';
// import { CardStage } from "@app/stages/cardStage";
class Game {
  app: Application;
  fpsText: Text;
  constructor() {
    // instantiate app
    this.app = new Application({
      autoResize: true,
      backgroundColor: 0x1099bb
    }); 
    document.body.appendChild(this.app.view);

    window.addEventListener('resize', this.resize.bind(this));

    loader.add("assets/img/card.png");
    loader.add("assets/img/icons/angry.png");
    loader.add("assets/img/icons/smile.png");
    loader.add("assets/img/icons/love.png");
    

    loader.load(this.setup.bind(this));
    this.resize();
  }

  setup(): void {

    this.fpsText = new PIXI.Text('', { fill: 0xb6f442, fontSize: 14 });
    this.fpsText.x = this.app.screen.left;
    this.fpsText.y = this.app.screen.top;
    var iconStage = new IconStage();
    this.app.stage = iconStage;
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
