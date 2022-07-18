import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component { // This is a component
  render() {
    return <h1>Hello world</h1>; // This is the familiar JSX
  }
};

ReactDOM.render( // Here, the component is being rendered
  <MyComponentClass />,
  document.getElementById('app')
);
