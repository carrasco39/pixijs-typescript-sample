import { BaseStage } from "./baseStage";
import { Sprite, Point } from "pixi.js";
import { instance as Game } from "@core";
import { ParticleStage } from "./particleStage";
import { IconStage } from "./IconStage";
import { CardStage } from "./cardStage";


export class MenuStage extends BaseStage {
    btnIconizer: Sprite;
    btnCard: Sprite;
    btnParticle: Sprite;


    constructor() {
        super();

        var graphics = new PIXI.Graphics();
        
        this.btnCard = new Sprite(PIXI.loader.resources["assets/img/btnCard.png"].texture);
        this.btnCard = new Sprite(PIXI.loader.resources["assets/img/btnParticle.png"].texture);
        this.btnCard = new Sprite(PIXI.loader.resources["assets/img/btnIconizer.png"].texture);
        var screenWidth = Game.app.screen.width;
        var screenHeight = Game.app.screen.height;
        this.btnCard.position = new Point(screenWidth/2 - 200, screenHeight);
        this.btnCard.interactive = true;
        this.btnCard.buttonMode = true;



        this.btnCard.on("pointerdown", () => {
            Game.app.stage = new CardStage();
        });
        this.btnIconizer.on("pointerdown", () => {
            Game.app.stage = new IconStage();
        });
        this.btnParticle.on("pointerdown", () => {
            Game.app.stage = new ParticleStage();
        });
    }
    update() {

    }

}