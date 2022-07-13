import React from "react";
import {Helmet} from "react-helmet";

class B49 extends React.Component {
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
  <li>What is SMART Algorithms?</li>
</ul>
<div
            className="main-blog-style"
            id="1123"
          ><Helmet>
          <title>What is SMART Algorithms ?</title>
          <meta name= " description" content="SMART Algorithms are a list of curated readymade algos developed for Indian Stock Markets on Algolab. As with any other investment product, these algos do not gaureentee any fixed returns but their hostrical results represent a good performance."/>
          <link rel="canonical" href="https://kuants.in/blog/smart/What-is-SMART-Algorithms"></link> 
      </Helmet>
            <div className="h12">What is SMART Algorithms ?</div>
            <br />
            <br />
            <p className="mt-3">
              SMART Algorithms are automated{" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/Introduction-to-Automated-Algorithmic-Trading"
                target="_blank"
              >
                {" "}
                Algorithmic Trading
              </a>{" "}
              developed by users on the{" "}
              <a rel="noopener noreferrer" href="https://algolab.kuants.in/blog/" target="_blank">
                Algorithm Lab
              </a>{" "}
              at Kuants. These{" "}
              <a rel="noopener noreferrer" href="https://kuants.in/blog/How-algotrading-Works" target="_blank">
                {" "}
                algoithms
              </a>{" "}
              have been{" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Introduction-to-Backtesting"
                target="_blank"
              >
                {" "}
                backtested
              </a>{" "}
              on historical data and can be used by any individual or entity for
              their own trading
              <a rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/What-is-Algo-trading" target="_blank">
                {" "}
                trading
              </a>{" "}
              purposes for a fee prescribed by the algorithm creator. All the{" "}
              <a
                // rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Developing-investment-strategies-for-Algorithmic-Trading"
                // target="_blank"
              >
                {" "}
                algorithms
              </a>
              {" "}
              displayed contain details about the risk and reward expected for
              each algorithms and anyone willing to use them can go through the
              same start off the algorithmic trading on his account. Currently,
              we support Motilal Oswal Financial Services for live trading and
              anyone desirous of using the algorithm can create an account for
              the same at the following link:{" "}
              <a rel="noopener noreferrer" href="https://kuants.in" target="_blank">
                trading account
              </a>
            </p>{" "}
            <p className="mt-3">
              <h3>Relevent Articles:</h3>
            </p>
            <a
              rel="noopener noreferrer" href="https://kuants.in/blog/smart/How-much-can-I-earn-using-SMART-algorithms"
              target="_blank"
            >
              How much can I earn using SMART Algorithms
            </a>
            <br />
            <a
              rel="noopener noreferrer" href="https://kuants.in/blog/smart/How-to-subscribe-to-a-SMART-Algorithm"
              target="_blank"
            >
              How to subscribe to SMART Algorithm
            </a>
            <br />
            <a
              rel="noopener noreferrer" href="https://kuants.in/blog/smart/What-are-the-benefits-of-using-SMART-Algorithms"
              target="_blank"
            >
              What are the benefits of using SMART Algorithm ?
            </a>{" "}
            <br />
            <a
              rel="noopener noreferrer" href="https://kuants.in/blog/stock-markets/What-are-the-different-market-instruments"
              target="_blank"
            >
              What are the different market instruments ?
            </a>
          </div>
              
          </div></div></div></div>

              )}}

  export default B49;
