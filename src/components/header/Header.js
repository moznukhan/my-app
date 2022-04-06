import React from 'react';
import logo from '../../images/logo.png'
import './header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/Shop">Shop</a>
                <a href="Review order">Review Order</a>
                <a href="manage">Manage inventory here</a>
            </nav>
        </div>  
    );
};

export default Header;