import React from "react";
import {Helmet} from "react-helmet";

class B28 extends React.Component {
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
  <li>Pivot Point(POVIT)</li>
</ul>
<div
            className="main-blog-style"
            id="1152"
          > <Helmet>
          <title>Pivot Points </title>
          <meta name= " description" content="Developing a strategy for Algorithmic Trading starts with a through Backtesting on historical data of atleast 1 year. The results should be adjusted with slippage and trading costs to make sure only pure returns are considered to judge  the backtest reports" />
          <link rel="canonical" href="https://kuants.in//blog/technical-analysis/Pivot-Point"></link> 
      </Helmet>
            <div className="h12">Pivot Point(POVIT)</div>
            The pivot point is a technical analysis indicator, or calculations,
            used to determine the overall trend of the market over different
            time frames. Its formula is :
            <p className="mt-3">
              {" "}
              <b>
                Pivot Point= (high+low+close/3)
                <br />
              </b>
            </p>
            If the price is above the pivot point, it indicates that an upward
            sentiment is more and if the price is below the pivot point, it
            indicates that a downward sentiment is more. <br />
            It can be used in{" "}
            <a rel="noopener noreferrer" href="https://kuants.in/blog/" target="_blank">
              {" "}
              kuants{" "}
            </a>{" "}
            using the following syntax: <br />
            <b> pivot() </b>
            <br />
            An implementation of the same is as follows: <br />
            <p className="mt-3">
              {" "}
              <b>
                pivot()&lt;{" "}
                <a
                  rel="noopener noreferrer" href="https://kuants.in/blog/Day-Close:-day_close"
                  target="_blank"
                >
                  {" "}
                  close
                </a>{" "}
              </b>
            </p>
            <br />
          </div>
               
          </div></div></div></div>

              )}}

  export default B28;
