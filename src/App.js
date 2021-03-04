import React, { Component } from "react";
import "./App.css";
import CheckBox from "./CheckBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, value: "Item 1", isChecked: false },
        { id: 2, value: "Item 2", isChecked: false },
        { id: 3, value: "Item 3", isChecked: false },
        { id: 4, value: "Item 4", isChecked: false },
      ],
      selectedAll: false,
    };
  }

  handleAllChecked = (event) => {
    let items = this.state.items;
    items.forEach((item) => (item.isChecked = event.target.checked));
    this.setState({ items, selectedAll: !this.state.selectedAll });
  };

  handleCheckChieldElement = (event) => {
    let items = this.state.items;
    items.forEach((item) => {
      if (item.value === event.target.value)
        item.isChecked = event.target.checked;
    });
    this.setState({ items });
  };

  render() {
    return (
      <div className="App">
        <input
          type="checkbox"
          onChange={this.handleAllChecked}
          value="checkedall"
        />{" "}
        {!this.state.selectedAll ? "Select" : "Deselect"} All
        <ul>
          {this.state.items.map((item, index) => {
            return (
              <CheckBox
                key={index}
                handleCheckChieldElement={this.handleCheckChieldElement}
                {...item}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
