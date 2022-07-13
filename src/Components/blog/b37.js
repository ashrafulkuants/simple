import React from "react";
import {Helmet} from "react-helmet";

class B37 extends React.Component {
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
  <li><a href="/blog/stock-markets/">Stock Markets</a></li>
  <li>Sensex</li>
</ul>
<div
            className="main-blog-style"
            id="1165"
          >
             <Helmet>
            <title>Sensex </title>
            <meta name= " description" content="Developing a strategy for Algorithmic Trading starts with a through Backtesting on historical data of atleast 1 year. The results should be adjusted with slippage and trading costs to make sure only pure returns are considered to judge  the backtest reports" />
            <link rel="canonical" href="https://kuants.in//blog/stock-markets/sensex"></link> 
        </Helmet>
            <div className="h12"> What is SENSEX ?</div>
            <p className="mt-3">
              The BSE SENSEX (also known as the S&P Bombay Stock Exchange
              Sensitive Index or simply the SENSEX) is a free-float
              market-weighted stock market index of 30 well-established and
              financially sound companies listed on Bombay Stock Exchange. The
              30 component companies which are some of the largest and most
              actively traded stocks, are representative of various industrial
              sectors of the Indian economy. Published since 1 January 1986, the
              S&P BSE SENSEX is regarded as the pulse of the domestic stock
              markets in India. The base value of the SENSEX was taken as 100 on
              1 April 1979 and its base year as 1978–79. On 25 July 2001 BSE
              launched DOLLEX-30, a dollar-linked version of the SENSEX.
              <br /> As of 07 February 2020, the full market capitalisation of
              SENSEX was about ₹76,112.3149 billion (US$1 trillion) (37% of GDP)
              while its free-float market capitalisation was ₹43,272.7852
              billion (US$607 billion). During 2008-12, Sensex 30 Index share of
              BSE market capitalisation fell from 49% to 25%[1] due to the rise
              of sectoral indices like BSE PSU, Bankex and BSE-TECk.
            </p>
          </div>
           
          </div></div></div></div>

              )}}

  export default B37;
