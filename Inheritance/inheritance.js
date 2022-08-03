import React from "react";
import ReactDOM from "react-dom";

// Example Parent class with a SET STATE / stateful (in constructor method)

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: "Frarthur" }
  }
  render() {
    return <div></div>;
  }
}

// Example Child class with no set state (stateless)

export class Child extends React.Component {
  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}

// What happens when you import the Child component in its Parent render?

import { Child } from './Child'; // Same directory, so simple import

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: "Frarthur" }
  }
  render() {
    return <Child name={this.state.name}/>;
  }
}

ReactDOM.render(<Parent />, document.getElementById('app'));
