import React, { Component } from 'react';
import axios from 'axios';

class Redirect extends Component {

  render() {
    axios.get( '/api/v1/urls' + window.location.pathname)
    .then(response => {
      window.location.replace(response.data.full_url)
    })
    .catch(error => {
      console.log(error)
    })
    return (
      <div> </div>
    )
  }
}

export default Redirect;
