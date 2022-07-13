import React from "react";
import {Helmet} from "react-helmet";

class B46 extends React.Component {
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
  <li>Setting Target and Stoploss</li>
</ul>
<div
            className="main-blog-style"
            id="1121"
          >
                              <Helmet>
            <title>Setting Target and Stoploss</title>
            <meta name= " description" content="Target and Stoploss is one of a key component in a strategy, that define the conditions of exiting a trade. "/>
            <link rel="canonical" href="https://kuants.in/blog/algolab/Setting-Target-and-Stoploss"></link> 
        </Helmet>
            <div className="h12">Setting Target And Stoploss</div>

            <br />
            <br />
            <p className="mt-3">
              There are two ways to adjust the target and stop-loss of any{" "}
              <a rel="noopener noreferrer" href="https://kuants.in/blog/algolab/Long-Strategy" target="_blank">
                long{" "}
              </a>{" "}
              or{" "}
              <a rel="noopener noreferrer" href="https://kuants.in/blog/algolab/Short-Strategy" target="_blank">
                short
              </a>{" "}
              condition.
            </p>
            <b>1. Based on Percentage:</b>
            <p className="mt-3">
              The percentage based target and stop-loss can be set through the
              following option: The percentage based target and stoploss will be
              activated from the actual price the stock was bought or short
              sold. Example, the entry condition was satisfied at the moment
              when price was 100, with a target and stoploss set as 2% and 1%.
              Hence if the price breaches 102 or 99, the target and stoploss
              will be triggered and the order will be completed.
            </p>
            <p className="mt-3">
              <b>2. Based on Condition:</b>
              <p className="mt-3">
                {" "}
                Users can set in the exit points based on conditions also. For
                example, if you want to exit when the{" "}
                <a
                  rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Relative-Strength-Index"
                  target="_blank"
                >
                  {" "}
                  rsi{" "}
                </a>{" "}
                goes above 80, you can set in as
                <b>
                  {" "}
                  <a
                    rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Relative-Strength-Index"
                    target="_blank"
                  >
                    {" "}
                    rsi{" "}
                  </a>
                  (20) > 80
                </b>
              </p>
              <p className="mt-3">
                The exit will be triggered as soon as this condition is breached
                and the order will be closed.
              </p>
              <p className="mt-3">
                Login to{" "}
                <a rel="noopener noreferrer" href="https://algolab.kuants.in/backtest/" target="_blank">
                  https://algolab.kuants.in/backtest/
                </a>{" "}
                for more information.
              </p>
            </p>
          </div>
                    
          </div></div></div></div>

              )}}

  export default B46;
