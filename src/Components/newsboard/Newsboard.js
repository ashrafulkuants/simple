import React, { useState } from 'react'
import "./newsboard.css"
import Carousel from 'react-elastic-carousel'
const Newsboard = () => {
  // const [isMobile,setIsMobile]=useState(3)
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 625, itemsToShow: 2 },
    { width: 1025, itemsToShow: 3, itemsToScroll: 1 },
  ]
  return (
    <div className='newsboard'>
      <h2 className='main-heading-style'>Newsboard</h2>
      <div className='news-section-container'>
        <h4 className='news-category-heading'>Latest News</h4>
        <Carousel itemsToScroll={1} itemsToShow={3} breakPoints={breakPoints} pagination={true} itemPadding={[0, 10, 0, 0]} >
          <div className='newsboard_card-container'>
            <img src='/assets/newsboard/marketnews.png' className='news-image' />
            <h6>aIndiGo CEO Ronojoy Dutta to step down in September, Pieter Elbers to succeed him</h6>
            <p className='news-content'>Dutta, 71, will retire on September 30, 2022, after guiding IndiGo through the turbulent COVID-19 period, the private carrier announced.
            </p>
            <p className='news-time'>18 May 2022, 15 minutes ago</p>
            <div className='newsboard_card-bottom'>
            <div className='thumbs-container'>
              <img src='/assets/thumbs-up.svg' />
              <img src='/assets/thumbs-down.svg' />
            </div>
            <div className='news_source'>Source: Times of India</div>
            </div>
            
          </div>
          <div className='newsboard_card-container'>
            <img src='/assets/newsboard/marketnews.png' className='news-image' />
            <h6>bIndiGo CEO Ronojoy Dutta to step down in September, Pieter Elbers to succeed him</h6>
            <p className='news-content'>Dutta, 71, will retire on September 30, 2022, after guiding IndiGo through the turbulent COVID-19 period, the private carrier announced.
            </p>
            <p className='news-time'>18 May 2022, 15 minutes ago</p>
            <div className='newsboard_card-bottom'>
            <div className='thumbs-container'>
              <img src='/assets/thumbs-up.svg' />
              <img src='/assets/thumbs-down.svg' />
            </div>
            <div className='news_source'>Source: Times of India</div>
            </div>
            
          </div>
          <div className='newsboard_card-container'>
            <img src='/assets/newsboard/marketnews.png' className='news-image' />
            <h6>cIndiGo CEO Ronojoy Dutta to step down in September, Pieter Elbers to succeed him</h6>
            <p className='news-content'>Dutta, 71, will retire on September 30, 2022, after guiding IndiGo through the turbulent COVID-19 period, the private carrier announced.
            </p>
            <p className='news-time'>18 May 2022, 15 minutes ago</p>
            <div className='newsboard_card-bottom'>
            <div className='thumbs-container'>
              <img src='/assets/thumbs-up.svg' />
              <img src='/assets/thumbs-down.svg' />
            </div>
            <div className='news_source'>Source: Times of India</div>
            </div>
            
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Newsboard