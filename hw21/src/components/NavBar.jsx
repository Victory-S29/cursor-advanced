import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"
const NavBar = () => {
    return (
        <nav className='navigation'>
            <ul>
                <li>
                    <Link to="/viewpost" className='navigation--link'>View Post</Link>
                </li>
                <li>
                    <Link to="/createpost" className='navigation--link'>Create Post</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;