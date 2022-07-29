import React from 'react';
import ReactDOM from 'react-dom';

// Example parent with 2 children

import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child
          onChange={this.changeName} />
        <Sibling name={this.state.name}/>
      </div>
    );
  }
}

ReactDOM.render( // Rendering the DOM (which contains a child and its sibling)
  <Parent />,
  document.getElementById('app')
);

// Example child

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) { // The child's purpose is to provide a method to CHANGE the name, not to display it!
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}>

          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}

// Example sibling

export class Sibling extends React.Component { // As you can see, this is very lightweight. The sole purpose of the sibling is to display state
  render() {
    const name = this.props.name // Name state is passed down from the parent after it is changed in a sibling class (here, props is the info)
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}

// The main takeaway here is that you should always have one child to handle changes in state, and one child to display
// those changes. This actually makes life a lot easier and the tree is simpler to understand when everything has
// just the one purpose!
