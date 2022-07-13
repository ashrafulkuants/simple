import React, { Component } from 'react'

export default class NotFound extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
          <h1 style={{textAlign:'center',margin:'6rem'}}>Page Not Found</h1>
          </div>
    )
  }
}
