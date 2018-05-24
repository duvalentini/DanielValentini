import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro';
import Education from './components/Education';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <Education />
      </div>
    );
  }
}

export default App;
