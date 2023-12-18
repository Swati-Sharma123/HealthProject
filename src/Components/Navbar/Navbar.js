import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() 
{
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Blog">Navbar</Link>
        </li>
        <li>
          <Link to="/Search">Search</Link>
        </li>
        <li>
          <Link to="/Support">Support</Link>
        </li>
        <li>
          <Link to="/Info">Info</Link>
        </li>
        <li>
          <Link to="/Lounger">Lounger</Link>
        </li>
        <li>
          <Link to="/Travelers">Travelers</Link>
        </li>
        <li>
          <Link to="/Subscriber">Subscriber</Link>
        </li>
        <li>
          <Link to="/Footer">Footer</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
}

const Base = () => {
  return (
    
  )
};

