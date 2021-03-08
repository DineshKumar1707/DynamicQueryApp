import React from 'react';
import "./App.css";
import { Link } from 'react-router-dom';


function Nav() {

    const navStyle = {
        color: 'white'
    };

  return (

    <nav>
        <h1>Dynamic Query App</h1>
        <ul className="nav-links">
            <Link style={navStyle} to='/newQuery'>
            <li>Create New Query</li>
            </Link>
            <Link style={navStyle} to='/query'>
            <li>Execution Page</li>
            </Link>
            <Link style={navStyle} to='/'>
            <li>Home</li>
            </Link>
        </ul>
    </nav>
   );
}


export default Nav;
