import React from "react";
import {Helmet} from "react-helmet";

class B42 extends React.Component {
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
  <li>Data Available</li>
</ul>
<div
            className="main-blog-style"
            id="1116"
          >
                                                <Helmet>
            <title>Data Available</title>
            <meta name= " description" content="Indian Stock Market Historical Data is available, with a lowest frequency of 1 minute and a time period of 4 years for backtesting"/>
            <link rel="canonical" href="https://kuants.in/blog/algolab/Data-Available"></link> 
        </Helmet>
            <div className="h12">Data Available</div>
            <p className="mt-3">
              {" "}
              <br />
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Introduction-to-Backtesting"
                target="_blank"
              >
                Backtesting
              </a>{" "}
              can be done on a hightest candle size 1-minute on{" "}
                Stocks
              , and Futures Indexes. Following
              tables lists the format through which price and volume data can be
              used:
              <br />
              Open Price<br>
              </br>
              THE OPENING PRICE IS THE PRICE AT WHICH A SECURITY FIRST TRADES WHEN AN EXCHANGE OPENS FOR THE DAY. AN OPENING PRICE IS NOT IDENTICAL TO THE PREVIOUS DAY'S CLOSING PRICE. THERE ARE SEVERAL DAY-TRADING STRATEGIES BASED ON THE OPENING PRICE OF A MARKET OR SECURITY, THE OPENING PRICE IS DETERMINED BASED ON THE PRINCIPLE OF DEMAND AND SUPPLY MECHANISM. IT OCCURS AT THE EQUILIBRIUM PRICE, WHERE THE MAXIMUM VOLUME (TRADABLE QUANTITY) IS EXECUTABLE.
 
 IF THE ABOVE EXAMPLE, THE MAXIMUM TRADABLE QUALITY WAS POSSIBLE AT A SHARE PRICE OF RS 102. HENCE, RS 102 WILL ACT AS THE OPENING PRICE FOR THE SHARE. 

             <br></br>
             High<br></br>
             HIGH PRICE REFERS TO THE CANDLE HIGH, IN TRADING TERMS, WITH REFLECTS THE HIGHEST PRICE ACHIEVED BY A STOCK IN A GIVEN CANDLE. USUALLY USED FOR DEVELOPING BREAKOUT STRATEGIES, IT CAN BE IMPORTANT PRICE TO ENTER FOR BUY POSITIONS, HIGH IS THE HIGHEST PRICE AT WHICH A STOCK TRADED DURING THE COURSE OF THE TRADING DAY. TODAY'S HIGH IS TYPICALLY HIGHER THAN THE CLOSING OR OPENING PRICE. MORE OFTEN THAN NOT THIS IS HIGHER THAN THE CLOSING PRICE. 
             <br></br>
             Low<br></br>
             LOW OR POPULARLY CALLED CANDLE LOW IS THE MINIMUM PRICE OBSERVED BY A STOCK IN A SPECIFIC TIME FRAME. CANDLE LOW IS USEFUL FOR DOWNSIDE BREAKOUT STRATEGIES, BASICALLY LOW TERM IN STOCK MARKET REFERS TO THE LOWEST PRICE AT WHICH THE OWNER OF THE EQUITY SHARES IS READY TO SELL THE SHARES IN THE STOCK MARKET.
            <br></br>
            Close<br></br>
            CLOSE PRICE IS A DECISIVE DATA POINT WHICH TELLS THE LAST TRADED PRICE OF A STOCK IN CANDLE. THIS IS USUALLY USED AS A BASE FOR OTHER TECHNICAL INDICATORS. CLOSE PRICE IS CONSIDERED TO BE CLEANEST DATA POINT IN STATISTICAL TERMS, AND IS IMPORTANT FOR STRATEGIES INVOLVING COMPARISONS BETWEEN STOCK PRICE AND INDICATORS.
 THE CLOSING PRICE ON ONE DAY CAN BE COMPARED TO THE CLOSING PRICE ON THE PREVIOUS DAY, OR 30 DAYS EARLIER OR A YEAR EARLIER, TO MEASURE THE CHANGES IN MARKET SENTIMENT TOWARDS THAT STOCK. 
 <br></br>
 Volume<br></br>
 VOLUME IS THE SUM TOTAL OF ALL THE STOCKS BOUGHT/SOLD IN A SPECIFIC CANDLE FOR A STOCK. IT INCLUDES THE QUANTITY OF SHARES IN ALL THE TRANSACTIONS THAT TOOK PLACE. IT SHOWS THE AVERAGE NUMBER OF SHARES OF STOCK WHICH ARE TRADED DURING A PARTICULAR TIME PERIOD USUALLY THE DAILY TRADING VOLUME. IT CAN ALSO CONVEY THE NUMBER OF SHARES WHICH YOU ARE ALLOWED TO PURCHASE OF A GIVEN STOCK.


            </p>

            <p className="mt-3">
              All the functions and formulas can be created using the above
              basic stock prices and volume data available.{" "}
            </p>
          
          </div>
             
          </div></div></div></div>

              )}}

  export default B42;
