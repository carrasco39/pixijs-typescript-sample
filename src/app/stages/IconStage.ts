import { BaseStage } from "./baseStage";
import {words} from "@assets/data/words.ts";
import { Iconizer } from "@app/components/iconizer";
import { delay } from "@app/utils/timer";
export class IconStage extends BaseStage {
    textTTL: number;
    iconizer: Iconizer;
    constructor() {
        super();
        this.textTTL = 2;
        this.initializeStage();
    }

    initializeStage() {
        this.iconizer = new Iconizer();
        this.addChild(this.iconizer);
        this.changeText();
    }

    async changeText() {
        var phrase = this.cosntructPhrase();
        this.iconizer.setTextWithOptions(phrase, {
            fontSize: Math.floor(Math.random() * 40) + 16,
            color: "#00000"
        });
        await delay(this.textTTL);
        this.changeText();
    }

    update() {}

    cosntructPhrase() {
        let text = "";
        for (let i = 0; i < 4; i++) {
            let r = Math.floor(Math.random() * 10);
            if (r % 2 == 0) {
                let length = this.iconizer.pack.icons.length;
                let packRnd = Math.floor(Math.random() * length);
                text += " " + this.iconizer.pack.icons[packRnd].tag;
                continue;
            }
            let length = words.length;
            let w1Rnd = Math.floor(Math.random() * length);
            length = words[w1Rnd].length;
            let w2Rnd = Math.floor(Math.random() * length);
            text += " " + words[w1Rnd][w2Rnd];  
        }
        return text;
    }
}