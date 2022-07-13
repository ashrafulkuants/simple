// import blog  from './cardData.json'
// import React, { Component } from 'react'

// export default class Temp extends Component {
//   render() {
//       this.handleClick=()=>{
//           var data
//         blog.map((item)=>{
//         let tempData=`<div className={styles.blogCard} >
//                    <Link to='/blog/${item.link}'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>${item.title}</h4>
//                         </Link>
//                     </div>`
//                     data+=tempData
//         // console.log(tempData)
//     }
//         )
//         console.log(data);
//       }
      
//     return (
//       <div>temp
//           <button onClick={()=>this.handleClick()}>Click</button>
//           undefined<div className={styles.blogCard} >
//                    <Link to='/blog/Intro-to-Stock-Markets/What-is-stock-market'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What is stock market?</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Intro-to-Stock-Markets/What-is-a-Stock-Exchange'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What is a Stock Exchange?</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Intro-to-Stock-Markets/What-is-Sensex,-Nifty'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What is Sensex, Nifty ?</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Intro-to-Stock-Markets/Why-to-companies-list-on-Exchange'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>Why to companies list on Exchange?</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Intro-to-Stock-Markets/Why-price-of-companies-change'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>Why price of companies change ?</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Intro-to-Stock-Markets/What-is-demat-and-trading-account'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What is demat and trading account ?</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Intro-to-Stock-Markets/Why-is-difference-between-stock-and-shares'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>Why is difference between stock and shares? </h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Intro-to-Stock-Markets/What-is-NSE-and-BSE'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What is NSE and BSE</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Intro-to-Stock-Markets/How-many-types-of-orders-are-there'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>How many types of orders are there?</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Intro-to-Stock-Markets/What-is-short-selling'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What is short selling ?</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Equities,-Futures-and-Options/What-is-a-market-segment'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What is a market segment</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Equities,-Futures-and-Options/What-is-Leverage-and-Margins-in-Stock-Markets'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What is Leverage and Margins in Stock Markets</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Equities,-Futures-and-Options/What-is-Equities'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What is Equities</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Equities,-Futures-and-Options/What-is-Futures'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What is Futures</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Equities,-Futures-and-Options/What-are-Options'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What are Options</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Equities,-Futures-and-Options/What-is-Risk-Management'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What is Risk Management?</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Equities,-Futures-and-Options/What-are-Currencies'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What are Currencies?</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Equities,-Futures-and-Options/What-is-Crypto'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What is Crypto?</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Trading-and-Investing/What-is-investing'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What is investing </h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Trading-and-Investing/Difference-between-tradig-and-investing'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>Difference between tradig and investing</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Trading-and-Investing/How-do-decide-among-investing-and-trading'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>How do decide among investing and trading </h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Trading-and-Investing/How-is-trading-done-'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>How is trading done </h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Trading-and-Investing/How-is-investing-done'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>How is investing done </h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Trading-and-Investing/Fundamental-Analysis'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>Fundamental Analysis</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Trading-and-Investing/Technical-Analysis'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>Technical Analysis</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Intro-to-Algo-trading/Benefits-of-Algorithmic-Trading'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>Benefits of Algorithmic Trading</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Intro-to-Algo-trading/What-is-Algorithmic-Trading'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What is Algorithmic Trading</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Intro-to-Algo-trading/Components-of-Strategy'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>Components of Strategy</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Intro-to-Algo-trading/How-to-Write-Algorithms'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>How to Write Algorithms </h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Intro-to-Algo-trading/What-is-backtesting'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What is backtesting </h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Intro-to-Algo-trading/Importance-of-Backtesting'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>Importance of Backtesting</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Intro-to-Algo-trading/How-is-Algo-Trading-Different-from-Manual-Trading'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>How is Algo Trading Different from Manual Trading</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Intro-to-Algo-trading/SEBI-regulations-on-Algo-Trading'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>SEBI regulations on Algo Trading</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Building-Algorithms/What-are-the-components-of-Algos'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What are the components of Algos</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Building-Algorithms/Ideating-trading-strategies'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>Ideating trading strategies</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Building-Algorithms/What-is-slippage-and-why-is-it-important'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What is slippage and why is it important </h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Building-Algorithms/How-to-Analyse-Returns-and-improve-strategy-performance'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>How to Analyse Returns and improve strategy performance </h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Building-Algorithms/Understanding-Overfitting-bias'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>Understanding Overfitting bias </h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Building-Algorithms/Breaking-down-transaction-costs-and-their-importance'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>Breaking down transaction costs and their importance</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Building-Algorithms/What-is-OHLC-data'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>What is OHLC data</h4>
//                         </Link>
//                     </div><div className={styles.blogCard} >
//                    <Link to='/blog/Building-Algorithms/Understanding-basics-of-Backtesting'> 
//                         <img src='/assets/blog/slippage.png' alt='slippage'/>
//                         <h4>Understanding basics of Backtesting</h4>
//                         </Link>
//                     </div>
//       </div>
//     )
//   }
// }
