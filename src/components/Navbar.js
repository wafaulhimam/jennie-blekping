import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';

const Navbar = () => {
    return (
        <div className="link-nav">
            <Link to="/"><p className="link-nav">Home</p></Link> | 
            <Link to="/about-me">About Me</Link> |
            <Link to="/counter">Counter</Link> | 
            <Link to="/hooks">Hooks</Link> |
            <Link to="/contributor">Contributor</Link> |
            <Link to="/buku">Buku</Link>
        </div>
    );
};

export default Navbar;