import React from "react";
import {Helmet} from "react-helmet";

class B25 extends React.Component {
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
  <li>Ease of Movement(EMV)</li>
</ul>
<div
            className="main-blog-style"
            id="1149"
          ><Helmet>
          <title>Ease of Movement(EMV) </title>
          <meta name= " description" content="Developing a strategy for Algorithmic Trading starts with a through Backtesting on historical data of atleast 1 year. The results should be adjusted with slippage and trading costs to make sure only pure returns are considered to judge  the backtest reports" />
          <link rel="canonical" href="https://kuants.in//blog/technical-analysis/Ease-of-Movement"></link> 
      </Helmet>
            <div className="h12">Ease of Movement(EMV)</div>
            <p className="mt-3">
              Ease of Movement, as the name suggests reflects the support of
              volume in any price movement over multiple candles, i.e. it
              calculates the change in prices adjusted with a volume factor. If
              there is a significant price movement but little volume increase,
              then there is a high probability that the price movement is false,
              and EMV tries to capture exactly the same. The formula for EMV is
              as follows: <br />
            </p>
            <p className="mt-3">
              {" "}
              <b>
                EMV ={" "}
                <a
                  rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Simple-Moving-Average"
                  target="_blank"
                >
                  {" "}
                  sma
                </a>
                ((high+low)/2 - (previous high + previous
                low)/2)/((volume/100,00,00,000/(high - low)),period)
              </b>
              <br />
            </p>
            where, high, low and volume are the respective candle values and
            period is the number of candles to be considered. It can be used at{" "}
            <a rel="noopener noreferrer" href="https://kuants.in/blog/" target="_blank">
              {" "}
              kuants{" "}
            </a>{" "}
            using the following syntax: <br />
            <b>
              emv(20) <br />
            </b>
            An implementation of the same is as follows: <br />
            <b>
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Exponential-Moving-Average"
                target="_blank"
              >
                {" "}
                ema
              </a>
              (20) >{" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Exponential-Moving-Average"
                target="_blank"
              >
                {" "}
                ema
              </a>
              (40)
              <br />
            </b>
            <br />
          </div>
             
          </div></div></div></div>

              )}}

  export default B25;
