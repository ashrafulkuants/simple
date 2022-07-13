import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import { StickyContainer, Sticky } from 'react-sticky';
export default class Header extends Component {
    state = {
        activeNav: '',
        flag:false
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        const handleMenuClick = () => {
            this.state.activeNav===''?this.setState({activeNav:'active-nav'}):this.setState({activeNav:''})
            this.setState({flag:!this.state.flag})
        }
        return (
            <div className='flex header'>
                <a href='/'>
                <img src="/assets/Logo.png" alt='kuants_logo' className="main-logo" /></a>
                <div className='menu-container'>
                    <img src='/assets/bars-solid.svg' alt='hamburger-icon' className='menu-icon' onClick={handleMenuClick} />
                    <nav className={this.state.activeNav}>
                        {this.state.flag? <img src='/assets/cross.png' alt='cross-icon' className='menu-icon cross-icon' onClick={handleMenuClick} />:null}
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                        onClick={handleMenuClick}>
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            onClick={handleMenuClick}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/partner-program"
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            onClick={handleMenuClick}
                        >
                            Partner
                        </NavLink>
                        
                        <div className='nav-dl-btn-container'>
                            <a href='https://play.google.com/store/apps/details?id=com.kuants' target='_blank' rel="noreferrer"><button className="nav-dl-btn">Download App</button></a>
                        </div>
                    </nav>
                   
                </div>
                
            </div>
        )
    }
}
