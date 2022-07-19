import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Groberta' />,
  document.getElementById('app')
);

// Returns "Hi there, Groberta!" - taking information from the component's
// props, and reading the value of the information passed in firstName
// Therefore, you can change the value of firstName to anything you like and
// the render will update! Very useful

// Passing props between components

// Greeting.js

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}

// App.js

import { Greeting } from './Greeting'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Will"/> {/* Here, the greeting component is called and a prop is assigned */}
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// Decision-making and conditionals involving props

export class Greeting extends React.Component {
  render() {
  	if (this.props.signedIn == false) { { /* Unless signedIn prop's value is true, will return this message */}
  	  return <h1>GO AWAY</h1>;
  	} else {
  	  return <h1>Hi there, {this.props.name}!</h1>;
  	}
  }
}

// Event handlers as props

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }

  render() {
    return <Button talk={this.talk}/>; // the prop name is pretty arbitrary but you want its value to be the component method
  } // summoned upon click
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

export class Button extends React.Component {
  render() {
    return ( // this.props.talk works because we named our prop talk in the Talker component
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}

// Default props

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = { text: "I am a button" }; // If the button is rendered WITHOUT any text, this will make sure it
// At least has some placeholder text (perhaps so you can see where it is?)

ReactDOM.render(
  <Button />,
  document.getElementById('app')
);
