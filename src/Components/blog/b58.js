import React from "react";
import {Helmet} from "react-helmet";

class B58 extends React.Component {
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
  <li><a href="/blog/algorithmic-trading">Algorithmic Trading</a></li>
  <li>What are the Components of Algorithmic Trading?</li>
</ul>
<div
            style={{ display: "none" }}
            className="main-blog-style"
            id="1104"
          > <Helmet>
          <title>What are the Components of Algorithmic Trading?</title>
          <meta name= " description" content="              For performing algorithmic trading there are two major components,
              one is the testing of theoretical data and the other is live,"/>
          <link rel="canonical" href="https://kuants.in/blog/What-are-the-Components-of-Algorithmic-Trading"></link> 
      </Helmet>
            <div className="h12">
              What are the Components of Algorithmic Trading?
            </div>

            <br />
            <br />
            <p className="mt-3">
              For performing algorithmic trading there are two major components,
              one is the testing of theoretical data and the other is live,
              which people do after they gain certain level of confidence from{" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Introduction-to-Backtesting"
                target="_blank"
              >
                {" "}
                backtesting
              </a>{" "}
              of the strategy.
            </p>
            <p className="mt-3">
              <h3> a) Back testing system</h3>{" "}
            </p>
            <p className="mt-3">
              A{" "}
              <a rel="noopener noreferrer" href="https://kuants.in/blog/algolab/Backtesting-at-Kuants" target="_blank">
                {" "}
                backtest
              </a>{" "}
              basically refers to the application of{" "}
            
                trading strategy
              rules to a set of historical pricing data.That is, if we define a
              set of mechanisms for entry and exit into a portfolio of assets,
              and apply those rules to historical pricing data of those assets,
              we can attempt to understand the performance of this "trading
              strategy" that might have been attained in the past. The
              importance of this strategy is derived from the fact that it tells
              you the market conditions when your strategy fails and how you can
              and or may change it. So, it is very important as it gives you
              like a performance card of your strategy, allows you to tune it or
              change it accordingly so that it never fails and is able to
              outperform the market. This is the part where you understand about
              your strategy in-depths. It tells you about the performing areas
              of your strategy as well as non performing areas. It gives you the
              real check on your strategy and it’s robustness.
            </p>
            <p className="mt-3">
              <h3> b) Live Execution System</h3>{" "}
            </p>
            <p className="mt-3">
              The application of this{" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/algolab/Backtest-First-Strategy"
                target="_blank"
              >
                backtested
              </a>{" "}
              strategy in the live market is called live execution system. After
              in depth analysis of the strategy in the backtesting phase and
              tuning it to the realities of the market the strategy is finally
              bought into the market. In simple words the even if you didn’t
              understand what we discussed earlier, it is simply the application
              of the buy sell rules that we developed in the backtesting stage
              to the live markets, and realise actual profits or losses out of
              it. It is the actual buying and selling of the security or
              portfolio of securities in the live markets. This is where you
              understand how your strategy performs actually. The decisions here
              as well are based on the live market data and trading strategy
              with the help of which analysis of the securities is done. Then
              the information regarding the trade is generated and or taken from
              the user and the order is made. After making the order, they are
              managed by managing the pending orders, they are routed to
              different exchanges, then the submitted orders are managed. Based
              on the above discussed features of the live execution system it
              makes it extremely useful and convenient.
            </p>
            <p className="mt-3">
              To make your own Algorithms click on:{" "}
              <a rel="noopener noreferrer" href="https://kuants.in" target="_blank">
                kuants.in
              </a>
            </p>
            <p className="mt-3">
              <h3>Relevent articles</h3>
            </p>
            <a rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/What-is-Algo-trading" target="_blank">
              What is Algo trading?
            </a>
            <br />
            <a
              rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Benefits-of-Algo-trading"
              target="_blank"
            >
              {" "}
              Benefits of Algo trading
            </a>
            <br />
            <a
              rel="noopener noreferrer" href="https://kuants.in/blog/algolab/Components-of-a-Strategy"
              target="_blank"
            >
              Components of a Strategy
            </a>
            <br />
            <a
              rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/What-are-the-requirements-of-Algorithmic-Trading"
              target="_blank"
            >
              Requirements of algorithmic trading
            </a>
            <br />
            <a
              // rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/All-you-need-to-know-about-Algotrading"
              // target="_blank"
            >
              All you need to know about AlgoTrading
            </a>
            <br />
          </div>
                     
          </div></div></div></div>

              )}}

  export default B58;
