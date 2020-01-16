import {GroceryStore} from "./GroceryStore";

export class Item {
    name: string;
    qty: number;
    checkToPurchase: boolean;
    groceryStores: GroceryStore[];

    constructor(name: string, qty: number, groceryStores: GroceryStore[]) {
        this.name = name;
        this.qty = qty;
        this.checkToPurchase = false;
        this.groceryStores = groceryStores;
    }
}