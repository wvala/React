// propTypes are useful for prop validation - making sure that props are
// doing and returning what they are supposed to.
// They are also useful for documentation - making it easier to track
// what i.e. a component class is actually doing.
import React from 'react';
import PropTypes from 'prop-types';

// Example of propTypes being used to ensure all entries into a class are as expected

export class BestSeller extends React.Component {
  render() {
    return (
      <li>
        Title: <span>
          {this.props.title}
        </span><br />

        Author: <span>
          {this.props.author}
        </span><br />

        Weeks: <span>
          {this.props.weeksOnList}
        </span>
      </li>
    );
  }
}

BestSeller.propTypes = {
  title: PropTypes.string.isRequired, // This is really similar to validations in Ruby (validates: presence, true)
  author: PropTypes.string.isRequired, // isRequired returns a console warning if the input data does not match the
  weeksOnList: PropTypes.number.isRequired // propTypes requirement.
};

// Function propTypes???

export const GuineaPigs = (props) => {
  let src = props.src;
  return (
    <div>
      <h1>Cute Guinea Pigs</h1>
      <img src={src} />
    </div>
  );
}

GuineaPigs.propTypes = {
  src: PropTypes.string.isRequired
};
