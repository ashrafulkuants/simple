import React from "react";
import {Helmet} from "react-helmet";

class B20 extends React.Component {
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
  <li>Relative Strength Index(RSI)</li>
</ul>
<div
            className="main-blog-style"
            id="1142"
          ><Helmet>
          <title>Relative Strength Index(RSI)</title>
          <meta name= " description" content=" Relative Strength Indexranges between 0 to 100,a value of above 80 means a fall in price can happen while a value above 30 means market can rise"/>
          <link rel="canonical" href="https://kuants.in/blog/technical-analysis/Relative-Strength-Index"></link> 
      </Helmet>
            <div className="h12">Relative Strength Index(RSI)</div>
            <br />
            <br />
            Relative Strength Index is an indicator that helps in identifying
            reversal opportunities in the stock markets. Its value varies
            between 0 and 100. If RSI > 80, it is an indication that stock price
            might fall as it has risen above its sustainable level. If RSI &lt;
            30, it is an indication that stock price might move up as it has
            fallen more than expected and has a high tendency to rise up. The
            formula for RSI is as follows:
            <br />
            <p className="mt-3">
              where Average Gain is the average movement of stock in the candles
              it has risen and Average Loss is the average movement of stock in
              candles it has fallen. RSI can be used in{" "}
              <a rel="noopener noreferrer" href="https://kuants.in" target="_blank">
                {" "}
                Kuants
              </a>{" "}
              using the following syntax: rsi(period) where the period is the
              number of candles to be considered with calculating RSI. <br />
              An example of RSI is as follows: <br />
            </p>
            <br />
          </div>
           
          </div></div></div></div>

              )}}

  export default B20;
