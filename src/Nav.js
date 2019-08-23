import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
        <Link to='/'>
            <p>Home</p>
        </Link>
        <ul className="nav-links">
            <Link to='/about'>
                <li>About</li>
            </Link>
            <Link to='/contact'>
                <li>Contact</li>
            </Link>
        </ul>
    </div>
  );
}

export default Nav;
