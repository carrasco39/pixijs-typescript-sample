import { Sprite } from "pixi.js";

export class Card extends Sprite {
    public start(): void {
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
    }
}