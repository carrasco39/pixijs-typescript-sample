import { Application, loader } from 'pixi.js';
import { CardScene } from '@app/scenes/cardScene';

class Game {
  private app: Application;
  cardScene: CardScene;
  constructor() {
    // instantiate app
    this.app = new Application({
      autoResize: true,
      resolution: devicePixelRatio,
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0x1099bb 
    });

    document.body.appendChild(this.app.view);

    window.addEventListener('resize', this.resize.bind(this));

    loader.add("assets/img/card.png");

    loader.load(this.setup.bind(this));
  }

  setup(): void {
    this.cardScene = new CardScene();

    this.app.stage = this.cardScene;
    this.app.ticker.add(() => {
    });
  }


  resize() {
    this.app.renderer.resize(window.innerWidth, window.innerHeight);
  }
}

export const instance = new Game();
