import React, { Component } from 'react';
import Display from './Components/Display/display';
import Dashboard from './Components/Dashboard/dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Scoreboard</h1>
          <Display />
          <Dashboard />
        </header>
      </div>
    );
  }
}

export default App;
