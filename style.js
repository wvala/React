import React from 'react';
import ReactDOM from 'react-dom';

// Styling on same file - not ideal in most other cases, but actually fine to use in React

const styleMe = <h1 style={{ background: "lightblue", color: "darkred" }}>Please style me! I am so bland!</h1>;

const styles = { // An alternative to inline style: defining the style you want to make a modular reference point
  background: "lightblue", // for many different components. Pretty similar to a css library
  color: "darkred",
  marginTop: 100, // Whereas in regular JS styles are lowercase hyphenated,
  fontSize: 50 // in React they use lowerCamelCase
}// In React, if you write a style value as a number, then the unit "px" is assumed.

const styleMe2 = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe,
	document.getElementById('app')
);

// More modular styling

const fontFamily = 'Comic Sans MS, Lucida Handwriting, cursive';
const background = 'pink url("https://content.codecademy.com/programs/react/images/welcome-to-my-homepage.gif") fixed';
const fontSize = '4em';
const padding = '45px 0';
const color = 'green';

export const styles2 = {
  fontFamily: fontFamily,
  background: background,
  fontSize:   fontSize,
  padding:    padding,
  color:      color
};
