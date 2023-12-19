import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() 
{
  return (<div>
    <nav>
      <Link to="/">Home    </Link>
      {/* <Link to="/Blog">Navbar</Link> */}
      <Link to="/Search">Search    </Link>
      <Link to="/Support">Support    </Link>
      <Link to="/Info">Info    </Link>
      <Link to="/Lounger">Lounger    </Link>
      <Link to="/Travelers">Travelers    </Link>
      <Link to="/Subscriber">Subscriber    </Link>
      <Link to="/Footer">Footer    </Link>
    </nav>
    <Outlet />
  </div>)
}

// const Base = () => {
//   return (
    
//   )
// };

