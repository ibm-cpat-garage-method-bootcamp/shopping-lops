
export function handleCheckToPurchase(id, catalogItems) {
    for (let i = 0; i < catalogItems.length; i++) {
        let currItem = catalogItems[i];
        console.log(currItem.id);
        if (currItem.id === id) {
            currItem.checkToPurchase = !currItem.checkToPurchase;
        }
    }
    return catalogItems;
}

export function filterCheckedItems(catalogItems) {
    let filteredItems = catalogItems.filter(item => {
        return item.checkToPurchase === true;
    });
    return filteredItems;
}

export function filterUncheckedItems(catalogItems) {
    let filteredItems = catalogItems.filter(item => {
        return item.checkToPurchase === false;
    });
    return filteredItems;
}
