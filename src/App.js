import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './App.css';
import Intro from './components/Intro';
import Education from './components/Education';
import Header from './components/Header';
import ChefD from './components/ChefD';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ScrollableAnchor id={'me'}>
          <Intro />
        </ScrollableAnchor>
        <ScrollableAnchor id={'education'}>
          <Education />
        </ScrollableAnchor>
        <ScrollableAnchor id={'chefd'}>
          <ChefD />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
