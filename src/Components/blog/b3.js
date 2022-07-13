import React from "react";
import {Helmet} from "react-helmet";

class B3 extends React.Component {
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
        console.log("gdyhGDYFDHYEWUGDEYWQFGFWEYDGF")
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
<div className="col col-xl-8 mt-4 ml-5 ">
<ul class="breadcrumb">
  <li><a href="/">Home</a></li>
  <li><a href="/blog">Blog</a></li>
  <li><a href="/blog/algolab">Algolab</a></li>
  <li>Components of a Strategy</li>
</ul>
      <div className=" h12 mb-5">
      Components of a Strategy            </div>    
            <div
            className="main-blog-style"
          >
        <Helmet>
            <title>Components of a Strategy</title>
            <meta name= " description" content="Indian Stock Market Historical Data is available, with a lowest frequency of 1 minute and a time period of 4 years for backtesting"/>
            <link rel="canonical" href="https://kuants.in/blog/algolab/Components-of-a-Strategy"></link> 
        </Helmet>

            <p className="mt-3">
            Numerous activities center around the investment of wealth for a fixed time horizon. Mutual Funds(Equity and Debt), Fixed Income assets like Fixed Deposits, Government Bonds, PF, Stock Markets, Real Estate, Startups, etc.
            </p>
            <p className="mt-3">
            Each of the above investments has its purposes, time horizons, risks, and expectations of returns associated with different degrees of variations. Some investments might be suited to your risk profile, some might not.

            </p>
                  <p>However, all of the above types of investments can be considered under a broader framework of risk and rewards and can be generalized into the following framework: </p>
            <p className="mt-3">
            <b>Portfolio: A portfolio </b>is a combination of different types of investments with capital in each allotted as per risk-taking capacity. You can invest different capital in real estate, some in Mutual Funds, and a part in Fixed Deposits. Investing capital in different types of investments allows diversification to the overall capital and reduces risks. Example: If Mutual Funds are down, there might be some real estate investments that might help in temporarily off settings, or there are fixed deposits that can make sure a minimum ROI is generated every month. 
            </p>
            <p><b>When to Buy:</b> This decision is highly dependent on the type of investment. For investments that have a short-term horizon, where price fluctuates a lot, it can be a very important factor. For example, while buying stocks, whose price fluctuates every section, when to buy can be decided by thorough study, and testing(backtesting) of different conditions. For real estate, FDs, and other long term investments, where price fluctuations are not much when to buy is decided based on current cash flow available and considering any near term capital requirement </p>

            <p className="mt-3">
           <b> Stop Loss:</b> With every investment made, there comes a maximum risk-taking capacity. For stocks, mutual funds, this is most applicable as these investments are highly volatile. Real Estate investments might be considered less volatile as prices might not be affected much under normal circumstances. For FDs, the primary risk is inflation. Ideally, FD returns should be able to at least make up for the inflation rates on an annual basis, else it might act as an indirect capital erosion.
            </p>
            <p className="mt-3">
            <b>Targets:</b> Every investment decision should be supported by a target. By targets, we mean when to exit an existing investment when it has reached a desired positive value. This adds discipline, liquidity, and peace of mind. If we keep on holding a favorable investment for too long past our desired goals, it will only add emotional pressure, along with illiquidity. 
            </p>

            <p className="mt-3">
            All the above points highlight a general idea about how investments should be dealt with across different investment types, similar is the framework for stock market trading and algorithmic trading. Without any of the above, the stocks bought/sold tend to stand at significant risk.            </p>
            <p className="mt-3">
            To conclude, investment should be worry-free. If an investment is making you conscious all the time, it might not be the correct investment.
            </p>
          </div>
           
          </div></div>
          <p className="text-center">
<button className="btn btn-primary text-center mt-3 mb-5">
<a href="https://algolab.kuants.in" style={{color:'white'}}> Visit Algolab</a>
</button>
</p>  
          </div></div>

              )}}

  export default B3;
