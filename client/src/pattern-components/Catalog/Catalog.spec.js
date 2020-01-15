import {filterCheckedItems, filterUncheckedItems, handleCheckToPurchase} from "../../../shared/catalog-shared";

function getCatalogItems() {
  let items = { id: 1, name: "apples", qty: 1 };

  return items;
}

describe("Catalog Component", () => {
  test("canary test shows the infrastructure works for catalog", () => {
    expect(true).toBe(true);
  });

  test("mockCatalog returns a catalog of items", () => {
    let dummyCatalogItems = { id: 1, name: "apples", qty: 1 };
    expect(getCatalogItems()).toEqual(dummyCatalogItems);
  });

  test("should allow user to select apples to purchase", () => {
    let catalogItems = [
      { id: 1, name: "apples", qty: 1, checkToPurchase: false },
      { id: 2, name: "bananas", qty: 10, checkToPurchase: false }
    ];
    let resultItemsCatalog = [
      { id: 1, name: "apples", qty: 1, checkToPurchase: true },
      { id: 2, name: "bananas", qty: 10, checkToPurchase: false }
    ];
    expect(handleCheckToPurchase(1, catalogItems)).toEqual(resultItemsCatalog);
  });

  test("should allow user to unselect apples to purchase", () => {
    let catalogItems = [
      { id: 1, name: "apples", qty: 1, checkToPurchase: true },
      { id: 2, name: "bananas", qty: 10, checkToPurchase: false }
    ];
    let resultItemsCatalog = [
      { id: 1, name: "apples", qty: 1, checkToPurchase: false },
      { id: 2, name: "bananas", qty: 10, checkToPurchase: false }
    ];
    expect(handleCheckToPurchase(1, catalogItems)).toEqual(resultItemsCatalog);
  });

  test("should filter catalog based on checked (toPurchase = true) items", () => {
    let catalogItems = [
      { id: 1, name: "apples", qty: 1, checkToPurchase: true },
      { id: 2, name: "bananas", qty: 10, checkToPurchase: false },
      { id: 3, name: "beer", qty: 6, checkToPurchase: true },
      { id: 4, name: "wine", qty: 2, checkToPurchase: true }
    ];

    let resultFilteredItems = [
      { id: 1, name: "apples", qty: 1, checkToPurchase: true },
      { id: 3, name: "beer", qty: 6, checkToPurchase: true },
      { id: 4, name: "wine", qty: 2, checkToPurchase: true }
    ];
    expect(filterCheckedItems(catalogItems)).toEqual(resultFilteredItems);
  });

  test("should filter catalog based on unchecked (toPurchase = false) items", () => {
    let catalogItems = [
      { id: 1, name: "apples", qty: 1, checkToPurchase: false },
      { id: 2, name: "bananas", qty: 10, checkToPurchase: false },
      { id: 3, name: "beer", qty: 6, checkToPurchase: true },
      { id: 4, name: "wine", qty: 2, checkToPurchase: true }
    ];

    let resultFilteredItems = [
      { id: 1, name: "apples", qty: 1, checkToPurchase: false },
      { id: 2, name: "bananas", qty: 10, checkToPurchase: false }
    ];
    expect(filterUncheckedItems(catalogItems)).toEqual(resultFilteredItems);
  });
});
