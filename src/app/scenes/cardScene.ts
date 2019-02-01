import { Container, Point, Texture, ticker} from "pixi.js";
import { Card } from "../components/card";

const NUMOFCARDS = 144;
export class CardScene extends Container { 
    cards: Card[]
    private ticker: ticker.Ticker;
    private cardTexture: Texture;
    constructor() {
        super();
        this.cardTexture = PIXI.loader.resources["assets/img/card.png"].texture;
        this.cards = [];
        this.createCards();
        this.ticker.add(this.update);
    }

    createCards() {
        for (var i = 0; i < NUMOFCARDS; i++) {
            let card = new Card(new Point(0, 0), 0);
            card.texture = this.cardTexture;
            this.cards.push(card); 
            this.addChild(card);
        }
        
    }

    update() {

    }


}