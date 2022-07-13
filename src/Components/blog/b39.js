import React from "react";
import {Helmet} from "react-helmet";

class B39 extends React.Component {
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
<div className="col col-xl-8 mt-4 ml-4">
<ul class="breadcrumb">
  <li><a href="/">Home</a></li>
  <li><a href="/blog">Blog</a></li>
  <li><a href="/blog/algorithmic-trading">Algorithmic Trading</a></li>
  <li>What is Algo-trading </li>
</ul>
<div
            className="main-blog-style"
            id="1107"
          >
               <Helmet>
            <title>What is Algo-trading ? </title>
            <meta name= " description" content="Wikipedia defines it as “a method of executing orders using
              automated pre-programmed trading instructions accounting for
              variables such as time, price, and volume”."/>
            <link rel="canonical"  href="https://kuants.in/blog/algorithmic-trading/What-is-Algo-trading"></link> 
        </Helmet>
            <div className="h12">What is Algo-trading ?</div>
            <br />
            <br />{" "}
            <p className="mt-2">
            Algorithmic trading is a term that has fascinated investors and traders since the early 2000s. With SEBI legalizing it in 2009, brokerage firms and big ticket investors have rushed up to make money in the markets using the latest automated technologies. 
            </p>
            <p className="mt-2">
            As per SEBI circular, dated, 30th March, 2012, the definition of Algorithmic Trading can be defined as:
            </p>
            <b className="mt-3">
            Any  order  that  is  generated  using  automated  execution logic shall be known as algorithmic trading
    
            </b>
            <p className="text-right mt-3">
<u>Reference:SEBI | Broad Guidelines on Algorithmic Trading
            </u>
         </p> 
         
         <p className="mt-3">
         By this definition, even a retail individual trader using simple trading strategies like Opening Range Breakouts, Crossovers, Candlestick Patterns, charting patterns, etc, on a small computer program that places his orders, will be considered an Algorithmic trader. No distinction is made between strategies based on machine learning, artificial intelligence, high frequency trading or technical indicators. 

         </p>
         <p className="mt-3">For better understanding, let’s have a quick look at following diagram: 
</p>

    <p className="ml-5">     <img src="/images/algotrading.jpg"/></p>
<p className="mt-5">Here, Machine Learning and AI, High Frequency Trading and Technical Indicators, Price Patterns etc are all types of strategies, if their method of execution is via a computer program then, they all come  under the vertical of Algorithmic Trading.
</p><p className="mt-3"> 
Currently, over 50% of all turnover in the Indian Stock Markets are executed through algorithmic trading, with an increment of 5-10% every year consistently since 2015. Stock brokers, HNIs, Wealth Management Firms, etc all have access to the required infrastructure needed to place such orders.  This was a costly affair till a few years ago, but today, many stock brokers have released Trading API for their retail traders, which can also be used by individuals. A few prominent among these are: Zerodha, Upstox, Angel Broking, 5paisa, Kotak Securities and ICICI Securities, to name a few.
</p>
<p className="mt-3 mb-3">If you wish to develop and create your own algorithms, or learn about algorithmic trading in detail, you can always visit <a href="https://algolab.kuants.in">Algolab</a> A No code Algorithm Testing and Deployment platform open for all retail traders. Create and Deploy Algorithms within a few minutes instantly 
</p>
<p className="text-center">
<button className="btn btn-primary text-center mt-3 mb-5">
<a href="https://algolab.kuants.in" style={{color:'white'}}> Visit Algolab</a>
</button>
</p>      </div>
   
          </div></div></div>
</div>

              )}}

  export default B39;
