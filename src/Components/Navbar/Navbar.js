import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Navbar.css';
import  Sky from './../../Media/Sky.png'
import navbarImg from './../../Media/navbarImg.png'

const Navbar = () => {
  return (
    <>
<div className='flexBox'>
   <div className='flex1'>
        <div className='firstNavbar'>
  <div className='support_flex'>
  <i class="fa-solid fa-phone-volume"></i>
  <span className='support'>Support</span>
  </div>

  <div>
  <i class="fa-solid fa-globe"></i>
  <span>Language</span>
  </div>
  <div className='login_flex'>
  <span className='signin'>SignIn</span>
  <span className='signout'>SignOut</span>
  </div>
  </div>
  </div>
    
  <div className='secondNavbar' >
          <nav className='secondPart'>
          <img className='navbarImag' src={Sky} alt='navImg'/>
        <ul className='secondNavbar_text'>
          <li ><b>
            <Link className='links' to="/">Home</Link>
            </b>
          </li>

          <li><b>
            <Link className='links' to="/Search">Search</Link></b>
          </li>
          <li>
          <b>
            <Link className='links' to="/Support">Support</Link></b>
          </li>
          <li>
          <b>
            <Link className='links' to="/Info">Info</Link></b>
          </li>
          <li>
          <b>  <Link className='links' to="/Lounger">Lounger</Link></b>
          </li>
          <li>
           <b> <Link className='links' to="/Travelers">Travelers</Link></b>
          </li>
          <li>
           <b> <Link  className='links' to="/Subscriber">Subscriber</Link></b>
          </li>
          <li>
           <b> <Link className='links' to="/Footer">Footer</Link></b>
          </li>
          </ul>
          </nav>
          
          </div>
          
  </div>
  <button className='btn'>Contact</button>

      <Outlet />
    </>
  )
};

 export default Navbar;



