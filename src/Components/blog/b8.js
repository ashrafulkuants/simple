import React from "react";
import { Helmet } from "react-helmet";

class B8 extends React.Component {
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
                <li>Backtesting at Kuants</li>
              </ul>

              <div
                className="main-blog-style"
                id="1112"
              >
                <Helmet>
                  <title>Backtesting at Kuants</title>
                  <meta name=" description" content="Kuants has developed an expression based format to write trading algorithmic strategies
             in a single line and backtest them without writing any code."/>
                  <link rel="canonical" href="https://kuants.in/blog/algolab/Backtesting-at-Kuants"></link>
                </Helmet>
                <div className="h12">Backtesting at Kuants</div>
                <p className="mt-3">
                  {" "}
                  <br />
                  <br /> Kuants has developed an expression based format to write{" "}

                  trading
                  {" "}
                  <a
                  // rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Developing-investment-strategies-for-Algorithmic-Trading "
                  // target="_blank"
                  >
                    algorithmic strategies
                  </a>
                  {" "}
                  in a single line and{" "}
                  <a
                    rel="noopener noreferrer" href="https://kuants.in/blog/Backtesting?-What-it-is?-What-is-its-significance"
                    target="_blank"
                  >
                    backtest
                  </a>{" "}
                  them without writing any code. We at Kuants have developed a large
                  set of pre-defined functions that have been connected to a syntax.
                  Users can use the syntax to create their strategies. As an
                  example, to create a simple moving crossover strategy of 5 and 10
                  time periods, the following expression will do the work:
                  <b>
                    <a
                      rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Simple-Moving-Average"
                      target="_blank"
                    >
                      sma
                    </a>
                (close,5) >{" "}
                    <a
                      rel="noopener noreferrer" href="https://kuants.in/blog/technical-analysis/Simple-Moving-Average"
                      target="_blank"
                    >
                      sma
                    </a>
                    (close,10)
                  </b>
                  The syntax for simple moving average is sma and close and "5" tell
                  the data to be used and its time frame. In the same way, we have
                  over 40 technical indicators that can be used to create and
                  backtest strategies. Before testing any strategy, a user might
                  need to get accustomed to the expression format, the syntax and
                  input values for each function. To do{" "}
                  <a
                    rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Introduction-to-Backtesting"
                    target="_blank"
                  >
                    backtesting
                  </a>{" "}
                  and to know more about our platform follow the steps:
                  <p className="mt-3"></p>
                  <p className="mt-3">
                    <h3>Step 1:</h3> Login to Kuants at{" "}
                    <a rel="noopener noreferrer" href="https://kuants.in" target="_blank">
                      https://kuants.in
                    </a>
                    .<h3>Step 2:</h3>Sign up at Algolab.
                    <h3>Step 3:</h3> Here you can create your own strategies in
                    backtesting menu{" "}
                    <a rel="noopener noreferrer" href="https://algolab.kuants.in/backtest/" target="_blank">
                      https://algolab.kuants.in/backtest/{" "}
                    </a>{" "}
                  </p>
                </p>
              </div>

            </div>
            </div>
        </div>
        </div>

    )
  }
}

export default B8;
