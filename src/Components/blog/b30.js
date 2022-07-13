import React from "react";
import {Helmet} from "react-helmet";

class B30 extends React.Component {
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
  <li><a href="/blog/technical-analysis">Technical Analysis</a></li>
  <li>Skewness</li>
</ul>
<div
            className="main-blog-style"
            id="1157"
          >
             <Helmet>
            <title>Skewness </title>
            <meta name= " description" content="Developing a strategy for Algorithmic Trading starts with a through Backtesting on historical data of atleast 1 year. The results should be adjusted with slippage and trading costs to make sure only pure returns are considered to judge  the backtest reports" />
            <link rel="canonical" href="https://kuants.in//blog/technical-analysis/Skewness"></link> 
        </Helmet>
            <div className="h12">Skewness</div>
            <p className="mt-3">
              {" "}
              Skew function returns the value of skewness of a particular data
              series. Skewness is a property that tells about the distribution
              of the data. If higher values in the data were observed in the
              first half of a data series, it is terms as positively skewed
              while if the high values are in the later half of the series, it
              is termed as negatively skewed.{" "}
            </p>
            Syntax:<b> skew(data or function, period)</b> <br />
            - any data like OHLCV or any function can be used <br />
            -period is the number of candles to be considered.
            <p className="mt-3">
              {" "}
              This function tells about how have the recent value being moving.
              If the value is great than 0, it indicates that the parameters had
              an increase in value in the very recent times and if the value is
              less than 0, it indicates that the parameters had a decrease in
              value in very recent time series.{" "}
            </p>
            A very simple strategy using skewness is as below: <br />
            <b>
              Long: (
              <a rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Simple-Moving-Average" target="_blank">
                {" "}
                sma
              </a>
              (
              <a rel="noopener noreferrer" href="https://kuants.in/blog/Day-Close:-day_close" target="_blank">
                {" "}
                close
              </a>
              ,10) >{" "}
              <a rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Simple-Moving-Average" target="_blank">
                {" "}
                sma
              </a>
              (close, 20)) & ( skew(close,10) > 0){" "}
            </b>{" "}
            <br />
            <br />
            <p className="mt-3">
              This strategy will first confirm whether the 10 minute moving
              average is greater than the 20 minute moving average, and if yes,
              will further check if the very recent price movement is more in
              upward direction, then will place a buy order.{" "}
            </p>
            To live test this stragtegy login to{" "}
            <a rel="noopener noreferrer" href="https://algolab.kuants.in/backtest/" target="_blank">
              kuants backtesting algolab
            </a>
          </div>
         
          </div></div></div></div>

              )}}

  export default B30;
