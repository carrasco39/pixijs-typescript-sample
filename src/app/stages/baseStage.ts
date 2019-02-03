import { instance as Game } from "@core";
import { Sprite, Point } from "pixi.js";
import { MenuStage } from "./menuStage";

export abstract class BaseStage extends PIXI.display.Stage {
    btnBack: Sprite;
    constructor() {
        super();
        Game.app.ticker.add(this.update.bind(this));

        this.btnBack = new Sprite(PIXI.loader.resources["assets/img/btnBack.png"].texture);
        this.btnBack.pivot = new Point(0.5, 0.5);
        this.btnBack.position = new Point(Game.app.screen.right - this.btnBack.width - 10, Game.app.screen.top + this.btnBack.height / 2);
        this.btnBack.interactive = true;
        this.btnBack.buttonMode = true;
        this.btnBack.on("pointerdown", () => {
            Game.app.stage = new MenuStage();
        });
    }

    abstract update(deltaTime?: number): any;
}