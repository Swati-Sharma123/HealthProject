import React from 'react'
import './Info.css';
export default function Info() {
  return (
    <div className='info_section'>
    <div className='Infocontainer_container'>
    <div className='titleDiv_flex'>
    <h2 className='headFlex'>Travel to made memories all arround the world</h2>
    <button className='btn'>View All</button>
    </div>
    
    <div className='carDiv_grid'>
   
    <div className='singleCard_grid'>
    <div className='iconDiv_flex'>
    <i class="fa-solid fa-calendar-days"></i>
    </div>
    <span className='cardTitle'><b>Book & Relax</b></span>
    <p>You can also call airlines from your phone and book a flight ticket!</p>
    </div>

    <div className='singleCard_grid'>
    <div className='iconDiv_flex'>
    <i className=" logo fa-solid fa-list-check"></i>
    </div>
    <span className='cardTitle'><b>Smart Checklist </b></span>
    <p>You can also call airlines from your phone and book a flight ticket!</p>
    </div>
    
    <div className='singleCard_grid'>
    <div className='iconDiv_flex'>
    <i class="fa-solid fa-bookmark"></i>
            </div>
    <span className='cardTitle'><b>Save More</b></span>
    <p>You can also call airlines from your phone and book a flight ticket!</p>
    </div>
    </div>
    </div>

    </div>
  )
}
