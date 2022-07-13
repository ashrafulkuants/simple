import React from "react";
import {Helmet} from "react-helmet";

class B34 extends React.Component {
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
  <li>Previous Day Values- Part 2 </li>
</ul>
<div
            className="main-blog-style"
            id="1161"
          >
             <Helmet>
            <title>Previous Day Values: Part 2 </title>
            <meta name= " description" content="Developing a strategy for Algorithmic Trading starts with a through Backtesting on historical data of atleast 1 year. The results should be adjusted with slippage and trading costs to make sure only pure returns are considered to judge  the backtest reports" />
            <link rel="canonical" href="https://kuants.in//blog/technical-analysis/previous-day-close"></link> 
        </Helmet>
            <div className="h12">Day Close: day_close()</div>
            The <b>day_close()</b> function returns the value of close price of
            any previous day.
            <br />
            <b>Syntax: day_close(period) </b>
            <br />
            Example:
            <br />
            <b>
              Long: close > day_close(2)
              <br />{" "}
            </b>
            <br />
            The above condition will place a buy order when the latest candle
            close is greater than the value of previous 2 day's close.
            <br />
            To backtest the above strategy click{" "}
            <a rel="noopener noreferrer" href="https://algolab.kuants.in/backtest/" target="_blank">
              {" "}
              backtest{" "}
            </a>
            <br />
            or login{" "}
            <a rel="noopener noreferrer" href="https://kuants.in/blog/" target="_blank">
              {" "}
              kuants{" "}
            </a>
          </div>
             
          </div></div></div></div>

              )}}

  export default B34;
