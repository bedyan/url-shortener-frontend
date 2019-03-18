import React, { Component } from 'react';
import axios from 'axios';

class Statistics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urls: []
    }
  }

  componentWillMount() {
    axios.get( '/api/v1/urls')
    .then(response => {
      console.log(response)
      this.setState({urls: response.data})
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="container">
        <a className="row" href="/"> Back to main page </a>
        {this.state.urls.map( url => {
          return (
            <div className="row" key={url.id}>
              <div className="url">
                <a href={url.short_url}> {'localhost:3000/' + url.short_url}</a>
              </div>
              <div className="redirects">
                <p>amount of redirects: {url.visits_count}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Statistics;
