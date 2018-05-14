import React, { Component } from 'react';
import superagent from 'superagent';

const API_URL = 'http://192.168.1.252:3000';

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

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Reports;
