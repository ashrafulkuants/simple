import React from "react";
import {Helmet} from "react-helmet";

class B17 extends React.Component {
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
  <li>Exponential Moving Average(EMA)</li>
</ul>
<div
            className="main-blog-style"
            id="1139"
          ><Helmet>
          <title> Exponential Moving Average(SMA)</title>
          <meta name= " description" content=" Exponential Moving Average is a primary technical indicator that is used to know the market direction of a stock price"/>
          <link rel="canonical"  href="https://kuants.in/blog/technical-analysis/Exponential-Moving-Average"></link> 
      </Helmet>
            <div className="h12">Exponential Moving Average(EMA)</div>
            <br />
            <br />
            An Exponential Moving Average is a more dynamic form of{" "}
            <a rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Simple-Moving-Average" target="_blank">
              {" "}
              Simple Moving Average{" "}
            </a>
            . It calculates the price or data average by giving higher
            importance to recent data values in time as compared to earlier
            values. The mathematical formula for EMA is as below: <br />
            <b>
              EMA1= a1*(2/(n+1)) + EMA2*(1- 2/(n+1))
              <br />
            </b>
            where EMA1 is the latest value of the indicator, a1 is the latest
            price or value of data or formula, n is the total number of candles
            to be considered in evaluating EMA. It is considered to move faster
            than the SMA as recent data is given more importance. An EMA(
            <a rel="noopener noreferrer" href="https://kuants.in/blog/Day-Close:-day_close" target="_blank">
              {" "}
              close{" "}
            </a>
            ,5) will be closer to the current price as compared to{" "}
            <a rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Simple-Moving-Average" target="_blank">
              {" "}
              SMA{" "}
            </a>
            (
            <a rel="noopener noreferrer" href="https://kuants.in/blog/Day-Close:-day_close" target="_blank">
              {" "}
              close{" "}
            </a>
            ,5). This closeness results in generating a better idea about the
            movement of stock prices. EMA can be used in{" "}
            <a rel="noopener noreferrer" href="https://kuants.in" target="_blank">
              {" "}
              Kuants
            </a>{" "}
            using the following syntax: <br />
            <b>
              ema(data, period)
              <br />{" "}
            </b>
            where data can be open, high, low, close, volume or any other
            formula or a mathematical combination of both. Using EMA with data:{" "}
            <br />
            <b>
              ema(
              <a rel="noopener noreferrer" href="https://kuants.in/blog/Day-Close:-day_close" target="_blank">
                {" "}
                close
              </a>
              ,5) > ema(close,10) <br />
            </b>
            Using EMA with formulas or other technical indicators: <br />
            <b>
              ema(
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Volume-Weighted-Moving-Average"
                target="_blank"
              >
                vwap
              </a>
              (5),5) > ema(vwap(10),10)
              <br />{" "}
            </b>
            Using EMA with mathematical combinations:
            <br />
            <b>
              ema( close + high + volume, 5) > ema( close + high + volume, 10){" "}
              <br />
            </b>
            <br />
          </div>
               
          </div></div></div></div>

              )}}

  export default B17;
