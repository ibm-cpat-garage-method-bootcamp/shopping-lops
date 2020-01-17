import { GroceryStore } from "./GroceryStore";

export class Item {
  id: string;
  name: string;
  qty: number;
  comment: string;
  checkToPurchase: boolean;
  groceryStores: GroceryStore[];

  constructor(
    id: string,
    name: string,
    qty: number,
    comment: string,
    groceryStores: GroceryStore[]
  ) {
    this.id = id;
    this.name = name;
    this.qty = qty;
    this.comment = comment;
    this.checkToPurchase = false;
    this.groceryStores = groceryStores;
  }
}
