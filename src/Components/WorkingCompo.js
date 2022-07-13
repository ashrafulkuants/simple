import React, { Component } from 'react'

export default class WorkingCompo extends Component {
  render() {
    return (
        <div className="working">
        <h2 className="heading-style-one">How it works</h2>
        <div className="working-one">
          <div className="working-text-container">
            <p className="big-counter">01</p>
            <p className="counter-top-text">Create Account</p>
          </div>
          {this.props.isMobile?  <img src="/assets/mobile-assets/Section1.png" alt="" className="working-one-image" />
        :  <img src="/assets/Section1.png" alt="" className="working-one-image" />}
        </div>
        {this.props.isMobile?  <img src="/assets/mobile-assets/spiral.png" alt="" className="curved-line" />
        : <img src="/assets/spiral.png" alt="" className="curved-line" />}
        <div className="working-two">
        {this.props.isMobile?   <img src="/assets/mobile-assets/Section2.png" alt="" className="working-two-img" />
        :  <img src="/assets/Section2.png" alt="" className="working-two-img" />}
         
          <div className="working-text-container">
            <p className="big-counter">02</p>
            <p className="counter-top-text">Complete&nbsp;KYC</p>
          </div>
        </div>
        <div className="working-three">
          <div className="working-text-container">
            <p className="big-counter">03</p>
            <p className="counter-top-text">Invest</p>
          </div>
          {this.props.isMobile?   <img src="/assets/mobile-assets/Section3.png" alt="" className="working-three-img" />
        :  <img src="/assets/Section3.png" alt="" className="working-three-img" />}
         
         
        </div>
      </div>
    )
  }
}
