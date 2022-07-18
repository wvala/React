import React from 'react'; // This part is familiar to ruby
import ReactDOM from 'react-dom'; // You need to import the library to use it

// The following examples are drawn from Codecademy's course on React!

// First Component

class MyComponentClass extends React.Component { // This is a component
  render() { // Plain old render method for reusable code!
    return <h1>Hello world</h1>; // This is the familiar JSX
  }
};

ReactDOM.render( // Here, the component is being rendered
  <MyComponentClass />,
  document.getElementById('app') // Prints into your main "app" div
);

// Example multi-line rendering

class Htmler extends React.Component {
  render() {
    return ( // Parentheses required when JSX exceeds a single line
      <blockquote>
        <p>
          What is important now is to recover our senses.
        </p>
        <cite>
          <a target="_blank"
            href="https://en.wikipedia.org/wiki/Susan_Sontag">
            Susan Sontag
          </a>
        </cite>
      </blockquote>
    );
  }
};

ReactDOM.render(<Htmler />, document.getElementById('app'));

// Example of rendering a picture of an owl and its title by turning it into
// a reusable component

const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

class Owl extends React.Component {
  render() {
    return (
      <div>
        <h1>{owl.title}</h1>
        <img
          src={owl.src}
          alt={owl.title}
        />
      </div>
    );
  }
};

ReactDOM.render(<Owl />, document.getElementById('app'));

// Example of accessing an array of hashes and rendering specific information
// from a particular element

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

class Friend extends React.Component {
  render() {
    const friend = friends[1]

    return (
      <div>
        <h1>{friend.title}</h1>
        <img
          src={friend.src}
        />
      </div>
    );
  }
};

ReactDOM.render(<Friend />, document.getElementById('app'));

// Example of how logic can be applied within component methods

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    if (fiftyFifty) {
      return <h1>Tonight I'm going out WOOO</h1>
    } else {
      return <h1>Tonight I'm going to bed WOOO</h1>
    };
  }
};

ReactDOM.render(<TonightsPlan />, document.getElementById('app'));

// Quick getter method

class MyName extends React.Component {
get name() {
  return "Will";
}

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));
