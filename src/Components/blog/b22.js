import React from "react";
import {Helmet} from "react-helmet";

class B22 extends React.Component {
    constructor(props) {
        super(props);
    
     
        this.state = {
          data: [],
          phone: "",
        };
      }

      componentWillMount() {
       
      }    

      render() {
        return (
          <div className="mainArticleContainer">
            <div>
         
        <div className="row mx-2 mt-4">
          <div className="col col-xl-2 mt-4 text-center">
<img src="/images/books.png" width="50%"></img>
<ul>
<li className="border-bottom  sidebarblog"><a href="/blog" target="blank"> All Articles</a></li>

  <li className="border-bottom sidebarblog"><a href="/blog/algorithmic-trading" target="blank">Algorithmic Trading</a></li>
  <li className="border-bottom sidebarblog"><a href="/blog/technical-analysis" target="blank"> Technical Analysis</a></li>
  <li className="border-bottom sidebarblog"><a href="/blog/stock-markets" target="blank"> Stock Markets</a></li>
  <li className="border-bottom sidebarblog"><a href="/blog/algolab" target="blank">Algolab</a></li>
  <li className="border-bottom sidebarblog"><a href="/blog/smart-marketplace" target="blank">SMART Marketplace</a></li>

</ul>
</div>
<div className="col col-xl-8 mt-4 ">
<ul class="breadcrumb">
  <li><a href="/">Home</a></li>
  <li><a href="/blog">Blog</a></li>
  <li><a href="/blog/technical-analysis/">Technical Analysis</a></li>
  <li>Average True Range(ATR)</li>
</ul>
<div
            className="main-blog-style"
            id="1144"
          ><Helmet>
          <title>Average True Range</title>
          <meta name= " description" content="Average True Range is a volatility indicator, higher the value more is the volaility of a stock"/>
          <link rel="canonical" href="https://kuants.in/blog/technical-analysis/Average-True-Range"></link> 
      </Helmet>
            <div className="h12">Average True Range(ATR)</div>
            <br />
            <br />
            Average True Range, as the name suggests is the average value of the
            True Range indicator calculated over multiple candles. The average
            is used to even out any erratic or abnormal volatility that might
            have been observed in the last candle. The formula for ATR is as
            follows: ATR={" "}
            <a rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Simple-Moving-Average" target="_blank">
              {" "}
              sma
            </a>
            (
            <a rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/True-Range" target="_blank">
              {" "}
              tr
            </a>
            (), period) <br />
            To use ATR in{" "}
            <a rel="noopener noreferrer" href="https://kuants.in/blog/" target="_blank">
              {" "}
              kuants
            </a>{" "}
            following is the syntax:
            <p className="mt-3">
              atr(period) where the period is the number of candles to be
              considered.{" "}
            </p>
            An example of ATR is as follows:
            <br />
            <br />
          </div>
              
          </div></div></div></div>

              )}}

  export default B22;
