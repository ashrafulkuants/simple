import React from "react";
import {Helmet} from "react-helmet";

class B45 extends React.Component {
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
  <li><a href="/blog/algolab">Algolab</a></li>
  <li>Short Strategy</li>
</ul>
<div
            className="main-blog-style"
            id="1120"
          >
                  <Helmet>
            <title>Short Strategy</title>
            <meta name= " description" content="A Short Strategy takes a Sell position whenever the strategy conditions are met. It works well in bearish markets"/>
            <link rel="canonical" href="https://kuants.in/blog/algolab/Short-Strategy"></link> 
        </Helmet>
            <div className="h12">Short Strategy</div>
            <br />
            <br />
            <p className="mt-3">
              Short{" "}
              <a
                // rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Developing-investment-strategies-for-Algorithmic-Trading"
                // target="_blank"
              >
                Strategy
              </a>
              , in general, refers to a short a stock, i.e. sell it before
              buying it. It is applicable only for Intraday Trades, i.e. where
              EOD is set as Yes. It can be found on my Create Strategy page by
              clicking on the Add Short Strategy option as shown below. A few
              examples are as below: Mathematical Meaning: Sell when the
              previous minute's close price is higher tha n the previous
              minute's opening price, Practical Meaning: Short Sell the stock
              when the stock price has gone down in the last minute. Short
              Strategy: <b>table</b>
              <p className="mt-3">
                {" "}
                Mathematical Meaning: Short Sell when the{" "}
                <a
                  rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Simple-Moving-Average"
                  target="_blank"
                >
                  Simple Moving Average
                </a>{" "}
                of Close price in last 5 minutes is lower than that in last 10
                minutes AND an{" "}
                <a
                  rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Exponential-Moving-Average"
                  target="_blank"
                >
                  Exponential moving average
                </a>{" "}
                of volume in last 5 minutes is lower than that in last 10
                minutes.{" "}
              </p>
              <p className="mt-3">
                {" "}
                Practical Meaning: Short Sell when price and volume, both have
                moved over recently in the last 5 minutes.
              </p>
              For more information, please visit Investopedia.
            </p>{" "}
            Login{" "}
            <a rel="noopener noreferrer" href="https://algolab.kuants.in/backtest/" target="_blank">
              https://algolab.kuants.in/backtest/
            </a>{" "}
            to create your own short strategy.
          </div>
                     
          </div></div></div></div>

              )}}

  export default B45;
