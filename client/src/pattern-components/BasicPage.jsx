import React, { Component } from "react";
import Header from "./Header";
import "./patterns.scss";
import Catalog from "./Catalog/Catalog";

class BasicPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bx--grid pattern-container">
        <Header title="Basic Page" subtitle="Hey A basic boilerplate page." />
        <Catalog />
      </div>
    );
  }
}

export default BasicPage;
