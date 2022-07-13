import React from "react";
import {Helmet} from "react-helmet";

class B15 extends React.Component {
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
  <li>Step-by-Step set of instructions to buy & sell orders while trading automatically  in Algo Trading</li>
</ul>
              <div
            className="row main-blog-style "
            id="1220"
          >
      <Helmet>
            <title>Step-by-Step set of instructions to buy & sell orders while trading automatically  in Algo Trading
</title>
            <meta name= " description" content="If you're an active trader looking to try your hand at beating the stock market algorithms. Start with Kuants algorithmic trading software & trade in three simple steps to create/buy/use any algorithm anytime." content="Nested component" />
            <link rel="canonical" href="https://kuants.in/blog/algorithmic-trading/Step-by-Step-set-of-instructions-to-buy-and-sell-orders-while-trading-automatically-in-Algo-Trading"></link> 

        </Helmet>
        <div className="content-wrapper " style={{ boxShadow: "none" }}>
          <section id="one">
            <div className="section section-about-us">
              <div className="container">
                <div className="row ">
                
                  <div
                    className="col-md-12  ml-auto mr-auto"
                  >
                   <div className="h12" style={{fontFamily:'Nunito',fontSize:'20px'}}  >Step-by-Step set of instructions to buy & sell orders while trading automatically  in Algo Trading</div>
                   Placing orders in Algo trading through Algolab is a very user-friendly process and can be completed within 4 minutes of Account Creation. It’s completely automated, there is no requirement to track stock prices and conditions manually.  Following is the procedure to develop and live trade an algo on one of the best algo trading platforms in India: 
<ul>
  <li  className="mb-2 mt-2"><b>Login To Algolab and Click on Create Algo.</b> It will take you to be algo creation page.  
On the algo creation page,  the most optimized settings are already enabled, you can simply click on save and proceed.   If you want to update settings like Backtesting Time Period, Intraday Or Cash and Carry, Number of Trades a day, you can modify them using the dropdowns and click on Save and Proceed
</li>
<li  className="mb-2 mt-2"><b>The 2nd Step in Algo Creation involved selecting stocks.</b> It is suggested to select at least 5 stocks for testing at a single time. Once the stock selection is done, you can turn on the Expression mode and start typing your algo in plain simple English, and press enter whenever your indicator/parameter comes up the list. Once this is complete, you can click on save and proceed.  </li>
<li  className="mb-2 mt-2"><b>The final step is Starting the backtesting.</b> Click on Start Backtest and it will show you the backtest results within 2-5 mins. You will see a profit/loss graph,  return% for each stock, its success rate, and a downloadable order book. </li>
<li  className="mb-2 mt-2"><b>To Deploy this algo automatically, simply navigate to the My Algo page </b>and select the Start Live trading button. </li>
</ul>

                   </div>{" "}
                
                </div>
              </div>
            </div>
          </section>
          
      
           {/* main-panel ends */}
        </div>{" "}
        </div>


          </div></div></div></div>

              )}}

  export default B15;
