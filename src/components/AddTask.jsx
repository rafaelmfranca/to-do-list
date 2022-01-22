import React, { Component } from 'react';
import PropTypes from 'prop-types';
import generators from '../lib/generators';

export default class AddTask extends Component {
  constructor() {
    super();

    this.initialState = {
      id: 0,
      title: '',
    };

    this.state = this.initialState;
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    const { randomId } = generators;
    this.setState({
      id: randomId(1000),
      title: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;

    if (title.trim().length > 0) {
      const { onCreate } = this.props;
      onCreate(this.state);
    }

    this.setState(this.initialState);
  }

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={title} onChange={this.handleInput} />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

AddTask.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
