import React from "react";
import {Helmet} from "react-helmet";

class B12 extends React.Component {
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
  <li>Importance-of-backtesting
</li>
</ul>
      <div className=" h12 mb-5">
      Importance-of-backtesting
            </div>                 <div
            className="main-blog-style"
            id="1135"
          >
            <Helmet>
          <title>             Importance-of-backtesting</title>
          <meta name= " description" content="              For performing algorithmic trading there are two major components,
              one is the testing of theoretical data and the other is live,"/>
          <link rel="canonical" href="https://kuants.in/blog/Importance-of-backtestinge"></link> 
      </Helmet>
         
            <p className="mt-3">
              Hey welcome back to the third module, so we left at the discussion
              of the parts of an{" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/Introduction-to-Automated-Algorithmic-Trading "
                target="_blank"
              >
                algorithmic Trading
              </a>
              , that were{" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Introduction-to-Backtesting"
                target="_blank"
              >
                backtesting
              </a>{" "}
              and live testing. So in this module we dive a little more deep
              into the concepts of . Let’s try to understand what back testing
              is? As a recap of what we discussed,{" "}
              <a rel="noopener noreferrer" href="https://kuants.in/blog/algolab/Backtesting-at-Kuants" target="_blank">
                {" "}
                backtesting
              </a>{" "}
              is the application of the{" "}
              <a
                // rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Developing-investment-strategies-for-Algorithmic-Trading"
                // target="_blank"
              >
                {" "}
                trading strategy
              </a>
              {" "}
              rules to a set of historical pricing data.That is, if we define a
              set of mechanisms for entry and exit into a portfolio of assets,
              and apply those rules to historical pricing data of those assets,
              we can attempt to understand the performance of this "trading
              strategy" that might have been attained in the past
            </p>
            <p className="mt-3">
              It was once said that "
              <b>All models are wrong, but some are useful</b>". The same is
              true of backtests. So what is the purpose that it really serves?
            </p>
            <p className="mt-3">
              - It will help you decide whether the given strategy is worth
              live-trading or not. Gives us an idea how a strategy might have
              performed in past, where it would have failed and passed. Places
              where one would have definitely earned profits or in the other
              cases lost. Basis on which you may change the strategy a little
              bit or may be just scrap it off completely.
            </p>
            <p className="mt-3">
              A well-conducted backtest that yields positive results will assure
              you that the strategy is fundamentally sound and is likely to
              yield profits when implemented in reality
              <p className="mt-3">
                -In this manner backtesting also helped you allocation of your
                wealth/capital into the right kind of strategies or say profit
                earning ones or the more robust ones. - It reduces your risk of
                losing money by helping you select somewhat better strategies
                over the other and invest in the right securities based on the
                strategy. - Hence it results in overall risk reduction
              </p>
            </p>
            <p className="mt-3">
              Now it is preferred as it is easy to generate backtests. This is
              different from reality as it just being a model of the reality.
              <p className="mt-3">
                g a model of the reality. - Being a model it has certain
                assumptions acting as limitation, whereas reality has all the
                right to be just unpredictable and be different from the past. -
                Whenever choosing for a backtesting software don’t ever forget
                to judge basis the accuracy and implementation. - You can also
                use our easy to use user friendly. - Backtesting is a type of
                retrodiction, and a special type of cross-validation applied to
                previous time period(s).
              </p>
            </p>
            <p className="mt-3">
              If backtesting works, it should or rather I should say would make
              you feel confident to employ it going forward.
            </p>
            <p className="mt-3">
              Hence, from the above points we surely conclude the significant
              role backtesting plays. The role it plays in risk analysis, in
              choosing the right strategies or altering your strategy and how it
              actually helps you understand your strategy even better.
            </p>
            <b>
              Here is a backtesting table which we provide at{" "}
              <a rel="noopener noreferrer" href="https://kuants.in/blog/" target="_blank">
                kuants{" "}
              </a>{" "}
            </b>
            <p className="mt-3">
              <b>KUANTS :</b> We at Kuants make algorithmic trading easy for
              those who cannot code and even those who are not comfortable in
              using the readymade algorithms available in the platform. Click on
              the link for more information{" "}
              <a rel="noopener noreferrer" href="https://kuants.in/blog/" target="_blank">
                https://kuants.in/blog/{" "}
              </a>
              .People who whould like to make there own strategies can login to{" "}
              <a rel="noopener noreferrer" href="https://algolab.kuants.in/backtest/" target="_blank">
                https://algolab.kuants.in/backtest/{" "}
              </a>{" "}
            </p>
            <p className="mt-3">
              Above is the screenshot of the backtesting page of the Kuants and
              as you can see above are some of the environmental variables that
              you need to set up. Don’t worry after seeing such a big form, it’s
              not that complicated at all and you can fill in depending upon
              your preference. Let’s begin one by one, now by far testing more
              and more data gives you better insight upon the performance of the
              algorithmic trading strategy. The start date is the date from
              which date in the history you decide to backtest, always remember
              the ideal backtest will be the one that would choose sample data
              from a relevant time period of a duration that reflects a variety
              of market conditions. In this way, one can better judge whether
              the results of the backtest represent a fluke or sound trading.
              So, always keep this in mind before choosing the start and the end
              date
            </p>
            <p className="mt-3">
              Above is the screenshot of the{" "}
              <a
                rel="noopener noreferrer" href="https://kuants.in/blog/algolab/Setting-the-Backtesting-Environment"
                target="_blank"
              >
                {" "}
                backtesting
              </a>{" "}
              page of the Kuants and as you can see above are some of the
              environmental variables that you need to set up. Don’t worry after
              seeing such a big form, it’s not that complicated at all and you
              can fill in depending upon your preference. Let’s begin one by
              one, now by far testing more and more data gives you better
              insight upon the performance of the algorithmic trading strategy.
              The start date is the date from which date in the history you
              decide to backtest, always remember the ideal backtest will be the
              one that would choose sample data from a relevant time period of a
              duration that reflects a variety of market conditions. In this
              way, one can better judge whether the results of the backtest
              represent a fluke or sound trading. So, always keep this in mind
              before choosing the start and the end date
            </p>
            <p className="mt-3">
              Unless you have reason to think that your strategy only applies to
              recent data, I'd recommend longer backtests. If anything, it
              should reduce the risk of over-fitting. Then comes amount of
              initial capital you are willing to invest. I don’t think it needs
              much explanation because you can enter the actual amount you are
              willing to invest. So, I would advise you to enter that amount
              itself.
            </p>
            <p className="mt-3">
              <b>Type of order:</b>
              <br></br>
              There are two options available for you to choose, you can either
              choose MIS or CNC. MIS stand for Margin Intraday Orders. MIS is
              leveraged order and can be used to leverage the available margin
              for doing intraday square off trades. All MIS orders and positions
              from such orders get squared off before the end of day, either by
              the client themselves or by the trading system at pre defined
              time, whichever is earlier.
            </p>
            <p className="mt-3">
              <b>CNC:</b>
              <br />
              it stands for Cash and Carry order, also known as delivery
              trading, it will continue the order the next day as well. CNC. It
              refers to the arrangement where the trader needs to block the
              entire amount of required funds or shares at the time of order
              placement. Under CNC, you can only buy stocks of amount present as
              'Available Delivery Limits' Then come two options for maximum
              long/short transaction or day, which means nothing but the maximum
              time frame you want to decide or plan to long or short, if you
              decide a timeframe and say you forget to square off your position,
              the system would take care of that and do that. This all entirely
              depends on you. At times it may help you save on the losses.
            </p>
            <p className="mt-3">
              <b>Dyanmic Stop loss</b>
              <br />
              The beauty of this is that the trade stays alive as long as it is
              going well. When a long trade starts to break down through key
              support levels, then this type of stop is hit and ends the trade.
              This method is a way of letting winners run, while cutting losers
              short.
            </p>
            <p className="mt-3">
              <b>Volume limit</b>
              <br />
              It is the maximum limit per transaction. It is the amount you can
              really trade per transaction. After this come the Broker setting
              which is basically the amount you need to pay per trade to your
              broker, you can set this according to your broking house. Or we
              have it set up for you. This is another very important factor that
              you might neglect but shouldn’t as this can change the real
              profits that you are gonna earn. So don’t miss this minute detail.
              Some times some brokers may charge different rates depending you
              trade in spot or futures market.
            </p>
          </div>
  
          </div></div></div></div>

              )}}

  export default B12;
