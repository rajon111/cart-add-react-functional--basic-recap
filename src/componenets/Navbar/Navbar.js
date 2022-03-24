import React from 'react';
import logo from '../../componenets/images/Logo.svg'
import './Navabr.css'
const Navbar = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className='link'>
            <a href="/home">Home</a>
            <a href="/cart">Cart</a>
            <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Navbar;