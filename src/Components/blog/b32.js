import React from "react";
import {Helmet} from "react-helmet";

class B32 extends React.Component {
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
  <li>Delay</li>
</ul>
<div
            className="main-blog-style"
            id="1159"
          >
             <Helmet>
            <title>Delay Function </title>
            <meta name= " description" content="Developing a strategy for Algorithmic Trading starts with a through Backtesting on historical data of atleast 1 year. The results should be adjusted with slippage and trading costs to make sure only pure returns are considered to judge  the backtest reports" />
            <link rel="canonical" href="https://kuants.in//blog/technical-analysis/previous-day-low"></link> 
        </Helmet>
            <div className="h12">Delay: delay()</div>
            <p className="mt-3">
              {" "}
              Delay function is used to fetch previous values of a function or
              data. It can be useful to compare values or operators across
              different points. <br />
              <b>
                Syntax: delay(function or data, period) <br />
              </b>
            </p>
            <p className="mt-3">
              Example:
              <br />
              <b>
                Long: delay(
                <a
                  rel="noopener noreferrer" href="https://kuants.in/blog/Day-Close:-day_close"
                  target="_blank"
                >
                  {" "}
                  close
                </a>
                , 5) &lt; close{" "}
              </b>
              <br />
              <br />
            </p>
            It will buy when the value of{" "}
            <a rel="noopener noreferrer" href="https://kuants.in/blog/Day-Close:-day_close" target="_blank">
              {" "}
              close
            </a>{" "}
            price of latest minute is greater than value of close price of the
            last 5th minute.
            <p className="mt-3">
              {" "}
              To use this strategy login to{" "}
              <a rel="noopener noreferrer" href="https://kuants.in" target="_blank">
                {" "}
                kuants{" "}
              </a>
            </p>
          </div>
             
          </div></div></div></div>

              )}}

  export default B32;
