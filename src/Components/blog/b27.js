import React from "react";
import {Helmet} from "react-helmet";

class B27 extends React.Component {
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
  <li>Aaron Up</li>
</ul>
<div
            className="main-blog-style"
            id="1151"
          ><Helmet>
          <title>Aaron Up </title>
          <meta name= " description" content="Developing a strategy for Algorithmic Trading starts with a through Backtesting on historical data of atleast 1 year. The results should be adjusted with slippage and trading costs to make sure only pure returns are considered to judge  the backtest reports" />
          <link rel="canonical" href="https://kuants.in//blog/technical-analysis/Aaron-Up"></link> 
      </Helmet>
            <div className="h12">Aaron Up</div>
            Aaron Up is a time-based indicator that tells the time from last
            highest price/value of the stock/formula that was seen. <br />
            Its formula is as follows: <br />
            <p className="mt-3">
              {" "}
              <b>
                {" "}
                Aaron Up= (N periods - Highest Value Since N periods)*100/(N
                periods) <br />
              </b>
            </p>
            If Aaron Up is greater than 80%, it indicators that upward movement
            was seen in the recent periods, while if Aaron Up is less than 50%,
            it indicates that the upward movement might have died out. <br />
            To use this indicator in{" "}
            <a rel="noopener noreferrer" href="https://kuants.in/blog/" target="_blank">
              {" "}
              kuants{" "}
            </a>{" "}
            , the following syntax can be used: <br />
            <p className="mt-3">
              <b>aaron_up(data, period) </b>
            </p>
            <br />
            A few implementations are below: <br />
            <p className="mt-3">
              {" "}
              <b>
                aaron_up(
                <a
                  rel="noopener noreferrer" href="https://kuants.in/blog/Day-Close:-day_close"
                  target="_blank"
                >
                  {" "}
                  close
                </a>
                ,20) > 80 aaron_up(
                <a rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Rate-of-Change" target="_blank">
                  {" "}
                  roc
                </a>
                (close,5), 20) > 80{" "}
              </b>
            </p>
            <br />
          </div>
            
          </div></div></div></div>

              )}}

  export default B27;
