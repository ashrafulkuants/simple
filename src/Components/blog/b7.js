import React from "react";
import { Helmet } from "react-helmet";

class B7 extends React.Component {
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
                <li>Introduction to Backtesting</li>
              </ul>

              <div
                className="main-blog-style"
                id="1111"
              >
                <Helmet>
                  <title>Introduction to Backtesting</title>
                  <meta name=" description" content=" A backtesting system replicates the historical stock markets and lets you know
              how much money would have been made if the strategy was traded
              live. "/>
                  <link rel="canonical" href="https://kuants.in/blog/algorithmic-trading/Introduction-to-Backtesting"></link>
                </Helmet>
                <div className="h12">Introduction to Backtesting</div>
                <br />
                <br />{" "}
                <p className="mt-3">
                  Backtesting is a method to test a strategy on historical data. A
                  good{" "}
                  <a
                    rel="noopener noreferrer" href="https://kuants.in/blog/Backtesting?-What-it-is?-What-is-its-significance"
                    target="_blank"
                  >
                    {" "}
                    backtesting
                  </a>{" "}
                  system replicates the historical stock markets and lets you know
                  how much money would have been made if the strategy was traded
                  live. Kuants provide one of the most user friendly backtesting
                  platforms for{" "}
                  <a
                    rel="noopener noreferrer" href="https://kuants.in/blog/Introduction-to-Automated-Algorithmic-Trading "
                    target="_blank"
                  >
                    algorithmic
                  </a>{" "}
                  trading. The results of a backtest tell about the effectiveness,
                  stability and trading pattern of a strategy. These are measured
                  by:
                </p>
                <p className="mt-3">
                  {" "}
                  <b>1. Returns:</b>{" "}
                </p>
                <p className="mt-3">
                  Strategies having returns greater benchmarks like Nifty50, Sensex,
                  top mu tual funds, etc for the Indian Markets and DJIA, S&P500,
                  NASDAQ Composite Index for US markets are considered to be good.
                  The core objective of a strategy is to make more money than the
                  markets, which is fulfilled by the above logic. In numbers, a
                  return greater than 25 to 30% is considered great.
                </p>
                <p className="mt-3">
                  {" "}
                  <b>2. Drawdown:</b>
                </p>
                <p className="mt-3">
                  {" "}
                  Drawdown is the maximum loss a strategy has seen. It is a very
                  significant parameter that tells about the risks involved in a
                  strategy. An ideal strategy has a return to drawdown ratio of at
                  least 2: 1{" "}
                </p>
                <p className="mt-3">
                  <b>3. Sharpe Ratio:</b>
                </p>
                <p className="mt-3">
                  Sharpe ratio tells about the stability of a strategy. It is
                  calculated by dividing the annualized returns to the standard
              deviation of the returns. A good strategy has a Sharpe ratio> 1.5{" "}
                </p>
                <p className="mt-3">
                  <b>4. Success Ratio:</b>
                </p>
                <p className="mt-3">
                  {" "}
                  The ratio of the number of profit-making trades to total trades
                  taken is defined as the success ratio. It should be greater than
                  51% at least, meaning 51% of the total trades are profitable.{" "}
                </p>
                <p className="mt-3">
                  {" "}
                  In summary, a good strategy has the following results in the
                  backtest.
                </p>{" "}
                To do backtesting on our platform Kuants visit :{" "}
                <a rel="noopener noreferrer" href="https://algolab.kuants.in/backtest/" target="_blank">
                  https://algolab.kuants.in/backtest/{" "}
                </a>
              </div>

            </div></div></div></div>

    )
  }
}

export default B7;
