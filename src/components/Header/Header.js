import React from 'react';
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className="menu">
                <NavLink className={({isActive})=>isActive ? 'active__link' : undefined} to="/">Shop</NavLink>
                <NavLink className={({isActive})=>isActive ? 'active__link' : undefined} to="/orders">Order</NavLink>
                <NavLink className={({isActive})=>isActive ? 'active__link' : undefined} to="/inventory">Inventory</NavLink>
                <NavLink className={({isActive})=>isActive ? 'active__link' : undefined} to="/about">About</NavLink>
            </div>
        </nav>
    );
};

export default Header;