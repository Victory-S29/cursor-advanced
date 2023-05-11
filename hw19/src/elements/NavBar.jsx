import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
const NavBar = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="/" className='navigation--link'>Home</Link>
                </li>
                <li>
                    <Link to="/publication" className='navigation--link'>Publication</Link>
                </li>
                <li>
                    <Link to="/profile" className='navigation--link'>Profile</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;