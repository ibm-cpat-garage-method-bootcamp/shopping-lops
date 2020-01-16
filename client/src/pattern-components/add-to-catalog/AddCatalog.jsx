import React, { Component } from "react";
import { Item } from "../../models/Item.ts";
import { Catalog } from "../../models/Catalog.ts";
import { GroceryStore} from "../../models/GroceryStore.ts";
import  "./AddToCatalog.scss";
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
      let stores = [];

      for(let i = 0; i < this.state.storeCount; i++) {

        // let store = new GroceryStore(this.state.store, this.state.aisle);
        // stores.push()
      }

      const item = new Item (this.state.itemName, this.state.itemQuantity, this.state.itemComment, stores)
      updatedCatalog.push(item);
      return this.setState({
        updatedCatalog,
        message: 'Thank you for submitting an item',
      })
    }
  };

  handleAddStoreClick = async (e) => {
    e.preventDefault();
    await this.setState({
      storeCount: this.state.storeCount + 1,
    });
  };


  render() {
    let groceryStoreInputs = [];
    for (let i = 0; i < this.state.storeCount; i++) {
      groceryStoreInputs.push(
        <div className="grocery-form">
          <label>Store Name: </label>
          <input name={`store${i}`} type="text" onChange={(e) => this.handleInputChange(e)} />
          <label className="aisle-label">Aisle #: </label>
          <input className="aisle-input" name={`aisle${i}`} type="text" onChange={(e) => this.handleInputChange(e)} />
        </div>
      )
    }

    return (
      <div className="catalog-form">
        <form>
          <div>
            <label>Item Name: </label>
            <input name="itemName" type="text" onChange={(e) => this.handleInputChange(e)} />
          </div>
          <div>
            <label>Item Quantity: </label>
            <input name="itemQuantity" type="text" onChange={(e) => this.handleInputChange(e)} />
          </div>
          <div>
            <label>Comment: </label>
            <input name="itemComment" type="text" onChange={(e) => this.handleInputChange(e)} />
          </div>


          {groceryStoreInputs}


          <div>
            <button onClick={(e) => this.handleAddStoreClick(e)}>Add Store</button>
            <button className="submitBtn" onClick={(e)=> this.handleSubmitClick(e)}>Submit</button>
          </div>




        </form>
        <p>
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default AddToCatalog;
