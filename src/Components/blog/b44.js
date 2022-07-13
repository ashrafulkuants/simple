import React from "react";
import {Helmet} from "react-helmet";

class B44 extends React.Component {
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
  <li>Long Strategy</li>
</ul>
<div
            className="main-blog-style"
            id="1119"
          >
              <Helmet>
            <title>Long Strategy</title>
            <meta name= " description" content="A Long Strategy takes a buy position whenever the strategy conditions are met. Its the simplest type of strategies that works well in bullish markets"/>
            <link rel="canonical" href="https://kuants.in/blog/algolab/Long-Strategy"></link> 
        </Helmet>
            <div className="h12">Long Strategy</div>
            <br />
            <br />{" "}
            <p className="mt-3">
              Long Strategy, in general, refers to a buy position in any market
              instrument. At{" "}
              <a rel="noopener noreferrer" href="https://kuants.in" target="_blank">
                kuants
              </a>
              , a Long Strategy input is a condition on when to buy a particular
              stock. It can be found on my Create Strategy page as shown below:
            </p>
            To know about the above strategy click:{" "}
            <a
              rel="noopener noreferrer" href="http://kuants.in/blog/technical-analysis/Volume-Weighted-Moving-Average"
              target="_blank"
            >
              VWAP
            </a>
            <p className="mt-3">A few examples are as below:</p>
            <p className="mt-3">
              <b>
                Long Strategy:{" "}
                <a
                  rel="noopener noreferrer" href="https://kuants.in/blog/Day-Close:-day_close"
                  target="_blank"
                >
                  {" "}
                  close
                </a>
                >{" "}
                <a rel="noopener noreferrer" href="https://kuants.in/blog/Day-Open:-day_open" target="_blank">
                  {" "}
                  open
                </a>
              </b>
            </p>
            <p className="mt-3">
              <h6>Mathematical Meaning:</h6> Buy when the previous minute's
              close price is higher than the previous minute's opening price,
              Practical Meaning: Buy when the stock price has gone up in the
              last minute.
            </p>
            <p className="mt-3">
              {" "}
              <b>
                Long Strategy: (
                <a
                  rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Simple-Moving-Average"
                  target="_blank"
                >
                  sma
                </a>
                (close,5) >{" "}
                <a
                  rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Simple-Moving-Average"
                  target="_blank"
                >
                  sma
                </a>
                (close,10))& ({" "}
                <a
                  rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Exponential-Moving-Average"
                  target="_blank"
                >
                  ema
                </a>
                (volume,5) >{" "}
                <a
                  rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Exponential-Moving-Average"
                  target="_blank"
                >
                  ema
                </a>
                (volume,10))
              </b>
            </p>
            <p className="mt-3">
              {" "}
              <h6>Mathematical Meaning:</h6> buy when the Simple Moving Average
              of Close price in last 5 minutes is higher than that in last 10
              minutes AND an Exponential moving average of volume in last 5
              minutes is higher than that in last 10 minutes. Practical Meaning:
              Buy when price and volume, both have moved up recently in the last
              5 minutes.
            </p>
            Login{" "}
            <a rel="noopener noreferrer" href="https://algolab.kuants.in/backtest/" target="_blank">
              https://algolab.kuants.in/backtest/
            </a>{" "}
            to create your own long strategy now. Kuants provide user friendly{" "}
            <a
              rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Introduction-to-Backtesting"
              target="_blank"
            >
              backtesting
            </a>{" "}
            platform.
          </div>
              
          </div></div></div></div>

              )}}

  export default B44;
