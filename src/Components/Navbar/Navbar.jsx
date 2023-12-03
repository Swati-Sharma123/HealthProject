import React from 'react'
import './Navbar.css';
export default function Navbar() {
  return (<> 
    <div className='navbarFlex'>
    
    <div className='navbarOne_flex'>
    
    <div className='flex'> 
    <li className='flex ' >Support</li >
    <li className='flex '> Languages</li>
     </div>
     
     <div className='atb_flex'>
     <span>Sign In</span>
     <span>Sign Up</span>
     </div>
     </div>

     <div className='navbarTwo'>
    <img src='' alt=''/>
    <div className='navbar_menu'>
    <ul className='menuFlex' >
    <li className='listItem'>Home</li>
    <li className='listItem'>About</li>
    <li className='listItem'>Offers</li>
    <li className='listItem'>Seats</li>
    <li className='listItem'>Destinations</li>
    </ul>
    <button className='btn_flex_btnOne' >Contact</button>
    </div>
    </div>
    </div>
   </>
  )
}
