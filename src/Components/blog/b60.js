// import React from "react";
// import {Helmet} from "react-helmet";

// class B60 extends React.Component {
//     constructor(props) {
//         super(props);
    
     
//         this.state = {
//           data: [],
//           phone: "",
//         };
//       }

//       componentWillMount() {
       
//       }    

//       render() {
//         return (
//           <div className="mainArticleContainer">
//             <div>
           
//         <div className="row mx-2 mt-4">
//           <div className="col col-xl-2 mt-4 text-center">
// <img src="/images/books.png" width="50%"></img>
// <ul>
// <li className="border-bottom  sidebarblog"><a href="/blog" target="blank"> All Articles</a></li>

//   <li className="border-bottom sidebarblog"><a href="/blog/algorithms" target="blank">Algorithmic Trading</a></li>
//   <li className="border-bottom sidebarblog"><a href="/blog/technical-analysis" target="blank"> Technical Analysis</a></li>
//   <li className="border-bottom sidebarblog"><a href="/blog/stock-markets" target="blank"> Stock Markets</a></li>
//   <li className="border-bottom sidebarblog"><a href="/blog/algolab" target="blank">Algolab</a></li>
//   <li className="border-bottom sidebarblog"><a href="/blog/smart-marketplace" target="blank">SMART Marketplace</a></li>

// </ul>
// </div>
// <div className="col col-xl-8 mt-4 ">
// <ul class="breadcrumb">
//   <li><a href="/">Home</a></li>
//   <li><a href="/blog">Blog</a></li>
//   <li><a href="/blog/algorithms">Algorithmic Trading</a></li>
//   <li>All you need to know about Algotrading</li>
// </ul>
//       <div
//             className="main-blog-style"
//             id="1136"
//           >
//             <Helmet>
//           <title> All you need to know about Algotrading</title>
//           <meta name= " description" content="              For performing algorithmic trading there are two major components,
//               one is the testing of theoretical data and the other is live,"/>
//           <link rel="canonical" href="https://kuants.in/blog/algorithmic-trading/All-you-need-to-know-about-Algotrading"></link> 
//       </Helmet>
//             <div className="h12">All you need to know about Algotrading</div>
//             <br />
//             <br />
//             <p className="mt-3">
//               {" "}
//               <a rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/What-is-Algo-trading" target="_blank">
//                 {" "}
//                 AlgoTrading
//               </a>{" "}
//               involves building and implementing trading strategies using
//               computer codes and programming
//             </p>
//             <p className="mt-3">
//               Nitesh Khandelwal It is no news that technology has changed the
//               way we work, communicate, transact or even live. Given it has
//               already changed a common man’s life, it is unimaginable that
//               technology doesn’t transform the competitive industry of financial
//               markets. The research says that it already has. According to the
//               “Global AlgoTrading Market 2018-2022” report published by Research
//               and Markets, the global Algotrading market is expected to grow at
//               a CAGR of 10.36% during the period 2018-2022. Currently, 75% of
//               global trades are executed via algorithms and 30-50% of trades in
//               developing economies like India are via Algo Trading. Trading, as
//               we know, basically involves the buying, selling or holding of
//               securities. Now, when we append the word{" "}
//               <a
//                 rel="noopener noreferrer" href="https://kuants.in/blog/Introduction-to-Automated-Algorithmic-Trading"
//                 target="_blank"
//               >
//                 {" "}
//                 ‘Algorithmic’
//               </a>{" "}
//               to trading, we are introducing the use of algorithms into trading.
//               An algorithm can be defined as a set of steps or rules which are
//               followed to solve some problems. AlgoTrading involves building and
//               implementing trading strategies using computer codes and
//               programming. A trading strategy is basically a plan or a set of
//               rules which are defined to conduct the process of buying and
//               selling while trading in order to achieve a particular outcome
//               like increasing profitability, better execution, etc. These
//               trading strategies can be tested on historical data to evaluate
//               how they’d have performed if they were traded as per the
//               parameters during the given time period. This process is called as
//               Backtesting, which helps one minimise losses and maximise profits
//               as per analysis of their performance on the historical data. How
//               is AlgoTrading different from manual trading? Manual traders place
//               their trades by studying the market conditions, analysing the
//               signals and charts and creating a trading logic accordingly.
//               Whereas, in Algotrading, one can place a trading logic in a
//               machine and let the machine evaluate the opportunities based on
//               the live market conditions and thereby take or suggest a trading
//               decision whether to go long or short or hold the position. One can
//               also automate this process of taking trading decisions based on
//               the analysis which eliminates human emotions from the
//               decision-making process thereby reducing the risks involved in
//               taking emotion-based decisions. How are AlgoTrading, Quantitative
//               Trading, HFT and Automated Trading different from each other?
//               <p className="mt-3">
//                 {" "}
//                 <b>AlgoTrading:</b> The process of converting a trading strategy
//                 into an algorithm or computer code and executing trades in an
//                 automated way or manually.
//               </p>
//               <p className="mt-3">
//                 {" "}
//                 <b>Quantitative Trading:</b> Quantitative trading involves using
//                 advanced mathematical and statistical computations along with
//                 quantitative analysis to devise trading strategies which can be
//                 executed manually or in an automated fashion.
//               </p>
//               <p className="mt-3">
//                 <b>Automated Trading:</b> Automation of the overall process of
//                 order executions like buying, selling managing the positions,
//                 etc.
//               </p>
//               <p className="mt-3">
//                 <b>HFT (High-Frequency) Trading:</b> Executing orders in an
//                 extremely short span of time and targeting minuscule profit from
//                 each trade but doing a vast number of them overall. HFT
//                 strategies are subset of Algotrading and need advanced
//                 technology that can react to opportunities within microseconds.
//               </p>
//             </p>
//             <b>Why AlgoTrading?</b>
//             <p className="mt-3">
//               {" "}
//               •<b> Speed:</b> Due to the use of computers and technology to
//               implement trades, the execution speed is increased tremendously
//               which helps avoid slippage, which is the difference between the
//               market price at the time when the order was placed and the price
//               at which the trade actually gets executed.
//             </p>
//             • <b>Increased Accuracy:</b> As the process is taken over by the
//             machine, it reduces the human errors caused due to the fatigue that
//             can be caused while executing a large number of orders manually.
//             <p className="mt-3">
//               {" "}
//               •<b> Backtesting:</b> One of the biggest advantages of using
//               machines for trading is the fact that it makes things systematic,
//               hence enabling the possibility to perform{" "}
//               <a
//                 rel="noopener noreferrer" href="https://kuants.in/blog/algorithmic-trading/Introduction-to-Backtesting"
//                 target="_blank"
//               >
//                 {" "}
//                 backtesting
//               </a>{" "}
//               more comprehensively.
//             </p>
//             <p className="mt-3">
//               • <b>Discipline:</b> Trader’s emotions are eliminated in
//               Algotrading as the decision making occurs according to the trading
//               algorithm, bringing in a higher level of discipline in trading.
//             </p>
//             <p className="mt-3">
//               • <b>Scalability:</b> Algotrading brings the ability to monitor &
//               analyze a much larger number of stocks & portfolios as compared to
//               an individual doing it manually.
//             </p>
//             <b>How to start AlgoTrading?</b>
//             If a person is an absolute beginner with minimal knowledge of
//             AlgoTrading, then he should start off by building three necessary
//             skills. First, quantitative skills, which help in building better
//             models and trading strategies. Second, trading skills to incorporate
//             the basic knowledge of the working of financial markets and what
//             affects them. And, the financial computing skills that help in
//             coding the trading strategies and understanding models through a
//             quantitative framework. A combination of these skills will enable
//             one to successfully implement AlgoTrading strategies. A person who
//             doesn’t have adequate knowledge in this domain but wishes to build a
//             career in Algotrading or start trading algorithmically, may start
//             building his/her skills and start acquiring the financial as well as
//             the technical knowledge required to become an AlgoTrader.
//             <br></br>
//             <br></br>
//             <b>What does the future hold for AlgoTrading?</b>
//             <br></br>
//             Algotrading has shown exponential growth in recent decades and still
//             continues to maintain the upward trend. Technology is playing a huge
//             role in taking over the tasks done manually by automating them. Just
//             as the automobile manufacturing got transformed from shop floors
//             crowded with people to the new age shop floors that are entirely
//             managed & operated by robots, trading in financial markets have been
//             evolving with the rapid adoption of technology & data analytics. In
//             developed markets where Algotrading has been there for decades,
//             Algotrading already accounts for more than 80% of the trading
//             volumes in leading exchanges. Indian markets, which witnessed
//             Algotrading that was allowed by SEBI in 2008, today are also seeing
//             rapid growth in the share of Algotrading with more than 40% of
//             exchange volumes already being driven by algorithms. Technology is
//             changing the way things are everywhere, make sure you have the power
//             of algorithms on your side!
//             <br></br>
//             <br></br>
//             Source: moneycontrol.com
//           </div>
             
//           </div></div></div></div>

//               )}}

//   export default B60;
