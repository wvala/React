// Philosophy here is that you should use React to keep the rest of your
// application up to date with every single character insertion / deletion
// in a form, rather than having to wait for a form submission or field
// clearance which can lead to mix-ups in larger, more complex apps.
import React from 'react';
import ReactDOM from 'react-dom';


export class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = { userInput: '' }
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  handleUserInput(e) { // "e" here being an event - the onChange event listener set out in render's input field
    this.setState({userInput: e.target.value}) // setState is triggered by an update to input's state, as mentioned above
  }

  render() { // Note the lack of <submit> tag - this is because you actually submit your form with each update. Cool!
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} value={this.state.userInput} />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);

// Controlled vs Uncontrolled components
// Uncontrolled: maintains its own internal state, and its state is not modified by anything else
// Example: an <input /> tag, which keeps track of its own internal state. In regular JS, you can call Input.value and
// receive relevant info. However, giving it a "value" attribute forces it to stop using its internal storage and
// actually turns it into a controlled component

// Controlled: has no inherent internal state, and relies upon external control
// Has no internal memory, and relies upon props being passed in order to retrieve
// information about itself. This is the case for most React components.
