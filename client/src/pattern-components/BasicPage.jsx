import React, { Component } from "react";
import Header from "./Header";
import AddToCatalog from "./add-to-catalog/AddCatalog";
import "./patterns.scss";

class BasicPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bx--grid pattern-container">
        <Header title="Basic Page" subtitle="Please enter an item." />
        <AddToCatalog />
      </div>
    );
  }
}

export default BasicPage;
