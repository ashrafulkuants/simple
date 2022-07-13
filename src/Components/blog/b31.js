import React from "react";
import {Helmet} from "react-helmet";

class B31 extends React.Component {
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
  <li><a href="/blog/technical-analysis">Technical Analysis</a></li>
  <li>Correlation</li>
</ul>
<div
            className="main-blog-style"
            id="1158"
          > <Helmet>
          <title>Correlation </title>
          <meta name= " description" content="Developing a strategy for Algorithmic Trading starts with a through Backtesting on historical data of atleast 1 year. The results should be adjusted with slippage and trading costs to make sure only pure returns are considered to judge  the backtest reports" />
          <link rel="canonical" href="https://kuants.in//blog/technical-analysis/Correlation"></link> 
      </Helmet>
            <div className="h12">Correlation: corr()</div>
            <p className="mt-3">
              Correlation compares two different data points and returns how
              closely are both following each other. Its value ranges from -1 to
              1. Value of -1 indicates that the two data points change in
              complete opposite manner while value of 1 indicates that the two
              data points change in sync to each other, i.e. both go up and down
              almost at equal times. It is useful for confirming the price and
              volume patterns.{" "}
            </p>

            <p className="mt-3">
              <b>
                Syntax: corr(data 1 or function 1, data 2 or function 2 ,
                period){" "}
              </b>
              <br />
            </p>

            <p className="mt-3">
              Example Strategy:
              <br />
              <b>
                Long: corr(
                <a
                  rel="noopener noreferrer" href="https://kuants.in/blog/Day-Close:-day_close"
                  target="_blank"
                >
                  {" "}
                  close
                </a>
                , volume, 20) > corr(close, volume, 30)
                <br />
                Long: (corr(close,{" "}
                <a
                  rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Volume-Weighted-Moving-Average"
                  target="_blank"
                >
                  {" "}
                  vwap
                </a>
                (20), 20) > corr(
                <a
                  rel="noopener noreferrer" href="https://kuants.in/blog/Day-Close:-day_close"
                  target="_blank"
                >
                  {" "}
                  close
                </a>
                , vwap(20), 30)) & ( close >{" "}
                <a
                  rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Simple-Moving-Average"
                  target="_blank"
                >
                  {" "}
                  sma
                </a>
                (close,20))
              </b>{" "}
              <br />
            </p>

            <br />

            <p className="mt-3">
              To use the strategy on a backtesting platform click on{" "}
              <a rel="noopener noreferrer" href="https://algolab.kuants.in/backtest/" target="_blank">
                kuants backtesting algolab
              </a>
            </p>
          </div>
              
          </div></div></div></div>

              )}}

  export default B31;
