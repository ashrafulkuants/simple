import React from "react";
import {Helmet} from "react-helmet";

class B21 extends React.Component {
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
  <li>True Range(TR)</li>
</ul>
<div
            className="main-blog-style"
            id="1143"
          >
            <Helmet>
          <title>True Range(TR)</title>
          <meta name= " description" content=" True Range is a volatility indicator, higher the value more is the volaility of a stock"/>
          <link rel="canonical" href="https://kuants.in/blog/technical-analysis/True-Range"></link> 
      </Helmet>
            <div className="h12">True Range(TR)</div>
            <br />
            <br />
            True Range is a volatility indicator that tells the variation of
            price movement that was observed in a recent candle. It compares the
            High, Low and closing prices of the previous candle to give an
            estimate of the recent movements in the prices. The formula for TR
            is as follows: <br />
            <b>
              TR= maximum of ( high - close, high - low, close - low) <br />
            </b>
            While indicators like SMA, EMA, RSI or MACD give the sense of
            direction calculated over a number of candles, TR uses just the
            values of the recent candle. To use TR in{" "}
            <a rel="noopener noreferrer" href="https://kuants.in/blog/" target="_blank">
              {" "}
              kuants
            </a>
            , the following is the syntax:
            <br />
            tr() An example of implementation is as follows: <br />
            <b>
              (tr() >{" "}
              <a rel="noopener noreferrer" href="https://kuants.in/blog/Delay:-delay" target="_blank">
                delay
              </a>
              (
              <a rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/True-Range" target="_blank">
                tr
              </a>
              (),1)) & (
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Moving-Average-Convergence-Divergence"
                target="_blank"
              >
                macd > 0)
              </a>
            </b>
            <br />
          </div>
              
          </div></div></div></div>

              )}}

  export default B21;
