import React, { Component } from 'react';
import superagent from 'superagent';
import './App.css';

const API_URL = 'http://192.168.1.252:3000';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Chivalist</h1>
        </header>
        <p clasName="sub-header">
          {this.props.subHeader}
        </p>
        <Reports />
      </div>
    );
  }
}

class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
        reports: []
    }
  }

  componentDidMount() {
    superagent.get(`${API_URL}/reports`)
    .then(res => {
      console.log(res.body)
    })
    .catch(console.err);
  }
}

export default App;
