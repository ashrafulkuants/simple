import React from "react";
import {Helmet} from "react-helmet";

class B33 extends React.Component {
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
  <li>PRevious Day Values-Part 1</li>
</ul>
<div
            className="main-blog-style"
            id="1160"
          > <Helmet>
          <title>Previous Day Values: Part 1 </title>
          <meta name= " description" content="Developing a strategy for Algorithmic Trading starts with a through Backtesting on historical data of atleast 1 year. The results should be adjusted with slippage and trading costs to make sure only pure returns are considered to judge  the backtest reports" />
          <link rel="canonical" href="https://kuants.in//blog/technical-analysis/previous-day-high"></link> 
      </Helmet>
            <div className="h12">Day High: day_high()</div>
            <b>The day_high()</b> function returns the value of highest price of
            any previous day.
            <br />
            <b> Syntax: day_high(period) </b>
            <br />
            Example:
            <br />
            <b>
              {" "}
              Long:{" "}
              <a rel="noopener noreferrer" href="https://kuants.in/blog/Day-Close:-day_close" target="_blank">
                {" "}
                close
              </a>
              > day_high(2)
            </b>{" "}
            <br />
            <br />
            The above condition will place a buy order when the latest candle
            close is greater than the value of previous 2 day's high.
            <br />
            To try the above strategy login to{" "}
            <a rel="noopener noreferrer" href="https://algolab.kuants.in/backtest" target="_blank">
              {" "}
              kuants{" "}
            </a>
          </div>
            
          </div></div></div></div>

              )}}

  export default B33;
