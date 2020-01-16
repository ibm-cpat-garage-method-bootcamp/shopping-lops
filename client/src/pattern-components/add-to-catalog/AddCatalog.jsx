import React, { Component } from "react";
import { GroceryStore } from "../../models/GroceryStore.ts";
import { Item } from "../../models/Item.ts";
import { Catalog } from "../../models/Catalog.ts";

class AddToCatalog extends Component {
  constructor() {
    super()
    this.state = {
      catalog: new Catalog([]),
      alert: false,
      storeCount: 0,
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      message: '',
    })
  };

  handleSubmitClick = (e) => {
    if(e !== null) {
      e.preventDefault();
    }

    if(this.state.itemName.trim().length === 0){
      this.setState({
        alert:true
      })
    }
    if(this.state.alert) {
      this.setState({
        message: "Please enter an item name!",
      })
    } else {
      let updatedCatalog = this.state.catalog;
      const item = new Item (this.state.itemName, this.state.itemQuantity, this.state.itemComment)
      updatedCatalog.push(item);
      return this.setState({
        updatedCatalog,
        message: 'Thank you for submitting an item',
      })
    }
  }

  handleAddStoreClick = async (e) => {
    e.preventDefault();
    await this.setState({
      storeCount: this.state.storeCount + 1,
    })
    console.log(this.state.storeCount)
  }


  render() {
    let groceryStoreInputs = [];
    for (let i = 0; i < this.state.storeCount; i++) {
      groceryStoreInputs.push(
        <div>
          <label>Grocery Store Name: </label>
          <input name="itemQuantity" type="text" onChange={(e) => this.handleInputChange(e)} />
          <label>Aisle Number: </label>
          <input name="itemComment" type="text" onChange={(e) => this.handleInputChange(e)} />
        </div>
      )
    }


    return (
      <div className="awesomeDiv">
        <form >
          <label>Item Name: </label>
          <input name="itemName" type="text" onChange={(e) => this.handleInputChange(e)} />
          <label>Item Quantity: </label>
          <input name="itemQuantity" type="text" onChange={(e) => this.handleInputChange(e)} />
          <label>Comment: </label>
          <input name="itemComment" type="text" onChange={(e) => this.handleInputChange(e)} />
          <button onClick={(e) => this.handleAddStoreClick(e)}>+</button>
          {groceryStoreInputs}
          <button className="submitBtn" onClick={(e)=> this.handleSubmitClick(e)}>Submit</button>
        </form>
        <p>
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default AddToCatalog;
