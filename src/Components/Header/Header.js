import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <h1>This is header page</h1>
            <Link to='/home'>Home</Link>
            <Link to='/orderreview'>OrderReview</Link>
            <Link to='/grandpa'>Grandpa</Link>
        </nav>
    );
};

export default Header;