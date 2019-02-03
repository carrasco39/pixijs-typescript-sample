import { instance as Game } from "@core";

export abstract class BaseStage extends PIXI.display.Stage {
    constructor() {
        super();
        Game.app.ticker.add(this.update.bind(this));
    }

    abstract update(deltaTime?: number): any;
}