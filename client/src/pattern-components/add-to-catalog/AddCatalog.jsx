import React, { Component } from "react";

let catalog = [1,]

class AddToCatalog extends Component {
  constructor() {
    super()
    this.state = {
      catalog: [],
      alert: false,
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      message: '',
    })
  };

  handleSubmitClick = (e) => {
    e.preventDefault();


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
      let item = {
        itemName: this.state.itemName,
        itemQuantity: this.state.itemQuantity,
        itemComment: this.state.itemComment,
      };
      updatedCatalog.push(item);
      return this.setState({
        updatedCatalog,
        message: 'Thank you for submitting an item',
      })
    }
  }


  render() {

    return (
      <div className="awesomeDiv">
        <form >
          <label>Item Name: </label>
          <input name="itemName" type="text" onChange={(e) => this.handleInputChange(e)} />
          <label>Item Quantity: </label>
          <input name="itemQuantity" type="text" onChange={(e) => this.handleInputChange(e)} />
          <label>Comment: </label>
          <input name="itemComment" type="text" onChange={(e) => this.handleInputChange(e)} />
          <button onClick={(e)=> this.handleSubmitClick(e)}>Submit</button>
        </form>
        <p>
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default AddToCatalog;
