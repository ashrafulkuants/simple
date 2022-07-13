import React, { Component,lazy,Suspense } from 'react'
import WorkingCompo from './WorkingCompo';
import config from '../config';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// const WorkingCompo=lazy(() => import('./WorkingCompo'));

const featuresData = [{ img: "/assets/Groupfeatures1.png",img_mobile: "/assets/mobile-assets/Groupfeatures1.png", title: 'SIP recommendations' },
{ img: "/assets/Groupfeatures2.png",img_mobile: "/assets/mobile-assets/Groupfeatures2.png", title: 'Algo Based Research' },
{ img: "/assets/Groupfeatures3.png", img_mobile: "/assets/mobile-assets/Groupfeatures3.png", title: 'Valuable Insight for each fund' },
{ img: "/assets/Groupfeatures4.png", img_mobile: "/assets/mobile-assets/Groupfeatures4.png", title: 'AMFI Registered' },
{ img: "/assets/Groupfeatures5.png",img_mobile: "/assets/mobile-assets/Groupfeatures5.png", title: 'Fastest KYC' }]
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '', lName: '', email: '', phone: '', comment: '',
      isMobile:false
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let formObj = this.state
    axios.post(config.createquery, formObj).then((res) => {
      if (res.status === 201) {
        this.setState({
          fName: '', lName: '', email: '', phone: '', comment: '',
        })
        toast.success("Query Received! We will contact you shortly.", {
          position: toast.POSITION.BOTTOM_CENTER
        });
      } else {
        toast.error("Some error occured, Please try again.",{
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    })
  }
  
checkIsMobile=()=>{
  if(window.innerWidth<426){
    this.setState({isMobile:true})
  }}
handleChange = (e) => {
  this.setState({ ...this.state, [e.target.name]: e.target.value })
}
componentDidMount(){
  this.checkIsMobile()
}
render() {
  
  return (
    
    <div className='landing-container'>
      <Suspense fallback={<div>Loading...</div>}>
      
      <ToastContainer autoClose={3500}/>
      
      <div className='about flex'>
        <div className="about-left">
          <h2>Invest in Mutual Funds</h2>
          <p>Start your Investing today for a financially secured future.
          </p>
          <div className="about-btn-group about-btn-group-lg">
            <a href='https://apps.apple.com/in/app/kuants-mutual-fund/id1613116832' target='_blank' rel="noreferrer"><button className="about-btn about-btn-ios" >Download IOS App</button></a>
            <a href='https://play.google.com/store/apps/details?id=com.kuants' target='_blank' rel="noreferrer"> <button className="about-btn about-btn-android" >Download Android App</button></a>
          </div>
        </div>
        <div className="about-right">
          {this.state.isMobile?<img fetchpriority="high" src='/assets/mobile-assets/Imagemain-top.png' alt='topImg' className='discovery-img' />
          :<img fetchpriority="high" src='/assets/Imagemain-top2x.png' alt='topImg' className='discovery-img' />}
          
        </div>
        {this.state.isMobile?<img className='triangle-icon' src='/assets/mobile-assets/Group.png' alt='triangle-icon' />
        :<img className='triangle-icon' src='/assets/Group.png' alt='triangle-icon' />}
        {this.state.isMobile? <img className='cylindrical-icon' src='/assets/mobile-assets/Group2.png' alt='cylindrical-icon' />
        : <img className='cylindrical-icon' src='/assets/Group2.png' alt='cylindrical-icon' />}
       
      </div>
      <div className="about-btn-group about-btn-group-mobile">
        <a href='https://apps.apple.com/in/app/kuants-mutual-fund/id1613116832' target='_blank' rel="noreferrer"> <button className="about-btn about-btn-ios" >Download IOS App</button></a>
        <a href='https://play.google.com/store/apps/details?id=com.kuants' target='_blank' rel="noreferrer"> <button className="about-btn about-btn-android" >Download Android App</button></a>
      </div>
      <div className="mutual-funds">
        <h2 className="heading-style-one">Why Mutual funds?</h2>
        <p className='mfunds-main-para'>If you are, just starting your investment journey OR looking for a financially secured future OR aspire to build generational wealth without worrying about “what, when and how of investing”, mutual funds are the way to go!
        </p>
        <div className='list-container'>
          <div style={{ flexDirection: 'column', }}>
            <div className="pointer">
              <div className="purple-circle"></div>
              <p>Long Term Wealth Generation</p>
            </div>
            <div className="pointer">
              <div className="purple-circle"></div>
              <p>Instrument to save Money for financial goals</p>
            </div>
          </div>
          <div style={{ flexDirection: 'column', }}>
            <div className="pointer">
              <div className="purple-circle"></div>
              <p>Tax Saving</p>
            </div>
            <div className="pointer">
              <div className="purple-circle"></div>
              <p>Achieve Returns to Beat Inflation</p>
            </div>
          </div>
        </div>
        {this.state.isMobile?  <img src="/assets/mobile-assets/Groupmutual.png" alt="" className="group-mutual" />
        :  <img src="/assets/Groupmutual.png" alt="" className="group-mutual" />}
       
      </div>
      <div className='features'>
        <h2 className="heading-style-one">Features</h2>
        <div className="card-container">
          {featuresData.map((item, index) => (
            <div className="card" key={index}>
              {this.state.isMobile?   <img src={`${item.img_mobile}`} alt={`${item.title}`} />
        :   <img src={`${item.img}`} alt={`${item.title}`} />}
             
              <p>{item.title}</p>
            </div>
          ))}

        </div>
      </div>
      <WorkingCompo isMobile={this.state.isMobile}/>
      <div className='invest-stocks'>
        <h2 className="heading-style-one">Invest in stocks</h2>
        <p className='para-style-one'> Seamless investments in stock markets across Equities Futures and Commodities </p>
        <div className='coming-soon-container flex'>
          <p>Coming Soon</p>
          {this.state.isMobile?   <img src='/assets/mobile-assets/loudspeaker.png' alt='loud-speaker' />
        :  <img src='/assets/loudspeaker.png' alt='loud-speaker' />}
        </div>
      </div>
      <div className='stock-tech-section'>
        <h2 className="heading-style-one">Curious about Stock Markets &amp; Technology?</h2>
        <div className='stock-tech-container'>
        {this.state.isMobile?  <img src='/assets/mobile-assets/curious-about-stocks.png' alt='curious-about-stocks' />
        :  <img src='/assets/curious-about-stocks.svg' alt='curious-about-stocks' />}
          <div className='stock-tech-right'>
            <p className='para-style-one'>Test out your trading ideas on virtual capital over Algolab Backtesting Platform</p>
            <a href='https://algolab.kuants.in/' target="_blank" rel="noreferrer"><button className='stock-tech-btn'>Visit Algolab</button></a>
          </div>

        </div>
      </div>
      <div className='landing-contact'>
        <h2 className="heading-style-one">Contact Us</h2>
        <div className='landing-form'>
          <form onSubmit={this.handleSubmit}>
            <input required type="text" name="fName" placeholder='First Name' value={this.state.fName} onChange={this.handleChange} />
            <input required type="text" name="lName" placeholder='Last Name' value={this.state.lName} onChange={this.handleChange} />
            <input required type="email" name="email" placeholder='Email' value={this.state.email} onChange={this.handleChange} />
            <input required type="number" name="phone" placeholder='Phone no.' value={this.state.phone} onChange={this.handleChange} />
            <textarea required name='comment' placeholder='Comment' value={this.state.comment} onChange={this.handleChange} />
            <input type='submit' className='invest-dl-btn' value='Send Now' />
          </form>
        </div>
      </div>
      </Suspense>
    </div>
  )
}
}

