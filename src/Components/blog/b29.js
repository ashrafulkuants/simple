import React from "react";
import {Helmet} from "react-helmet";

class B29 extends React.Component {
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
  <li>Standard Deviation</li>
</ul>
<div
            className="main-blog-style"
            id="1155"
          >
             <Helmet>
            <title>Standard Deviation </title>
            <meta name= " description" content="Developing a strategy for Algorithmic Trading starts with a through Backtesting on historical data of atleast 1 year. The results should be adjusted with slippage and trading costs to make sure only pure returns are considered to judge  the backtest reports" />
            <link rel="canonical" href="https://kuants.in//blog/technical-analysis/Standard-Deviation"></link> 
        </Helmet>
            <div className="h12">Standard Deviation: std()</div>
            <p className="mt-3">
              Standard Deviation gives an idea about the volatility of movement,
              higher the standard deviation, higher is the upside, downside
              movement. For momentum based strategies, the standard deviation
              needs to be as low as possible for the downside and standard
              deviation function can play a good role in controlling the entry
              points of a strategy.{" "}
            </p>
            <p className="mt-3">
              <b>Syntax: std( price or function, period) </b>
              <br />
            </p>
            Example Strategy:
            <br />
            <br />
            <br />
            To use this strategy login to{" "}
            <a rel="noopener noreferrer" href="https://kuants.in/blog/" target="_blank">
              {" "}
              kuants{" "}
            </a>
            . <br />
            In Strategy B, the first point of checking is if the 10 candle
            moving average is greater than the 20 candle moving average. If yes,
            then it checks if the volatility is decreasing through the{" "}
            <b>std()</b> function. When both the conditions are met, the long
            order is placed.
          </div>
               
          </div></div></div></div>

              )}}

  export default B29;
