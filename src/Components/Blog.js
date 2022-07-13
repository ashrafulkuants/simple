
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './blog.module.css'
export default class Blog extends Component {
    render() {
        return (
            <div className={styles.blogsContainer}>
                <h1>Blogs</h1>
                {/* <span>Algorithmic Trading is a tech-backed approach to investment in stock markets through automated order placment based on pre-defined conditions</span> */}
                <div className={styles.bottomContainer}>
                    <div className={styles.articleCategories}>
                        <img src='/assets/books.png' alt='books' className={styles.booksIcon} />
                        <ul>
                            <li><Link to='/blog'>All Articles</Link></li>
                            <li><Link to='/blog/algorithmic-trading' >Algorithmic Trading</Link></li>
                            <li><Link to='/blog/technical-analysis'>Technical Analysis</Link></li>
                            <li><Link to='/blog/stock-markets'>Stock Market</Link></li>
                            <li><Link to='/blog/algolab'>Algolab</Link></li>
                            {/* <li><Link to='/blog/smart-marketplace'>SMART</Link></li> */}
                        </ul>
                    </div>
                    <div className={styles.articlesContainer}>
                        <div className={styles.blogCard} >
                            <Link to='/blog/algorithmic-trading/What-is-Slippage'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>What is Slippage and why is it required?</h4>
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
                        </div><div className={styles.blogCard} >
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
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/smart-marketplace/How-much-can-I-earn-using-SMART-algorithms'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>How-much-can-I-earn-using-SMART-algorithms?</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/smart-marketplace/What-is-SMART-Algorithms'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>What-are-SMART-Algorithms? </h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/smart-marketplace/How-can-I-use-SMART-Algorithms'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>How-can-I-use-SMART-Algorithms? </h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/smart-marketplace/How-to-subscribe-to-a-SMART-Algorithm'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>How-to-subscribe-to-a-SMART-Algorithm? </h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/smart-marketplace/What-are-the-details-I-need-to-look-into-to-judge-the-quality-of-a-SMART-Algorithm'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>What-are-the-details-I-need-to-look-into-to-judge-the-quality-of-a-SMART-Algorithm?</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
                            <Link to='/blog/smart-marketplace/What-are-the-benefits-of-using-SMART-Algorithms'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4>What-are-the-benefits-of-using-SMART-Algorithms?</h4>
                            </Link>
                        </div><div className={styles.blogCard} >
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
                        {/* <div className={styles.blogCard} >
                            <Link to='/blog/'>
                                <img src='/assets/blog/slippage.png' alt='slippage' />
                                <h4></h4>
                            </Link>
                        </div> */}
                       
                    </div>
                </div>
            </div>
        )
    }
}
