import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './blog.module.css'
export default class TechnicalAnalysis extends Component {
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
                            <Link to='/blog/technical-analysis/Simple-Moving-Average'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Simple-Moving-Average</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/technical-analysis/Exponential-Moving-Average'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Exponential-Moving-Average</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/technical-analysis/Volume-Weighted-Moving-Average'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Volume-Weighted-Moving-Average</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/technical-analysis/Average-True-Range'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Average-True-Range</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/technical-analysis/Moving-Average-Convergence-Divergence'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Moving Average Convergence Divergence </h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/technical-analysis/Relative-Strength-Index'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Relative-Strength-Index</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/technical-analysis/Rate-of-Change'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Rate-of-Change </h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/technical-analysis/On-Balance-Volume'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>On-Balance-Volume</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/technical-analysis/Ease-of-Movement'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Ease-of-Movement</h4>
                            </Link>
                        </div>
                        <div className={styles.blogCard} >
                            <Link to='/blog/technical-analysis/Aaron-Down'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Aaron-Down</h4>
                            </Link>
                        </div>
                        <div className={styles.blogCard} >
                            <Link to='/blog/technical-analysis/Aaron-Up'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Aaron-Up</h4>
                            </Link>
                        </div>
                        <div className={styles.blogCard} >
                            <Link to='/blog/technical-analysis/Pivot-Point'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Pivot-Point</h4>
                            </Link>
                        </div>
                        <div className={styles.blogCard} >
                            <Link to='/blog/technical-analysis/Standard-Deviation'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Standard-Deviation</h4>
                            </Link>
                        </div>
                        <div className={styles.blogCard} >
                            <Link to='/blog/technical-analysis/Skewness'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Skewness</h4>
                            </Link>
                        </div>
                        <div className={styles.blogCard} >
                            <Link to='/blog/technical-analysis/Correlation'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Correlation</h4>
                            </Link>
                        </div>
                        <div className={styles.blogCard} >
                            <Link to='/blog/technical-analysis/previous-day-close'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Previous-day-close</h4>
                            </Link>
                        </div>
                        <div className={styles.blogCard} >
                            <Link to='/blog/technical-analysis/previous-day-open'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Previous-day-open</h4>
                            </Link>
                        </div>
                        <div className={styles.blogCard} >
                            <Link to='/blog/technical-analysis/previous-day-low'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>Previous-day-low</h4>
                            </Link>
                        </div>
                    
              </div>
          </div>
      </div>
    )
  }
}
