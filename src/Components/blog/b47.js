import React from "react";
import {Helmet} from "react-helmet";

class B47 extends React.Component {
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
  <li>Tear Sheet in algotrading</li>
</ul>
<div
            className="main-blog-style"
            id="1122"
          >
                                          <Helmet>
            <title>Tear Sheet in algotrading</title>
            <meta name= " description" content="A Tear Sheet is a detailed report on strategy performance during its backtesting period. A good tear sheet has an Equtiy Curve, Sharpe ratio, Drawdowns, Success Ratios etc"/>
            <link  rel="canonical" href="https://kuants.in/blog/algolab/Setting-Target-and-Stoploss"></link> 
        </Helmet>
            <div className="h12">Tear Sheet in algotrading</div>

            <br />
            <br />
            <p className="mt-3">
              {" "}
              Tear sheet shows a complete analysis of the results of a{" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Introduction-to-Backtesting"
                target="_blank"
              >
                backtested{" "}
              </a>{" "}
              strategy. It gives insights on how well the strategy has
              performed, level of risk associated with the strategy, the market
              conditions that are favourable and measures of stability of the
              strategy. It has the following components:
              <p className="mt-3">
                <h3>1. Equity Curve:</h3> A graphical representation of how the
                capital invested has grown or decreased over the backtest period
                based on trades taken by the strategy. An example is attached:
              </p>{" "}
              <p className="mt-3">
                {" "}
                <h3>2. Month on Month Breakdown:</h3> A visualization of monthly
                performance of the strategy in the backtest period along with
                compassion from a benchmark index. Helps in identifying the
                markets where the strategy works well and where it doesn't.{" "}
              </p>
              <p className="mt-3">
                {" "}
                <h3>3. Portfolio Diversification:</h3> Tells about the amount of
                capital invested in each sector. Ideally, a single sector should
                have over 20 to 25% of capital allocation.{" "}
              </p>
              <p className="mt-3">
                {" "}
                <h3>4. Result Metrics Table:</h3> A quantitative measure of the
                performance of the strategy stock wise. The significance and
                meaning of each metric can be found here.{" "}
              </p>
            </p>
            <p className="mt-3">
              To know more about varoius functions and to create your own
              stategy login to{" "}
              <a rel="noopener noreferrer" href="https://algolab.kuants.in/backtest/" target="_blank">
                https://algolab.kuants.in/backtest/
              </a>{" "}
              .
            </p>
            <p className="mt-3">
              <h3>Relevent Articles:</h3>
            </p>
            <a rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/What-is-Algo-trading" target="_blank">
              {" "}
              What is Algo Trading?{" "}
            </a>
            <br />
            <a
              rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Benefits-of-Algo-trading"
              target="_blank"
            >
              {" "}
              Benefits of algo Trading
            </a>
            <br />
            <a rel="noopener noreferrer" href="https://kuants.in/blog/stock-markets/Stock-Trading-in-India" target="_blank">
              {" "}
              Stock Trading in India
            </a>
            <br />
            <a
              // rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/All-you-need-to-know-about-Algotrading"
              // target="_blank"
            >
              {" "}
              All you need to know about AlgoTrading
            </a>
            <br />
            <a rel="noopener noreferrer" href="https://kuants.in/blog/algolab/Backtest-First-Strategy" target="_blank">
              {" "}
              Backtest your first strategy
            </a>
            <br />
          </div>
              
          </div></div></div></div>

              )}}

  export default B47;
