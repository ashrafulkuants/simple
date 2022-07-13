import React from "react";
import {Helmet} from "react-helmet";

class B24 extends React.Component {
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
  <li>On Balance Volume</li>
</ul>
<div
            className="main-blog-style"
            id="1147"
          ><Helmet>
          <title>On Balance Volume </title>
          <meta name= " description" content="Developing a strategy for Algorithmic Trading starts with a through Backtesting on historical data of atleast 1 year. The results should be adjusted with slippage and trading costs to make sure only pure returns are considered to judge  the backtest reports" />
          <link rel="canonical" href="https://kuants.in//blog/technical-analysis/On-Balance-Volume"></link> 
      </Helmet>
            <div className="h12">On Balance Volume(OBV)</div>
            On Balance Volume is a pure volume indicator that gives a net volume
            increase depending on whether that price has increased or decreased.
            Its formula is as follows: <br />
            <p className="mt-3">
              <b>
                OBV= previous OBV + volume(if price has increased in the
                previous candle)- volume(if price has decreased in the previous
                candle)
              </b>
            </p>
            <br />
            It can be used in{" "}
            <a rel="noopener noreferrer" href="https://kuants.in/blog/" target="_blank">
              {" "}
              kuants{" "}
            </a>{" "}
            using the following syntax: <br />
            <p className="mt-3">
              {" "}
              <b>
                obv(period) <br />
              </b>
            </p>
            where, the period is the number of candles to be considered. <br />
            An implementation of the same is as follows: <br />
            <p className="mt-3">
              <b>
                (obv(20)> obv(10))& ( close > delay(close,1))
                <br />
              </b>
            </p>
            <br />
          </div>
              
          </div></div></div></div>

              )}}

  export default B24;
