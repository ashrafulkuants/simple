import React from "react";
import {Helmet} from "react-helmet";

class B41 extends React.Component {
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
  <li><a href="/blog/algolab">Algolab</a></li>
  <li>Selecting Stocks</li>
</ul>
<div
            className="main-blog-style"
            id="1115"
          ><Helmet>
          <title>Selecting Stocks</title>
          <meta name= " description" content="If you're an active trader looking to try your hand at beating the stock market algorithms. Start with Kuants algorithmic trading software & trade in three simple steps to create/buy/use any algorithm anytime." content="Nested component" />
    <link rel="canonical" href="https://kuants.in/blog/algolab/Selecting-Stocks"></link>
      </Helmet>
            <div className="h12">Selecting Stocks</div>

            <br />
            <br />
            <p className="mt-3">
              At{" "}
              <a rel="noopener noreferrer" href="https://kuants.in/blog/" target="_blank">
                kuants{" "}
              </a>{" "}
              users can backtest upto 20 different stocks in a single backtest .
              The entire capital will be divided equally among all the selected
              stocks and accordingly the quantity to be bought will be decided
              by the result of capital allocation to the stock price. To select
              a stock, users can start typing the initials in the Select
              Stock/Portfolio option on Create Backtest page as shown below:
            </p>
            <p className="mt-3">
              {" "}
              As soon as you click on the input box at Select Stock, a dropdown
              will come mentioning the list of available stocks in the Algorithm
              Lab which you can select to do your{" "}
              <a
                // rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/All-you-need-to-know-about-Algotrading"
                // target="_blank"
              >
                {" "}
                Trading
              </a>
              .{" "}
            </p>
            <p className="mt-3">
              To do{" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Introduction-to-Backtesting"
                target="_blank"
              >
                backtesting
              </a>{" "}
              on our platform at Kuants click on:
              <a rel="noopener noreferrer" href="https://algolab.kuants.in/backtest//" target="_blank">
                {" "}
                algolab backtests
              </a>
            </p>
          </div>
             
          </div></div></div></div>

              )}}

  export default B41;
