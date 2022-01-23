import React, { Component } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Task from './components/Task';
import './styles/App.css';

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

  componentDidMount() {
    this.loadTasksFromLocalStorage();
  }

  loadTasksFromLocalStorage() {
    const localStorageTasks = JSON.parse(localStorage.getItem('tasks'));

    if (localStorageTasks) {
      this.setState({
        tasks: localStorageTasks,
      });
    }
  }

  createTask(newTask) {
    const { tasks } = this.state;
    const updateTask = [...tasks, newTask];
    this.setState({
      tasks: updateTask,
    });
    localStorage.setItem('tasks', JSON.stringify(updateTask));
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

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  removeTask(id) {
    const { tasks } = this.state;
    const tasksFiltered = tasks.filter(({ id: taskId }) => taskId !== id);

    this.setState({
      tasks: tasksFiltered,
    });
    localStorage.setItem('tasks', JSON.stringify(tasksFiltered));
  }

  render() {
    const { tasks } = this.state;
    return (
      <>
        <Header />
        <section className="container">
          <AddTask onCreate={this.createTask} />
          <section className="task-list">
            {tasks.map((task) => (
              <Task
                key={task.id}
                data={task}
                onUpdate={this.updateTask}
                onRemove={this.removeTask}
                hasFinished={task.hasFinished}
              />
            ))}
          </section>
        </section>
      </>
    );
  }
}

export default App;
