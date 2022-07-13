import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './blog.module.css'
export default class BlogAlgoTrading extends Component {
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
                            <Link to='/blog/algolab/Backtesting-at-Kuants'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Backtesting-at-Kuants</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/algolab/Setting-the-Backtesting-Environment'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Setting-the-Backtesting-Environment</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/algolab/Selecting-Stocks'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Selecting-Stocks</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/algolab/Data-Available'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Data-Available</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/algolab/Components-of-a-Strategy'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Components-of-a-Strategy</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/algolab/Backtest-First-Strategy'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Backtest-first-Strategy</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/algolab/Long-Strategy'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Long-Strategy</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/algolab/Short-Strategy'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Short-Strategy</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/algolab/Setting-Target-and-Stoploss'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Setting-Target-And-Stoploss</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/algolab/Tear-Sheet-in-algotrading'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Tear-Sheet-in-algotrading </h4>
                            </Link>
                        </div>
              </div>
          </div>
      </div>
    )
  }
}
