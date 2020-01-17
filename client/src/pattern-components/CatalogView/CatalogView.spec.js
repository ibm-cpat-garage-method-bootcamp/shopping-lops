import React from "react";
import { mount } from "enzyme";
import CatalogView from "../CatalogView/CatalogView";
import {
  filterCheckedItems,
  filterUncheckedItems,
  handleCheckToPurchase
} from "../../../shared/catalog-shared";
import "../../setupTests";
import { GroceryStore } from "../../models/GroceryStore";
import { Item } from "../../models/Item";
import { Catalog } from "../../models/Catalog";

let item = {
  id: "banana",
  name: "bacon",
  size: 20,
  comment: "more! 20 pounds Janice!"
};

let addToCatalog = () => {
  state.catalog.push(item);
  return state;
};

let state = {
  catalog: []
};

function getCatalogItems() {
  let items = { id: 1, name: "apples", qty: 1 };

  return items;
}

function addItemToCatalog(item, list) {
  if (item === null) {
    return list;
  }
  if (list === null) {
    list = [];
  }
  if (item.qty === undefined) {
    item.qty = null;
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === item.name) {
      list[i].qty += item.qty;
      return list;
    }
  }
  list.push(item);
  return list;
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

describe("Test suit for adding items to the Catalog", () => {
  it("canary test shows the infrastructure works", () => {
    expect(true).toEqual(true);
  });
  let wrapper;
  beforeEach(() => (wrapper = mount(<CatalogView />)));

  describe("addToCatalog", () => {
    // TODO update this test when given a chance
    it("adding item should be added into state", () => {
      expect(state.catalog.length).toEqual(0);
    });

    it("catalog length should be greater than 0", () => {
      expect(addToCatalog().catalog.length).toBeGreaterThan(0);
    });

    it("adding an item into state should make the catalog length grow", () => {
      let a = state.catalog.length;
      addToCatalog();
      expect(state.catalog.length).toBeGreaterThan(a);
    });

    it("should allow the user to add an item to the catalog", () => {
      let catalogItems = [
        { id: 1, name: "apples", qty: 1, checkToPurchase: false },
        { id: 2, name: "bananas", qty: 10, checkToPurchase: false }
      ];

      let item = { id: 3, name: "bacon", qty: 20, checkToPurchase: false };

      let actualResult = [
        { id: 1, name: "apples", qty: 1, checkToPurchase: false },
        { id: 2, name: "bananas", qty: 10, checkToPurchase: false },
        { id: 3, name: "bacon", qty: 20, checkToPurchase: false }
      ];

      expect(addItemToCatalog(item, catalogItems)).toEqual(actualResult);
    });

    it("should allow the user to increase the qty when a duplicate item exists in the catalog", () => {
      let catalogItems = [
        { id: 1, name: "apples", qty: 1, checkToPurchase: false },
        { id: 2, name: "bananas", qty: 10, checkToPurchase: false }
      ];

      let item = { id: 3, name: "apples", qty: 12, checkToPurchase: false };

      let actualResult = [
        { id: 1, name: "apples", qty: 13, checkToPurchase: false },
        { id: 2, name: "bananas", qty: 10, checkToPurchase: false }
      ];

      expect(addItemToCatalog(item, catalogItems)).toEqual(actualResult);
    });

    it("should not allow user to add null item to list", () => {
      let catalogItems = [
        { id: 1, name: "apples", qty: 1, checkToPurchase: false },
        { id: 2, name: "bananas", qty: 10, checkToPurchase: false }
      ];

      let item = null;

      let actualResult = [
        { id: 1, name: "apples", qty: 1, checkToPurchase: false },
        { id: 2, name: "bananas", qty: 10, checkToPurchase: false }
      ];

      expect(addItemToCatalog(item, catalogItems)).toEqual(actualResult);
    });

    it("should give a list of items when there is no list and the user adds an item", () => {
      let catalogItems = null;

      let item = { id: 3, name: "bacon", qty: 12, checkToPurchase: false };

      let actualResult = [
        { id: 3, name: "bacon", qty: 12, checkToPurchase: false }
      ];
      expect(addItemToCatalog(item, catalogItems)).toEqual(actualResult);
    });

    // TODO ask Product Owner if user can add multiple items at a time to implement test.

    it("should ", () => {
      expect(true).toBe(true);
    });

    it("should give a list of items when there is no list and the user adds an item", () => {
      let apple = new Item("oefhwe83", "apples", 1);
      let banana = new Item("prgh99", "bananas", 10);

      let groceryStore = new GroceryStore("HEB", 12);

      let items = new Catalog([apple, banana]);

      let bacon = new Item("88-kdfjg", "bacon", 12, "I want Bacon!", [
        groceryStore
      ]);

      let actualResult = new Catalog([apple, banana, bacon]);

      expect(addItemToCatalog(bacon, items)).toEqual(actualResult);
    });

    it("should allow the user add an item without a quantity to catalog ", () => {
      let apple = new Item("oefhwe83", "apples", 1);
      let banana = new Item("prgh99", "bananas", 10);

      let items = new Catalog([apple, banana]);

      let groceryStore = new GroceryStore("HEB", 12);

      let bacon = new Item("88-kdfjg", "bacon", undefined, "I want Bacon!", [
        groceryStore
      ]);

      let actualBacon = new Item("88-kdfjg", "bacon", null, "I want Bacon!", [
        groceryStore
      ]);

      let actualResult = new Catalog([apple, banana, actualBacon]);

      expect(addItemToCatalog(bacon, items)).toEqual(actualResult);
    });

    it("should render a <div />", () => {
      expect(wrapper.find(".catalog-form").length).toEqual(1);
    });

    describe("validhandleSubmitClick", () => {
      beforeEach(() =>
        wrapper
          .find("input")
          .at(0)
          .simulate("change", {
            target: { id: "someid", name: "itemName", value: "bacon" }
          })
      );
      beforeEach(() => wrapper.instance().handleSubmitClick(null));

      it("adding item to catalog should make local state catalog greater than 0", () => {
        expect(wrapper.state().catalog.length).toBeGreaterThan(0);
      });

      it("name field needs to be filled before item can be added", () => {
        expect(wrapper.state().catalog[0].name.trim().length).toBeGreaterThan(
          0
        );
      });

      it("thank you paragraph is no longer hidden", () => {
        expect(wrapper.state().message.length).toBeGreaterThan(1);
      });
    });

    describe("nonvalidhandleSubmitClick", () => {
      it("if field name is empty then the form will throw an alert", () => {
        wrapper
          .find("input")
          .at(0)
          .simulate("change", { target: { name: "itemName", value: "" } });
        wrapper.find("button.submitBtn").simulate("click");
        expect(wrapper.state().alert).toEqual(true);
      });
    });
  });
});
