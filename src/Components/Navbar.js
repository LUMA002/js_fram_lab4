import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Головна</Link></li>
                <li><Link to="/news">Новини</Link></li>
                <li><Link to="/profile">Профіль</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
