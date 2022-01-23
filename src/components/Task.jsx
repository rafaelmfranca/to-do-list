import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Task.css';

export default class Task extends Component {
  constructor(props) {
    super(props);

    const {
      data: { id: taskId },
    } = this.props;

    this.state = {
      id: taskId,
      hasFinished: false,
    };

    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleCheckbox(event) {
    const { onUpdate } = this.props;
    const currentState = this.state;

    this.setState({
      hasFinished: event.target.checked,
    });

    onUpdate({
      ...currentState,
      hasFinished: event.target.checked,
    });
  }

  render() {
    const {
      data: { id, title },
      onRemove,
      hasFinished,
    } = this.props;

    return (
      <div className={`task ${hasFinished}`}>
        <input
          className="input-checkbox"
          type="checkbox"
          onChange={this.handleCheckbox}
          checked={hasFinished}
        />
        {title}
        <button
          className="remove-button"
          type="button"
          onClick={() => onRemove(id)}
        >
          <i className="fas fa-times-circle fa-lg red" />
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
  onUpdate: PropTypes.func,
  onRemove: PropTypes.func,
  hasFinished: PropTypes.bool,
}.isRequired;
