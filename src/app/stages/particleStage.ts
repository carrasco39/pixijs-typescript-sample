import { BaseStage } from "./baseStage";
import { instance as Game } from "@core";
import { FX, ParticleEmitter } from "revolt-fx";
export class ParticleStage extends BaseStage {
    private candleFX: FX;
    //private canEmit: boolean;
    private emitter: ParticleEmitter;
    constructor() {
        super();
        this.addChild(this.btnBack);
        this.candleFX = new FX();
        this.init();
    }

    async init() {
        PIXI.loader
            .add('fx_settings', 'assets/particles/fire/fire.json')
            .add('fx_spritesheet', 'assets/particles/fire/revoltfx-spritesheet.json')
            .load((loaders: PIXI.loaders.Loader,resources: PIXI.loaders.ResourceDictionary) => {
                console.log(loaders.baseUrl);
                this.candleFX.initBundle(resources.fx_settings.data);
                this.emitter = this.candleFX.getParticleEmitter("fire_candle");
                this.emitter.init(this, false, 1);
                this.emitter.start();
                this.emitter.infinite = true;
                this.emitter.x = Game.app.screen.width / 2;
                this.emitter.y = Game.app.screen.height / 2;
            });

       
    }

    update() {
        if (!this.emitter) return;
        this.candleFX.update();
    }

}