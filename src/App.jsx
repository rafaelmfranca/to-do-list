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
    this.removeTask = this.removeTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  createTask(newTask) {
    const { tasks } = this.state;

    this.setState({
      tasks: [...tasks, newTask],
    });
  }

  updateTask(updatedTask) {
    const { tasks } = this.state;

    const updatedTasks = tasks.map((task) => {
      const copyOfTask = task;
      if (copyOfTask.id === updatedTask.id) {
        copyOfTask.hasFinished = updatedTask.hasFinished;
      }
      return copyOfTask;
    });

    this.setState({
      tasks: updatedTasks,
    });
  }

  removeTask(id) {
    const { tasks } = this.state;
    const tasksFiltered = tasks.filter(({ id: taskId }) => taskId !== id);

    this.setState({
      tasks: tasksFiltered,
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <>
        <AddTask onCreate={this.createTask} />
        <ul>
          {tasks.map((task) => (
            <Task
              key={task.id}
              data={task}
              onUpdate={this.updateTask}
              onRemove={this.removeTask}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default App;
