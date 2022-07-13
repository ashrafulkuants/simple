import React from "react";
import {Helmet} from "react-helmet";

class B19 extends React.Component {
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
  <li><a href="/blog/technical-analysis/">Technical Analysis</a></li>
  <li>Moving Average Convergence Divergence(MACD)</li>
</ul>
<div
            className="main-blog-style"
            id="1141"
          ><Helmet>
          <title>  Moving Average Convergence Divergence(MACD)</title>
          <meta name= " description" content=" Moving Average Convergence Divergence or commonly known as Macd is a trend based technical indicator between -1 and 1 that helps to estimate the market trend"/>
          <link rel="canonical" href="https://kuants.in/blog/technical-analysis/Moving-Average-Convergence-Divergence"></link> 
      </Helmet>
            <div className="h12">
              Moving Average Convergence Divergence(MACD)
            </div>
         
            Moving Average Convergence Divergence(MACD) pronounced as MacD is a
            trend based indicator that is based on a combination of different
            periods of EMA. It is the EMA of the difference of a shorter period
            "FAST" EMA and a longer period "SLOW" EMA.
            <br />
            As the name suggests, it tells whether the two above mentioned
            moving averages are coming closer to each other or as going farther
            away. If they are moving closer is an indication that the data
            series might be decreasing and if they are diverging, the price
            might be increasing. The formula for MACD is as below: <br />
            <b>
              MACD={" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Exponential-Moving-Average"
                target="_blank"
              >
                {" "}
                EMA
              </a>
              (EMA(data,14) - EMA(data,26),9) <br />
            </b>
            The advantage of MACD is that it gives an idea about the direction.
            If MACD is increasing, the data values are moving up, and if
            decreasing, the data values are moving down. It can be both negative
            and positive. To use MACD in{" "}
            <a rel="noopener noreferrer" href="https://kuants.in" target="_blank">
              {" "}
              Kuants
            </a>
            , the following syntax is provided: macd(data)
            <br />
            A few examples: <br />
            <b>
              macd(volume) > macd(close) <br />
            </b>
            <br />
          </div>
           
          </div></div></div></div>

              )}}

  export default B19;
