import React from "react";
import { Link } from 'react-router-dom';

const Header = () => (
    <nav>
        <Link to='/home'>
            Home
        </Link>
        <Link to='/calculator'>
            Calculator
        </Link>
    </nav>
)

export default Header