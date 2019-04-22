import React, { Component } from 'react';
import './App.css';

import Sidebar from './components/sidebar/sidebar';
import Workarea from './components/workarea/workarea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar></Sidebar>
        <Workarea></Workarea>
      </div>
    );
  }
}

export default App;
