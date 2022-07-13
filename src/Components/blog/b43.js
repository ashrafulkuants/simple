import React from "react";
import {Helmet} from "react-helmet";

class B43 extends React.Component {
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
  <li>Backtest First Strategy</li>
</ul>
<div
            className="main-blog-style"
            id="1118"
          >
                                                                       <Helmet>
            <title>Backtest First Strategy</title>
            <meta name= " description" content="Indian Stock Market Historical Data is available, with a lowest frequency of 1 minute and a time period of 4 years for backtesting"/>
            <link rel="canonical" href="https://kuants.in/blog/algolab/Backtest-First-Strategy"></link> 
        </Helmet>
            <div className="h12">Backtest First Strategy</div>

            <br />
            <br />
            <p className="mt-3">
              <h3>Step 1:</h3> Login to{" "}
              <a rel="noopener noreferrer" href="https://kuants.in" target="_blank">
                https://kuants.in
              </a>
              .<h3>Step 2:</h3>Sign up at Algolab.
              <h3>Step 3:</h3> Here you can create your own strategies in{" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Introduction-to-Backtesting"
                target="_blank"
              >
                {" "}
                backtesting
              </a>{" "}
              menu.{" "}
            </p>
            <p className="mt-3">
              Once the{" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/algolab/Setting-the-Backtesting-Environment"
                target="_blank"
              >
                {" "}
                backtesting environment
              </a>{" "}
              has been set up, we can begin creating a new strategy. Kuants
              provide easy and user friendly platform to do backtesting. A{" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/AlgoTrading-How-execution-strategies-are-used-in-financial-markets"
                target="_blank"
              >
                {" "}
                strategy{" "}
              </a>{" "}
              is a quantitative trading logic, which when true, will take a buy
              or a sell action.
            </p>

            <p className="mt-3">
              The above logic guides the backtest to buy a stock when the{" "}
              <a rel="noopener noreferrer" href="https://Volume-Weighted-Moving-Average" target="_blank">
                {" "}
                Volume Weighted Average
              </a>{" "}
              price of closing price of last 5 period is greater than the candle
              high of the current close.{" "}
            </p>
          </div>
            
          </div></div></div></div>

              )}}

  export default B43;
