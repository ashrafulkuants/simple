import React from "react";
import {Helmet} from "react-helmet";

class B16 extends React.Component {
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
  <li>Simple Moving Average(SMA)</li>
</ul>
<div
            className="main-blog-style"
            id="1138"
          ><Helmet>
          <title> Simple Moving Average(SMA)</title>
          <meta name= " description" content=" Simple Moving Average is a primary technical indicator that is used to know the market direction of a stock price"/>
          <link rel="canonical" href="https://kuants.in/blog/technical-analysis/Simple-Moving-Average"></link> 
      </Helmet>
            <div className="h12">Simple Moving Average(SMA)</div>
            <br />
            <br />
            A Simple Moving Average is one of the most commonly used indicators,
            used to track a trend behavior. It is calculated by calculating the
            average of last n data candles. The mathematical formula for the
            same is as below:
            <br />
            SMA= (a1+ a2+a3+a4 ...a(n) )/n
            <br />
            w here a1,a2,a3,a4..a(n) can be any data points of last n candles
            selected.
            <br />
            The advantage of SMA is that it helps in "cleaning the data" from
            minor erratic behaviors. Being a trend based indicator, it is used
            in pairs with itself to give a signal of possible upward or downward
            movement of stock prices or any other functions written inside it.
            SMA can be used in{" "}
            <a rel="noopener noreferrer" href="https://kuants.in/blog/" target="_blank">
              {" "}
              kuants{" "}
            </a>{" "}
            using the following syntax: <br />
            sma(data, period) <br />
            where data can be open, high, low, close, volume or any other
            formula or a mathematical combination of both. Using SMA with data:{" "}
            <br />
            <b>
              {" "}
              sma(
              <a rel="noopener noreferrer" href="https://kuants.in/blog/Day-Close:-day_close" target="_blank">
                close
              </a>
              ,5) > sma(close,10) <br />
            </b>
            Using SMA with formulas or other technical indicators: <br />
            <b>
              {" "}
              sma({" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Volume-Weighted-Moving-Average"
                target="_blank"
              >
                {" "}
                vwap{" "}
              </a>
              (5), 5) > sma(
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Volume-Weighted-Moving-Average"
                target="_blank"
              >
                {" "}
                vwap{" "}
              </a>
              (10),10)
            </b>{" "}
            <br />
            Using SMA with mathematical combinations: <br />
            <b>
              {" "}
              sma(
              <a rel="noopener noreferrer" href="https://kuants.in/blog/Day-Close:-day_close" target="_blank">
                close
              </a>{" "}
              + high + volume, 5) > sma( close + high + volume, 10) <br />
            </b>
            <br />
          </div>
                    
          </div></div></div></div>

              )}}

  export default B16;
