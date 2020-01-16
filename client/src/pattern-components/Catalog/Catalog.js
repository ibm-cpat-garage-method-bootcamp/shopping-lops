import React, { Component } from "react";
import "./Catalog.scss";

const defaultItems = [
  {
    id: 1,
    name: "apples",
    qty: 1,
    checkToPurchase: false,
    comments: "Honeycrisp"
  },
  {
    id: 2,
    name: "bananas",
    qty: 10,
    checkToPurchase: false,
    comments: "Only organic"
  },
  {
    id: 3,
    name: "beer",
    qty: 6,
    checkToPurchase: false,
    comments: "Franziskaner, Paulaner or BlueMoon"
  },
  {
    id: 4,
    name: "wine",
    qty: 2,
    checkToPurchase: false,
    comments: "Cabernet Sauvignon, Chardonnay, Sauvignon blanc"
  },
  {
    id: 5,
    name: "apples",
    qty: 1,
    checkToPurchase: false,
    comments: "Honeycrisp"
  },
  {
    id: 6,
    name: "bananas",
    qty: 10,
    checkToPurchase: false,
    comments: "Only organic"
  },
  {
    id: 7,
    name: "beer",
    qty: 6,
    checkToPurchase: false,
    comments: "Franziskaner, Paulaner or BlueMoon"
  },
  {
    id: 8,
    name: "wine",
    qty: 2,
    checkToPurchase: false,
    comments: "Cabernet Sauvignon, Chardonnay, Sauvignon blanc"
  },
  {
    id: 9,
    name: "apples",
    qty: 1,
    checkToPurchase: false,
    comments: "Honeycrisp"
  },
  {
    id: 10,
    name: "bananas",
    qty: 10,
    checkToPurchase: false,
    comments: "Only organic"
  },
  {
    id: 11,
    name: "beer",
    qty: 6,
    checkToPurchase: false,
    comments: "Franziskaner, Paulaner or BlueMoon"
  },
  {
    id: 12,
    name: "wine",
    qty: 2,
    checkToPurchase: false,
    comments: "Cabernet Sauvignon, Chardonnay, Sauvignon blanc"
  },
  {
    id: 13,
    name: "apples",
    qty: 1,
    checkToPurchase: false,
    comments: "Honeycrisp"
  },
  {
    id: 14,
    name: "bananas",
    qty: 10,
    checkToPurchase: false,
    comments: "Only organic"
  },
  {
    id: 15,
    name: "beer",
    qty: 6,
    checkToPurchase: false,
    comments: "Franziskaner, Paulaner or BlueMoon"
  },
  {
    id: 16,
    name: "wine",
    qty: 2,
    checkToPurchase: false,
    comments: "Cabernet Sauvignon, Chardonnay, Sauvignon blanc"
  },
  {
    id: 17,
    name: "beer",
    qty: 6,
    checkToPurchase: false,
    comments: "Franziskaner, Paulaner or BlueMoon"
  },
  {
    id: 18,
    name: "wine",
    qty: 2,
    checkToPurchase: false,
    comments: "Cabernet Sauvignon, Chardonnay, Sauvignon blanc"
  }
];

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      catalog: defaultItems
    };
  }

  renderTableData() {
    return this.state.catalog.map(item => {
      return (
        <tr key={item.id}>
          <input
            type="checkbox"
            name={item.name}
            value={item.value}
            onChange={() => {
              this.handleCheckToPurchase(item.id, this.state.catalog);
            }}
          />
          <td>{item.name}</td>
          <td>{item.qty}</td>
          <td>{item.comments}</td>
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
    return (
      <div>
        <p className="header">Catalog</p>
        <table className="catalog">
          <th></th>
          <th>Item</th>
          <th>Quantity</th>
          <th>Comments</th>
          {this.renderTableData()}
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

export default Catalog;
