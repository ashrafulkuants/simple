import React from "react";
import { Helmet } from "react-helmet";

class B9 extends React.Component {
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
                <li>How it Works: Video</li>
              </ul>
              <div
                className="main-blog-style"
                id="1113"
              >
                <Helmet>
                  <title>How it Works: Video</title>
                  <meta name=" description" content="Kuants has developed an expression based format to write trading algorithmic strategies
             in a single line and backtest them without writing any code."/>
                  <link rel="canonical" href="https://kuants.in/blog/How-it-Works"></link>
                </Helmet>
                <div className="h12">How it Works: Video</div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jaKNtNDqy2U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <p className="mt-3">
                  <h3>Relevents Articles:</h3>
                </p>
                <p className="mt-3">
                  {" "}
                  <a rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/What-is-Algo-trading" target="_blank">
                    {" "}
                    What is Algo Trading?{" "}
                  </a>
                  <br />
                  <a
                    rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Benefits-of-Algo-trading"
                    target="_blank"
                  >
                    {" "}
                    Benefits of algo Trading
                  </a>
                  <br />
                  <a
                    rel="noopener noreferrer" href="https://kuants.in/blog/stock-markets/Stock-Trading-in-India"
                    target="_blank"
                  >
                    {" "}
                    Stock Trading in India
                  </a>
                  <br />
                  <a
                  // rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/All-you-need-to-know-about-Algotrading"
                  // target="_blank"
                  >
                    {" "}
                    All you need to know about AlgoTrading
                  </a>
                  <br />
                  <a
                    rel="noopener noreferrer" href="https://kuants.in/blog/algolab/Backtest-First-Strategy"
                    target="_blank"
                  >
                    {" "}
                    Backtest your first strategy
                  </a>
                  <br />
                </p>
              </div>

            </div></div></div>
      </div>

    )
  }
}

export default B9;
