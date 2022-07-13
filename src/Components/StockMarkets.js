import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './blog.module.css'
export default class StockMarkets extends Component {
  render() {
    return (
      <div className={styles.blogsContainer}>
          <h1>About Stock Markets</h1>
          <span>India has one of the largest and fastest stock exchanges in the world, BSE and NSE and a rich history that starts from 1875!</span>
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
                            <Link to='/blog/stock-markets/Stock-Trading-in-India'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Stock-Trading-in-India</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/stock-markets/sensex'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>About Sensex </h4>
                            </Link>
                        </div>
                        <div className={styles.blogCard} >
                            <Link to='/blog/stock-markets/What-is-stock-market'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>What-is-stock-market?</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/stock-markets/What-are-the-different-market-instruments'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>What-are-the-different-market-instruments?</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/stock-markets/How-can-I-participate-in-stock-markets'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>How-can-I-participate-in-stock-markets?</h4>
                            </Link>
                        </div>
                    
              </div>
          </div>
      </div>
    )
  }
}
