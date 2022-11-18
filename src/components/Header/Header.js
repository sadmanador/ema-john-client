import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className="menu">
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/">Shop</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/orders">Order</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/inventory">Inventory</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/about">About</NavLink>
            </div>
        </nav>
    );
};

export default Header;