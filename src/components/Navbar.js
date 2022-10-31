import React from 'react';
import { Link } from 'react-router-dom';
import myspotify from '../pages/myspotify.png'

const Navbar = () => {

    return (
            <nav className="nav-bar">
                <Link to="/">
                    <img
                        src={myspotify}
                        alt="home"
                    />
                </Link>
                <ul className="nav-links">
                    <li className="nav-link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/categories">Categories</Link>
                    </li>
                </ul>
            </nav>
    );
};

export default Navbar;