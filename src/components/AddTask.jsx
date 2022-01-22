import React, { Component } from 'react';

export default class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form>
        <input type="text" value={title} onChange={this.handleInput} />
        <button type="button">Add Task</button>
      </form>
    );
  }
}
