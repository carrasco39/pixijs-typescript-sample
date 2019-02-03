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
       
        this.btnCard = new Sprite(PIXI.loader.resources["assets/img/btnCard.png"].texture);
        this.btnParticle = new Sprite(PIXI.loader.resources["assets/img/btnParticle.png"].texture);
        this.btnIconizer = new Sprite(PIXI.loader.resources["assets/img/btnIconizer.png"].texture);
        var screenWidth = Game.app.screen.width;
        var screenHeight = Game.app.screen.height;

        //this.btnIconizer.scale.x /= 2;
        //this.btnIconizer.scale.y /= 2;

        var offset = 20;
        this.btnIconizer.position = new Point(screenWidth/2 - this.btnIconizer.width - offset, screenHeight/2);
        this.btnIconizer.interactive = true;
        this.btnIconizer.buttonMode = true;
        
        //this.btnCard.scale.x /= 2;
        //this.btnCard.scale.y /= 2;
        this.btnCard.position = new Point(screenWidth/2, screenHeight/2);
        this.btnCard.interactive = true;
        this.btnCard.buttonMode = true;
        
        //this.btnParticle.scale.x /= 2;
        //this.btnParticle.scale.y /= 2;
        this.btnParticle.position = new Point(screenWidth/2 + this.btnParticle.width + offset, screenHeight/2);
        this.btnParticle.interactive = true;
        this.btnParticle.buttonMode = true;



        this.btnCard.on("pointerdown", () => {
            Game.app.stage = new CardStage();
        });
        this.btnIconizer.on("pointerdown", () => {
            Game.app.stage = new IconStage();
        });
        this.btnParticle.on("pointerdown", () => {
            Game.app.stage = new ParticleStage();
        });

        this.addChild(this.btnParticle, this.btnCard, this.btnIconizer);
    }
    update() {

    }

}