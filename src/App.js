import React, { Component } from 'react';
import './App.css';

import Sidebar from './components/sidebar/sidebar';
import Workarea from './components/workarea/workarea';
import ModalLabel from './components/modalLabel/modalLabel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalLabel></ModalLabel>
        <Sidebar></Sidebar>
        <Workarea></Workarea>
      </div>
    );
  }
}

export default App;
