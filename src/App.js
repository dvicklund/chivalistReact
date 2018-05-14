import React, { Component } from 'react';
import './App.css';
import Reports from './Reports'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Chivalist</h1>
        </header>
        <Reports />
      </div>
    );
  }
}

export default App;
