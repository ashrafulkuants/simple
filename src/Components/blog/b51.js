import React from "react";
import {Helmet} from "react-helmet";

class B51 extends React.Component {
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
  <li><a href="/blog/smart">SMART Marketplace</a></li>
  <li>How to subscribe to a SMART Algorithm ?</li>
</ul>
<div
            className="main-blog-style"
            id="1126"
          >   <Helmet>
          <title>How to subscribe to a SMART Algorithm ?</title>
          <meta name= " description" content="SMART Algorithms are a list of curated readymade algos developed for Indian Stock Markets on Algolab. As with any other investment product, these algos do not gaureentee any fixed returns but their hostrical results represent a good performance."/>
          <link rel="canonical" href="https://kuants.in/blog/smart/How-to-subscribe-to-a-SMART-Algorithm"></link> 
      </Helmet>
            <div className="h12">How to subscribe to a SMART Algorithm ?</div>

            <br />
            <br />
            <p className="mt-3">
              You can subscribe to any{" "}
              <a rel="noopener noreferrer" href="https://smart.kuants.in" target="_blank">
                SMART algorithm
              </a>{" "}
              by clicking on the Subscribe button as below. Each subscription by
              default is for a period of 6 months. However, if a user wishes to
              switch to any other algorithm, he is free to do so without paying
              any extra fee.
            </p>
            <p className="mt-3">
              {" "}
              Kuants is the first online platform in India which provides{" "}
              <a
                // rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Developing-investment-strategies-for-Algorithmic-Trading"
                // target="_blank"
              >
                Algorithmic Trading Strategies
              </a>
              . To know more about us and our idea click on the link:{" "}
              <a rel="noopener noreferrer" href="https://kuants.in/blog/" target="_blank">
                kuants.in{" "}
              </a>{" "}
            </p>
            <p className="mt-3">
              People who whould like to{" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Introduction-to-Backtesting"
                target="_blank"
              >
                backtest
              </a>{" "}
              or create there own Algorithms and can use our algolab platform{" "}
              <a rel="noopener noreferrer" href="https://algolab.kuants.in/backtest/" target="_blank">
                https://algolab.kuants.in/backtest/{" "}
              </a>{" "}
            </p>
          </div>
                  
          </div></div></div></div>

              )}}

  export default B51;
