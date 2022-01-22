import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {
      data: { title },
    } = this.props;

    return (
      <div>
        <input type="checkbox" />
        {title}
        <button type="button">X</button>
      </div>
    );
  }
}

Task.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
  }),
}.isRequired;
