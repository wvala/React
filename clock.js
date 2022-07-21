import React from 'react';
import ReactDOM from 'react-dom';

// Example of a dynamic clock component

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>
  }

  componentDidMount() { // This part ensures that the component is updated each second. VERY COOL
    const oneSecond = 1000; // "Mounting" is when the component is rendered on the DOM
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }

  componentWillUnmount() { // This method ensures that the component is only updating when in use
    clearInterval(this.intervalID) // "Unmounting" is when the component is removed from the DOM
  }
}

ReactDOM.render(<Clock />, document.getElementById('app'));

// A dynamic clock featuring refactored code from above and functionality for a more precise
// time display. No duplicate code (stays DRY), and precise mode interval is shorter.

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        {this.props.isPrecise
          ? this.state.date.toISOString()
          : this.state.date.toLocaleTimeString()}
      </div>
    );
  }

  startInterval() {
    let delay;
    if (this.props.isPrecise) {
      delay = 100
    } else {
      delay = 1000
    }
     this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, delay);
  }

  componentDidMount() {
    this.startInterval();
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isPrecise === prevProps.isPrecise) {
      return;
    }
    clearInterval(this.intervalID);
    this.startInterval();
  }
}
