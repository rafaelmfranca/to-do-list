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
    this.checkTask = this.checkTask.bind(this);
  }

  createTask(newTask) {
    const { tasks } = this.state;

    this.setState({
      tasks: [...tasks, newTask],
    });
  }

  removeTask(id) {
    const { tasks } = this.state;
    const tasksFiltered = tasks.filter(({ id: taskId }) => taskId !== id);

    this.setState({
      tasks: tasksFiltered,
    });
  }

  checkTask(id) {
    console.log(id);
    const { tasks } = this.state;
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        const prevState = task.checked;
        return { ...task, checked: !prevState };
      }
      return task;
    });

    this.setState({
      tasks: updatedTasks,
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
              onRemove={this.removeTask}
              onCheck={this.checkTask}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default App;
