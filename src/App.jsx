import React, { Component } from 'react';
import AddTask from './components/AddTask';
import Task from './components/Task';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };

    this.createTask = this.createTask.bind(this);
  }

  createTask(newTask) {
    const { tasks } = this.state;

    this.setState({
      tasks: [...tasks, newTask],
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <>
        <AddTask onCreate={this.createTask} />
        <ul>
          {tasks.map((task) => (
            <Task key={task.id} data={task} />
          ))}
        </ul>
      </>
    );
  }
}

export default App;
