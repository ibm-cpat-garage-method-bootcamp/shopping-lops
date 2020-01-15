import React, { Component } from "react";
import "./Catalog.scss";

class Catalog extends Component {

    state = {
        catalog: [
            {id: 1, name: "apples", qty: 1, checkToPurchase: false},
            {id: 2, name: "bananas", qty: 10, checkToPurchase: false},
            {id: 3, name: "beer", qty: 6, checkToPurchase: false},
            {id: 4, name: "wine", qty: 2, checkToPurchase: false}
        ]
    };

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
        this.setState({catalog: filteredItems});
    }

    render() {
        return (
            <div className="Catalog">
                <h1> catalog</h1>
                <ul> {this.state.catalog.map(item => {
                    return <li>  {item.name} <input type="checkbox" name={item.name} value={item.value} onChange={() => {this.handleCheckToPurchase(item.id, this.state.catalog)}}/> </li>
                })}
                </ul>
                <button onClick={() => {this.filterCheckedItems()}}>  To Buy </button>
            </div>
    );
    }
}

export default Catalog;
