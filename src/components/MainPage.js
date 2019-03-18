import React, { Component } from 'react';
import axios from 'axios';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      full_url: '',
      short_url: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.addNewUrl = this.addNewUrl.bind(this)
  }

  handleChange = (e) => {
    this.setState({full_url: e.target.value})
  }

  addNewUrl = (e) => {
    axios.post( '/api/v1/urls', {full_url: this.state.full_url})
    .then(response => {
      console.log(response)
      this.setState({short_url: 'localhost:3000/' + response.data.short_url})
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
            <input default={this.state.full_url}
              type = "text"
              placeholder = "Enter your url here"
              onChange={this.handleChange} />
            <button className="btn btn-primary btn-sm" onClick={this.addNewUrl}>Short URL</button>
        </div>
        <div className="row">
          <input type = "text" value={this.state.short_url} />
          <CopyToClipboard text={this.state.short_url}>
            <button className="btn btn-success btn-sm ">Copy link</button>
          </CopyToClipboard>
        </div>
        <div className="row">
          <a href="/stats"> Visit statistics about all urls</a>
        </div>
      </div>
    )
  }
}

export default MainPage;
