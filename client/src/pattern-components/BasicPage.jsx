import React, { Component } from "react";
import Header from "./Header";
import CatalogView from "./CatalogView/CatalogView";
import "./patterns.scss";

class BasicPage extends Component {
  render() {
    return (
      <div className="bx--grid pattern-container">
        <Header title="Basic Page" subtitle="A basic boilerplate page." />
        <br />
        <CatalogView />
      </div>
    );
  }
}

export default BasicPage;
