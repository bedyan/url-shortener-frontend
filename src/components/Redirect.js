import React, { Component } from 'react';
import axios from 'axios';
import getUserIP from './../getUserIp'

class Redirect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      client_ip: ''
    }
  }

  componentDidMount(){
    getUserIP((ip) => {
      this.setState({client_ip: ip}, () => axios.get( `/api/v1/urls/${window.location.pathname}?client_ip=${this.state.client_ip}`)
          .then(response => {
            window.location.replace(response.data.full_url)
          })
          .catch(error => {
            console.log(error)
          }))
    })
  }

  render() {
    return (
      <div> </div>
    )
  }
}

export default Redirect;
