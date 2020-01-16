import React, { Component } from "react";
import Header from "./Header";
import AddToCatalog from "./add-to-catalog/AddCatalog";
import "./patterns.scss";
import Catalog from "./Catalog/Catalog";

class BasicPage extends Component {
  render() {
    return (
      <div className="bx--grid pattern-container">
        <Header title="Basic Page" subtitle="A basic boilerplate page." />
        <AddToCatalog />
        <br />
        <Catalog />
      </div>
    );
  }
}

export default BasicPage;
