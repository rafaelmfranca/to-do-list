import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {
      data: { id, title, checked },
      onRemove,
      onCheck,
    } = this.props;

    return (
      <div>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => onCheck(id)}
        />
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
    checked: PropTypes.bool,
  }),
  onRemove: PropTypes.func,
}.isRequired;
