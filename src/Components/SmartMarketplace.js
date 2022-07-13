import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './blog.module.css'
export default class BuildingAlgorithms extends Component {
    render() {
        return (
            <div className={styles.blogsContainer}>
                <h1>Algorithmic Trading</h1>
                <span>Algorithmic Trading is a tech-backed approach to investment in stock markets through automated order placment based on pre-defined conditions</span>
                <div className={styles.bottomContainer}>
                    <div className={styles.articleCategories}>
                        <img src='/assets/books.png' alt='books' className={styles.booksIcon} />
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
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
