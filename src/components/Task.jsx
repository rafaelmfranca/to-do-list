import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {
      data: { id, title },
      onRemove,
    } = this.props;

    return (
      <div>
        <input type="checkbox" />
        {title}
        <button type="button" onClick={() => onRemove(id)}>
          X
        </button>
      </div>
    );
  }
}

Task.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
  onRemove: PropTypes.func,
}.isRequired;
