import React from "react";
import {Helmet} from "react-helmet";

class B18 extends React.Component {
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
  <li>Volume Weighted Moving Average(VWAP)</li>
</ul>
<div
            className="main-blog-style"
            id="1140"
          ><Helmet>
          <title> Volume Weighted Moving Average(VWAP)</title>
          <meta name= " description" content=" Volume Weighted Moving Average is a primary technical indicator that is used to know the market direction of a stock price"/>
          <link rel="canonical" href="https://kuants.in/blog/technical-analysis/Volume-Weighted-Moving-Average"></link> 
      </Helmet>
            <div className="h12">Volume Weighted Moving Average(VWAP)</div>
            <br />
            <br />
            A Volume Weighted Moving Average is a time series of stock price
            adjusted with the volume candle, i.e. instead of simply taking the
            arithmetic average of the stock prices, the volume is used as
            weights. As an example, an average is (a1+a2+a3+a4)/4. <br />
            A VWAP is (a1*v1+a2*v2+a3+v3+a4*v4)/(v1+v2+v3+v4)
            <br />
            where a1,a2,a3 and a4 are closing prices of the 1-minute candle
            while v1,v2,v3, and v4 are a volume in each candle. The advantage of
            VWAP is that it has components of both price and volume in a single
            time series. And as we all know, a combination of price and
            volume-based strategies are often better performing as compared to
            only price movement or only volume movement-based strategies. VWAP
            can be used in{" "}
            <a rel="noopener noreferrer" href="https://kuants.in" target="_blank">
              {" "}
              Kuants
            </a>{" "}
            as using the following syntax: VWAP(period) where the period is the
            number of candles to be used while calculating VWAP. A Simple
            Strategy using VWAP is as follows: <br />
            <br />
          </div>
                   
          </div></div></div></div>

              )}}

  export default B18;
