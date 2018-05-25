import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './App.css';
import Intro from './components/Intro';
import Education from './components/Education';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <ScrollableAnchor id={'education'}>
          <Education />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
