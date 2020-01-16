import {Item} from "./Item";

export class Catalog {
    items: Item[];

    constructor(items: Item[]) {
        this.items = items;
    }

    push(item: Item) {
        this.items.push(item);
    }
}