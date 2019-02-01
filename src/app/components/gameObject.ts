import { Sprite, ticker, Point} from "pixi.js";

export abstract class GameObject extends Sprite {
    protected ticker: ticker.Ticker;
    constructor(
        public position: Point | PIXI.ObservablePoint,
        public rotation: number,
        scale: Point | PIXI.ObservablePoint = new Point(1,1),
        texture?: PIXI.Texture
    ) {
        super(texture);
        this.scale = scale;
        this.start();
        this.ticker = new PIXI.ticker.Ticker().add(this.update);
    }
    public abstract start(): void;
    public abstract update(deltaTime?: number): void;
}