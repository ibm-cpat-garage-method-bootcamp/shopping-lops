import React, { Component } from "react";

let catalog = [1,]
let item = {
  name: 'bacon',
  size: 20,
  comment: 'more! 20 pounds Janice!',
}

class AddToCatalog extends Component {
  constructor() {
    super()
    this.state = {
      catalog: [],
    }
  }
  addToCatalog = () => {
    return [1,2]
  }
  render() {

    return (
      <div />
    );
  }
}

export default AddToCatalog;
