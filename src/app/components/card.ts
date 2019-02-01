import { GameObject } from "./gameObject";


export class Card extends GameObject {
    
    public start(): void {
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
    }
    
    public update(): void {}
}