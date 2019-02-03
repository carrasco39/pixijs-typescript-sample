import { Point, Texture } from "pixi.js";
import { Card } from "../components/card";
import { instance as Game } from "../../app";
import { BaseStage } from "./baseStage";
import { delay } from "@app/utils/timer";

const NUMOFCARDS = 144;
export class CardStage extends BaseStage {
    private cardTexture: Texture;
    private deck: PIXI.display.Group;
    private deck2: PIXI.display.Group;
    cards: Card[];
    constructor() {
        super();
        this.addChild(this.btnBack);
        this.cards = [];
        this.cardTexture = PIXI.loader.resources["assets/img/card.png"].texture;
        this.deck = new PIXI.display.Group(0, true);
        this.deck2 = new PIXI.display.Group(1, true);
        this.addChild(new PIXI.display.Layer(this.deck));
        this.addChild(new PIXI.display.Layer(this.deck2));
        this.createCards();
    }
    async createCards() {
        for (var i = 0; i < NUMOFCARDS; i++) {
            let card = new Card(this.cardTexture);
            card.position = new Point(Game.app.screen.width / 2 - 0.1 * i - 200, Game.app.screen.height / 2);
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
            await delay(1);
        }
    }
    async animateCard(card: Card) {
        var limit = card.x + 300;
        while (card.x <= limit) {
            if (card.x > limit / 2 + 50) {
                card.parentGroup = this.deck2;
            }
            card.x += 2.5;
            await delay(1 / 60);
        }
    }
    update() {
    }
    
    
}
