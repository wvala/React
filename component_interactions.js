import React from 'react';
import ReactDOM from 'react-dom';

// How to call a component within another component's render

// NavBar.js

export class NavBar extends React.Component { // "export" is vital here as it allows this component to be imported elsewhere
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}

// ProfilePage.js

import { NavBar } from './NavBar' // Without this, the file wouldn't be able to fetch the info from NavBar's home file

class ProfilePage extends React.Component {
  render() {
    return ( // Really simple rendering process. Reminds me of partials?
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

ReactDOM.render(<ProfilePage />, document.getElementById('app')); // Ties it all together: renders a full profile page!
