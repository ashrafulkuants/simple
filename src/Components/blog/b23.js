import React from "react";
import {Helmet} from "react-helmet";

class B23 extends React.Component {
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
  <li><a href="/blog/technical-analysis/">Technical Analysis</a></li>
  <li>Rate of Change</li>
</ul>
<div
            className="main-blog-style"
            id="1146"
          ><Helmet>
          <title>Rate of Change </title>
          <meta name= " description" content="Developing a strategy for Algorithmic Trading starts with a through Backtesting on historical data of atleast 1 year. The results should be adjusted with slippage and trading costs to make sure only pure returns are considered to judge  the backtest reports" />
          <link rel="canonical" href="https://kuants.in//blog/technical-analysis/Rate-of-Change"></link> 
      </Helmet>
            <div className="h12">Rate of Change(ROC)</div>
            Rate of Change is a momentum indicator that measures the relative
            price/formula movement by finding the difference in the value of the
            latest price/ formula and that of a few candles before. Its formula
            is:
            <br />
            <b>
              ROC= (Current Value - Value n periods ago)*100/Value n periods
              ago.
              <br />{" "}
            </b>
            It gives a quantitative idea about the price/formula value changes.
            It can be used in{" "}
            <a rel="noopener noreferrer" href="https://kuants.in/blog/" target="_blank">
              {" "}
              kuants{" "}
            </a>{" "}
            using the following syntax: <br />
            <b>
              roc(data, period) <br />
            </b>
            where data can be OHLCV data or any other formula. An implementation
            is the same is as follows: <br />
            <b>
              1. (roc(close,5) > 1 <br />
            </b>
            <br />
          </div>
          
          </div></div></div></div>

              )}}

  export default B23;
