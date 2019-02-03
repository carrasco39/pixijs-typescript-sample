import { Texture, Container, Point, Text, Sprite } from "pixi.js";
import { instance as Game } from "@core";

export class Iconizer extends Container {
    private _text: string;
    private textObjects: Text[];
    private imageObjects: Sprite[];


    constructor(public pack: IconPack = null) {
        super();
        this.pack = pack || this.defaultPack();
        this.textObjects = [];
        this.imageObjects = [];
        this.x = (Game.app.screen.width - this.width) / 2;
        this.y = (Game.app.screen.height - this.height) / 2;
        this.pivot.x = this.width / 2;
        this.pivot.y = this.height / 2;
    }
    set text(text: string) {
        this._text = text;

        this.createTextObjects(text);
    }

    get text(): string {
        return this._text;
    }

    setTextWithOptions(text: string, options?: TextOptions) {
        this.createTextObjects(text, options);
        this._text = text;
    }

    private createTextObjects(text: string, options?: TextOptions): any {
        this.removeChildren();
        var reg = /\:+[+a-z]+\:/g
        var tags = text.match(reg);
        var texts = text.split(reg);
        var position = new Point(-200, 0);
        this.textObjects = [];
        this.imageObjects = [];
        var offset = 5;
        let color: string | number = '#' + Math.floor(Math.random() * 16777215).toString(16);
        let size = 36;
        if (options) {
            color = options.color;
            size = options.fontSize;
        }
        for (var i = 0; i < texts.length; i++) {
            if (texts[i].length > 0) {

                var obj = this.createText(texts[i], position, size, color);
                this.textObjects.push(obj);
                position = new Point(position.x + obj.width + offset, position.y);
                this.addChild(obj);
            }
            if (!tags || tags.length <= i) continue;
            var sprite = this.createSprite(tags[i], position);
            sprite.width = size;
            sprite.height = size;
            position = new Point(position.x + sprite.width + offset, position.y);
            this.imageObjects.push(sprite);
            this.addChild(sprite);
        }
    }
    // private preloadPack() {
    //     if (this.pack) {

    //     }
    // }


    private createText(text: string, position: Point,size: number, color?: number | string) {
        var obj = new Text(text, { fontFamily: 'Arial', fontSize: size, fill: color });
        obj.position = position;
        return obj;
    }

    private createSprite(tag: string, position: Point) {
        var texture = this.pack.icons.find(x => { return x.tag === tag; }).texture;
        var sprite = new Sprite(texture);
        sprite.position = position;
        return sprite;
    }

    private defaultPack(): IconPack {
        return {
            name: "default",
            icons: [
                {
                    tag: ":smile:",
                    texture: PIXI.loader.resources["assets/img/icons/smile.png"].texture
                },
                {
                    tag: ":angry:",
                    texture: PIXI.loader.resources["assets/img/icons/angry.png"].texture
                },
                {
                    tag: ":love:",
                    texture: PIXI.loader.resources["assets/img/icons/love.png"].texture
                }
            ]
        }
    }
}

export type TextOptions = {
    fontSize: number;
    color: number | string;
}

export type IconPack = {
    name: string;
    icons: {
        tag: string,
        texture: Texture;
    }[]
}


// (() => {
//     for()
// })();