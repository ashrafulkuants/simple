import React from "react";
import {Helmet} from "react-helmet";

class B52 extends React.Component {
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
  <li>What are the details I need to look into to judge the quality of a
              SMART Algorithm ?</li>
</ul>
<div
            className="main-blog-style"
            id="1127"
          >
            <Helmet>
          <title>What are the details I need to look into to judge the quality of a
              SMART Algorithm ?</title>
          <meta name= " description" content="SMART Algorithms are a list of curated readymade algos developed for Indian Stock Markets on Algolab. As with any other investment product, these algos do not gaureentee any fixed returns but their hostrical results represent a good performance."/>
          <link rel="canonical" href="https://kuants.in/blog/smart/What-are-the-details-I-need-to-look-into-to-judge-the-quality-of-a-SMART-Algorithm"></link> 
      </Helmet>
            <div className="h12">
              What are the details I need to look into to judge the quality of a
              SMART Algorithm ?
            </div>
            <br />
            <br />
            <p className="mt-3">
              To make an informed decision on any{" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/smart/What-is-SMART-Algorithms"
                target="_blank"
              >
                SMART algorithm
              </a>{" "}
              , the following parameters are of prime importance:
              <h6> 1. Equity Curve:</h6> It is the historical graph showcasing
              day wise cumulative profit and loss over the entire{" "}
              <a rel="noopener noreferrer" href="https://kuants.in/blog/algolab/Backtesting-at-Kuants" target="_blank">
                {" "}
                backtest
              </a>{" "}
              period. An ideal equity curve is a straight line graph with minor
              deviations over the portfolio. A sample is attached.
            </p>
            <p className="mt-3">
              <h6> 2. Sharpe Ratio:</h6> Sharpe Ratio tells about the stability
              of the algorithm. The industry standard value of Sharpe is 1.5
              over the portfolio.
              <h6>3. Max Drawdown:</h6> It is the maximum loss that was incurred
              during the backtest period and reflects the amount of capital that
              might be depleted during the worst course of an algorithm. It is a
              reflection of risk associated and should be noted carefully.
              <h6>4. Hit Ratio:</h6> The ratio of number of times a profitable
              trade was made to the total number of trades is the hit ratio. For
              a standard algorithm, the hit ratio should be greater than 0.51
              i.e. atleast 51% of the total trades were profitable.{" "}
            </p>
            <p className="mt-3">
              To create your own SMART algorithm visit{" "}
              <a rel="noopener noreferrer" href="https://smart.kuants.in" target="_blank">
                SMART algorithm
              </a>{" "}
              now.
            </p>
            <p className="mt-3">
              <h3>Relevent Articles:</h3>
            </p>
            <a
              rel="noopener noreferrer" href="https://kuants.in/blog/smart/What-is-SMART-Algorithms"
              target="_blank"
            >
              What is SMART Algorithms
            </a>
            <br />
            <a
              rel="noopener noreferrer" href="https://kuants.in/blog/smart/How-to-subscribe-to-a-SMART-Algorithm"
              target="_blank"
            >
              How to subscribe to SMART Algorithm
            </a>
            <br />
            <a
              rel="noopener noreferrer" href="https://kuants.in/blog/smart/What-are-the-benefits-of-using-SMART-Algorithms"
              target="_blank"
            >
              What are the benefits of using SMART Algorithm ?
            </a>{" "}
            <br />
            <a
              rel="noopener noreferrer" href="https://kuants.in/blog/stock-markets/What-are-the-different-market-instruments"
              target="_blank"
            >
              What are the different market instruments ?
            </a>
          </div>
              
          </div></div></div></div>

              )}}

  export default B52;
