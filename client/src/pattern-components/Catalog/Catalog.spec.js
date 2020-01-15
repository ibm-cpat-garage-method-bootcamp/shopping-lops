import {Catalog} from "../../models/Catalog";

function getCatalogItems() {
    let items = { id: 1, name: 'apples', qty: 1 };

    return items;
}

function handleCheckToPurchase(id) {
    let items = [
        { id: 1, name: 'apples', qty: 1, checkToPurchase: false },
        { id: 2, name: 'bananas', qty: 10, checkToPurchase: false },
        ];
    console.log(items);
    for (let i = 0; i < items.length; i++) {
        let currItem = items[i];
        console.log(currItem.id);
        if (currItem.id === id) {
            currItem.checkToPurchase = true;
        }
    }
    console.log(items);
    return items;
}


describe('Catalog', () => {
    test('canary test shows the infrastructure works for catalog', () => {
        expect(true).toBe(true);
    });

    test('mockCatalog returns a catalog of items ', () => {
        let dummyCatalogItems = { id: 1, name: 'apples', qty: 1 };
        expect(getCatalogItems()).toEqual(dummyCatalogItems);
    });

    test('should allow user to select apples to purchase ', () => {
        let dummyCatalogItems = [
            { id: 1, name: 'apples', qty: 1, checkToPurchase: false },
            { id: 2, name: 'bananas', qty: 10, checkToPurchase: true },
        ];
        expect(handleCheckToPurchase(2)).toEqual(dummyCatalogItems);
    });
});


