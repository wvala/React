import React from 'react';
import ReactDOM from 'react-dom';

// A component class written in the usual way:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// The same component class, written as a stateless functional component:
export const MyComponentClass = () => {
  return <h1>Hello world</h1>;
}

// Works the same either way:
ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);
// Clearly, writing components as a function can save some time

// Component functions with props

export function NewFriend (props) { // Pretty straightforward - drop the 'this'
  return (
    <div>
      <img src={props.src} />
    </div>
  );
}

ReactDOM.render(
<NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
document.getElementById('app')
);
