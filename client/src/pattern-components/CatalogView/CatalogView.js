import React, { Component } from "react";
import { Item } from "../../models/Item.ts";
import { GroceryStore } from "../../models/GroceryStore.ts";
import "./CatalogView.scss";

const defaultItems = [
  {
    id: 1,
    name: "apples",
    qty: 1,
    checkToPurchase: false,
    comment: "Honeycrisp",
    groceryStore: []
  },
  {
    id: 2,
    name: "bananas",
    qty: 10,
    checkToPurchase: false,
    comment: "Only organic",
    groceryStore: []
  },
  {
    id: 3,
    name: "beer",
    qty: 6,
    checkToPurchase: false,
    comment: "Franziskaner, Paulaner or BlueMoon",
    groceryStore: []
  },
  {
    id: 4,
    name: "wine",
    qty: 2,
    checkToPurchase: false,
    comment: "Cabernet Sauvignon, Chardonnay, Sauvignon blanc",
    groceryStore: []
  }
];

class CatalogView extends Component {
  constructor() {
    super();
    this.state = {
      catalog: defaultItems,
      alert: false,
      storeCount: 0
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      message: ""
    });
  };

  handleSubmitClick = async (e) => {
    if (e !== null) {
      e.preventDefault();
    }

    if (this.state.itemName === undefined || this.state.itemName.trim().length === 0) {
      await this.setState({
        alert: true
      });
    }

    if (this.state.alert) {
      this.setState({
        message: "Please enter an item name!"
      });
    } else {
      let updatedCatalog = this.state.catalog;
      let stores = [];

      for (let i = 0; i < this.state.storeCount; i++) {
        const storeKey = "store" + i;
        const aisleKey = "aisle" + i;
        const storeName = this.state[storeKey];
        const aisleName = this.state[aisleKey];
        let store = new GroceryStore(storeName, aisleName);
        stores.push(store);
      }

      const item = new Item(
        this.generateRandomNum(),
        this.state.itemName,
        this.state.itemQuantity,
        this.state.itemComment,
        stores
      );

      updatedCatalog.push(item);
      return this.setState({
        updatedCatalog,
        message: "Thank you for submitting an item"
      });
    }
  };

  handleAddStoreClick = async e => {
    e.preventDefault();
    await this.setState({
      storeCount: this.state.storeCount + 1
    });
  };

  generateRandomNum() {
    return Math.random();
  }

  renderTableData() {
    return this.state.catalog.map(item => {
      return (
        <tr key={item.id}>
          <td>
            <input
              type="checkbox"
              name={item.name}
              value={item.value}
              onChange={() => {
                this.handleCheckToPurchase(item.id, this.state.catalog);
              }}
            />
          </td>
          <td>{item.name}</td>
          <td>{item.qty}</td>
          <td>{item.comment}</td>
        </tr>
      );
    });
  }

  handleCheckToPurchase(id, catalogItems) {
    for (let i = 0; i < catalogItems.length; i++) {
      let currItem = catalogItems[i];
      if (currItem.id === id) {
        currItem.checkToPurchase = !currItem.checkToPurchase;
      }
    }
    return catalogItems;
  }

  filterCheckedItems() {
    let catalogItems = this.state.catalog;
    let filteredItems = catalogItems.filter(item => {
      return item.checkToPurchase === true;
    });
    this.updateCatalog(filteredItems);
    return filteredItems;
  }

  updateCatalog(newCatalogItems) {
    this.setState({ catalog: newCatalogItems });
  }

  render() {
    let groceryStoreInputs = [];
    for (let i = 0; i < this.state.storeCount; i++) {
      groceryStoreInputs.push(
        <div className="grocery-form">
          <label>Store Name: </label>
          <input
            name={`store${i}`}
            type="text"
            onChange={e => this.handleInputChange(e)}
          />
          <label className="aisle-label">Aisle #: </label>
          <input
            className="aisle-input"
            name={`aisle${i}`}
            type="text"
            onChange={e => this.handleInputChange(e)}
          />
        </div>
      );
    }

    return (
      <div>
        <div className="catalog-form">
          <form>
            <div>
              <label>Item Name: </label>
              <input
                name="itemName"
                type="text"
                onChange={e => this.handleInputChange(e)}
              />
            </div>
            <div>
              <label>Item Quantity: </label>
              <input
                name="itemQuantity"
                type="text"
                onChange={e => this.handleInputChange(e)}
              />
            </div>
            <div>
              <label>Comment: </label>
              <input
                name="itemComment"
                type="text"
                onChange={e => this.handleInputChange(e)}
              />
            </div>

            {groceryStoreInputs}

            <div>
              <button
                className="submitBtn"
                onClick={e => this.handleSubmitClick(e)}
              >
                Submit
              </button>
              <button onClick={e => this.handleAddStoreClick(e)}>
                Add Store
              </button>
            </div>
          </form>
          <p>{this.state.message}</p>
        </div>
        <br />
        <p className="header">Catalog</p>
        <table className="catalog">
          <tbody>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Comments</th>
          </tr>
          {this.renderTableData()}
          </tbody>
        </table>
        <br />
        <button
          className="button"
          onClick={() => {
            this.filterCheckedItems();
          }}
        >
          View items to buy
        </button>
      </div>
    );
  }
}

export default CatalogView;
