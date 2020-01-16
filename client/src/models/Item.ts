import {GroceryStore} from "./GroceryStore";

export class Item {
    name: string;
    qty: number;
    comment: string;
    checkToPurchase: boolean;
    groceryStores: GroceryStore[];

    constructor(name: string, qty: number, comment: string, groceryStores: GroceryStore[]) {
        this.name = name;
        this.qty = qty;
        this.comment = comment;
        this.checkToPurchase = false;
        this.groceryStores = groceryStores;
    }
}
