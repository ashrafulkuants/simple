import React from "react";
import {Helmet} from "react-helmet";

class B40 extends React.Component {
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
  <li>Setting the Backtesting Environment</li>
</ul>
<div
            className="main-blog-style"
            id="1114"
          >
                                    <Helmet>
            <title>Setting the Backtesting Environment</title>
            <meta name= " description" content="Kuants has developed an expression based format to write trading algorithmic strategies
             in a single line and backtest them without writing any code."/>
            <link rel="canonical" href="https://kuants.in/blog/algolab/Setting-the-Backtesting-Environment"></link> 
        </Helmet>
            <div className="h12">Setting the Backtesting Environment</div>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/QNoO3Ot0_II?start=33" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>
              
          </div></div></div></div>

              )}}

  export default B40;
