import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {
  constructor() {
    super();

    this.state = {
      hasFinished: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      hasFinished: event.target.checked,
    });
  }

  render() {
    const { hasFinished } = this.state;
    const {
      data: { id, title },
      onRemove,
    } = this.props;

    return (
      <div>
        <input
          type="checkbox"
          onChange={this.handleClick}
          checked={hasFinished}
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
  }),
  onRemove: PropTypes.func,
}.isRequired;
