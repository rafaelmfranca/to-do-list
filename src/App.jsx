import React, { Component } from 'react';
import AddTask from './components/AddTask';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <AddTask />;
  }
}

export default App;
