import { Container, Point, Texture} from "pixi.js";
import { Card } from "../components/card";
import { instance as Game } from "../../app";

const NUMOFCARDS = 144;
export class CardScene extends Container { 
    cards: Card[]
    private cardTexture: Texture;
    constructor() {
        super();
        this.cardTexture = PIXI.loader.resources["assets/img/card.png"].texture;
        this.cards = [];
        Game.app.ticker.add(this.update.bind(this));
        this.createCards();
    }

    createCards() {
        for (var i = 0; i < NUMOFCARDS; i++) {
            let card = new Card(new Point(Game.app.screen.width/2 + 0.1 * i - 200, Game.app.screen.height/2), 0);
            card.texture = this.cardTexture;
            this.cards.push(card); 
            this.addChild(card);
        }
        
    }

    async moveCard() {
    }

    update() {

    }


}