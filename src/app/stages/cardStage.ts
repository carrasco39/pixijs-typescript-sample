import { Point, Texture } from "pixi.js";
import { Card } from "../components/card";
import { instance as Game } from "../../app";

const NUMOFCARDS = 144;
export class CardStage extends PIXI.display.Stage {
    private cardTexture: Texture;
    private deck: PIXI.display.Group;
    private deck2: PIXI.display.Group;
    cards: Card[];
    constructor() {
        super();
        this.cards = [];
        this.cardTexture = PIXI.loader.resources["assets/img/card.png"].texture;
        this.deck = new PIXI.display.Group(0, true);
        this.deck2 = new PIXI.display.Group(1, true);
        this.addChild(new PIXI.display.Layer(this.deck));
        this.addChild(new PIXI.display.Layer(this.deck2));
        Game.app.ticker.add(this.update.bind(this));
        this.createCards();
    }
    async createCards() {
        for (var i = 0; i < NUMOFCARDS; i++) {
            let card = new Card(new Point(Game.app.screen.width / 2 - 0.1 * i - 200, Game.app.screen.height / 2), 0);
            card.texture = this.cardTexture;
            card.zOrder = i;
            card.parentGroup = this.deck;
            this.cards.push(this.addChild(card));
            console.log("adding");
        }
        this.moveCard();
    }
    async moveCard() {
        let cards = this.cards.sort((x, y) => { return y.zOrder - x.zOrder; }) as Card[]; //TODO: check if this works
        for (var i = 0; i <= cards.length; i++) {
            await this.animateCard(cards[i]);
            await this.delay(1);
        }
    }
    async animateCard(card: Card) {
        var limit = card.x + 300;
        while (card.x <= limit) {
            card.x += 2.5;
            if (card.x > limit / 2 + 50) {
                card.parentGroup = this.deck2;
            }
            await this.delay(1 / 60);
        }
    }
    update() {
        this.updateStage();
    }
    async delay(time: number) {
        return new Promise((resolve) => {
            setTimeout(resolve, 1000 * time);
        });
    }
}
