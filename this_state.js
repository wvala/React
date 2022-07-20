import React from 'react';
import ReactDOM from 'react-dom';
// Props and State are both things which can change the display of an app
// You can use state to *dynamically* change information on a page
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { title: "Best App" }
  }

  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
// This actually renders similiarly to a normal prop render

// Example of how you can use React to make a button dynamically update a page

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { color: green }
    this.changeColor = this.changeColor.bind(this); // Have to bind it here or else it loses the this. meaning in the render
  }
  changeColor() {
    const newColor = this.state.color === green ? yellow : green
    this.setState({color: newColor}); // This line changes the state
  }
  render() { // IMPORTANT: RENDER IS CALLED AFTER EVERY setState() CALL!!!! DYNAMIC.... WOOO
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'))
