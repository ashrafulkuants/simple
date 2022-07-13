// import React from "react";
// import {Helmet} from "react-helmet";

// class B1 extends React.Component {
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

//           <Helmet>
//             <title>Developing investment strategies for Algorithmic Trading </title>
//             <meta name= " description" content="Developing a strategy for Algorithmic Trading starts with a through Backtesting on historical data of atleast 1 year. The results should be adjusted with slippage and trading costs to make sure only pure returns are considered to judge  the backtest reports" />
//             <link rel="canonical" href="https://kuants.in/blog/algorithmic-trading/Developing-investment-strategies-for-Algorithmic-Trading"></link> 
//         </Helmet>
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
// <div className="col col-xl-1 mt-4 "></div>

// <div className="col col-xl-8 mt-4 ">
// <ul class="breadcrumb">
//   <li><a href="/">Home</a></li>
//   <li><a href="/blog">Blog</a></li>
//   <li><a href="/blog/algorithms">Algorithmic Trading</a></li>
//   <li>Developing investment strategies for Algorithmic Trading</li>
// </ul>
//       <div className=" h12 mb-5">
//   Developing investment strategies for Algorithmic Trading
//             </div>  
//             Should it be a random formula? Do you wish to invest your money into an unknown randomly generated formula?
// No. A strategy is developed from an idea. Any idea from any domain of life you like.

// A 1-hour long boring meeting with the boss can be taken as a motivation for an investment idea.

// What happens when you get out of that boring meeting?

// You feel happy, right?

// An analogy to this in terms of investment ideas can be: if the markets are cold for a specified period, neither moving up or down, but just hopping within low range, can you expect a "breakout" , i.e. can you expect that the "boring" period will end with a positive or a negative sentiment?

// That's a small invest idea.

// An example of a line of thought to quantify a qualitative idea is as follows:

// A cold period in the markets will mean that the prices are not moving much. There is a very low range, meaning the recent standard deviation i.e. the amount of movement in the markets is lesser than the volatility in the longer range.
// Our simulator has a predefined function called std(price, time period ). It takes the price of the stock and the time period to be considered to calculate the standard deviation.

// std( open,10) gives the value of the standard deviation of open prices of the stock of last 10 minutes.

// std( open,30) gives the value of the standard deviation of open prices of the stock of last 30 minutes.
// Since the idea of the strategy is that if the recent movement in the market is lesser than the movement in its longer time period, a breakout is expected and you buy at that point.

// The left-hand side of the equation is the movement in recent times, the right-hand side of the equation is the movement in a longer time frame, then this formula causes our systems to buy when the recent 10 minutes volatility is lower than long-term 30 minutes volatility.

// To develop yor own Algorithmic Trading Strategies visit https://algolab.kuants.in/backtest/ .You can also use 1000s of other strategies made by other uses by renting it at https://smart.kuants.in/dashboard

// More about stock market simulators in the next lesson.

             
//           </div></div></div></div>

//               )}}

//   export default B1;
