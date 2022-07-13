import React from "react";
import {Helmet} from "react-helmet";

class B50 extends React.Component {
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
  <li>How can I use SMART Algorithms?</li>
</ul>
<div
            className="main-blog-style"
            id="1125"
          >
            <Helmet>
          <title>How can I use SMART Algorithms?</title>
          <meta name= " description" content="SMART Algorithms are a list of curated readymade algos developed for Indian Stock Markets on Algolab. As with any other investment product, these algos do not gaureentee any fixed returns but their hostrical results represent a good performance."/>
          <link rel="canonical" href="https://kuants.in/blog/smart/How-can-I-use-SMART-Algorithms"></link> 
      </Helmet>
            <div className="h12">How can I use SMART Algorithms</div>

            <br />
            <br />
            <p className="mt-3">
              To use any of the listed{" "}
              <a
                // rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Developing-investment-strategies-for-Algorithmic-Trading"
                // target="_blank"
              >
                {" "}
                SMART algorithms
              </a>
              , you need to open a new{" "}
              <a rel="noopener noreferrer" href="https://kuants.in/blog/" target="_blank">
                trading account
              </a>{" "}
              through the following link and upload the required documents. Our
              team will process the same and activate your account once all the
              documents are verified and are in place. After account activation,
              you can visit the{" "}
              <a rel="noopener noreferrer" href="https://smart.kuants.in" target="_blank">
                trading account
              </a>{" "}
              and select any{" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/What-is-algorithmic-Trading-and-how-is-algo-trading-different-from-manual-trading"
                target="_blank"
              >
                algorithms
              </a>{" "}
              that you want to live trade on. By clicking on the Subscribe
              button in the image below, the algorithm will be connected to your
              activated account the next day and trading will start off. At the
              end of each trading day, you will be receiving reports from the
              NSE and BSE highlighting the orderbook and net profit and loss
              positions.To know how much you can earn using SMART algorithms
              visit:{" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/smart/How-much-can-I-earn-using-SMART-algorithms"
                target="_blank"
              >
                SMART algothims
              </a>
            </p>
          </div>
                  
          </div></div></div></div>

              )}}

  export default B50;
