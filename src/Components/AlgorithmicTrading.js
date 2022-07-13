import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './blog.module.css'
export default class AlgorithmicTrading extends Component {
  render() {
    return (
      <div className={styles.blogsContainer}>
         <h1>Algorithmic Trading</h1>
          <span>Algorithmic Trading is a tech-backed approach to investment in stock markets through automated order placment based on pre-defined conditions</span>
          <div className={styles.bottomContainer}>
              <div className={styles.articleCategories}>
                  <img src='/assets/books.png' alt='books' className={styles.booksIcon}/>
                  <ul>
                            <li><Link to='/blog'>All Articles</Link></li>
                            <li><Link to='/blog/algorithmic-trading' >Algorithmic Trading</Link></li>
                            <li><Link to='/blog/technical-analysis'>Technical Analysis</Link></li>
                            <li><Link to='/blog/stock-markets'>Stock Markets</Link></li>
                            <li><Link to='/blog/algolab'>Algolab</Link></li>
                            <li><Link to='/blog/smart-marketplace'>SMART Marketplace</Link></li>
                        </ul>
              </div>
              <div className={styles.articlesContainer}>
              <div className={styles.blogCard} >
                            <Link to='/blog/algorithmic-trading/What-is-Slippage'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>What is Slippage and why is it necessary?</h4>
                            </Link>
                        </div>
                        {/* <div className={styles.blogCard} >
                            <Link to='/blog/algorithmic-trading/Developing-investment-strategies-for-Algorithmic-Trading'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Developing-investment-strategies-for-Algorithmic-Trading</h4>
                            </Link>
                        </div> */}
                        <div className={styles.blogCard} >
                            <Link to='/blog/algorithmic-trading/Stock-Market-Simulator'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Stock-Market-Simulator</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/algorithmic-trading/What-is-Algo-trading'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>What-is-Algo-trading</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/algorithmic-trading/Benefits-of-Algo-trading'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Benefits-of-Algo-trading</h4>
                            </Link>
                        </div>  
                        <div className={styles.blogCard} >
                            <Link to='/blog/algorithmic-trading/Introduction-to-Backtesting'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Introduction-to-Backtesting</h4>
                            </Link>
                        </div>
                        <div className={styles.blogCard} >
                            <Link to='/blog/algorithmic-trading/Step-by-Step-set-of-instructions-to-buy-and-sell-orders-while-trading-automatically-in-Algo-Trading'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Step-by-Step-set-of-instructions-to-buy-and-sell-orders-while-trading-automatically-in-Algo-Trading</h4>
                            </Link>
                        </div>
                        <div className={styles.blogCard} >
                            <Link to='/blog/algorithmic-trading/What-is-algorithmic-Trading-and-how-is-algo-trading-different-from-manual-trading'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>What-is-algorithmic-Trading-and-How-is-algo-trading-different-from-manual-trading? </h4>
                            </Link>
                        </div>
                        <div className={styles.blogCard} >
                            <Link to='/blog/algorithmic-trading/What-are-the-requirements-of-Algorithmic-Trading'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>What-are-the-requirements-of-Algorithmic-Trading?</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/algorithmic-trading/Backtesting-Meaning-and-Significance'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Backtesting-What-it-is-What-is-its-significance</h4>
                            </Link>
                        </div>
                    
              </div>
          </div>
      </div>
    )
  }
}
