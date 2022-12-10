import React, { Component } from "react";
export default class CounterWithClass extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    name: "Sagar",
    lastName: "Gavand",
    counterValue: 0,
  };

  person = {
    
  }

  increment = () => {
    this.setState({ counterValue: this.state.counterValue +  1 });
  };

  change = () => {
    let tempObj = {
      name: 'Sachin'
    };
    this.setState(tempObj);
  };

  render() {
    return (
      <div>        
        <button>-</button> {this.state.counterValue}{" "}
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}
