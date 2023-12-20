import React from 'react'
import  './Search.css'

export default function Search() {
  return (
    <div className='seach_container_section'>
    <div className='section_container_section'>
    <div className='btns_flex'>
    <div className='single_btn'>
    <span className='section_class'>Economy</span>
    </div>
    <div className='single_btn'>
    <span className='section_class'>Business Class</span>
    </div>
    <div className='single_btn'>
    <span className='section_class'>First Class</span>
    </div>
    </div>
    <div className='searchInputs_flex'>
    <div className='singleInputs_flex'>
    <div className='icon_div'>
    <i className="icon fa-solid fa-location-dot"></i>
    </div>
    <div className='texts'>
    <h4>Location</h4>
    <input type='text' placeholder='Where do you want to go..?'/>
    </div>
    </div>

    <div className='singleInputs_flex'>
    <div className='icon_div'>
    <i className=" icon fa-solid fa-location-dot"></i>
    </div>
    <div className='texts'>
    <h4>Travelers</h4>
    <input type='text' placeholder='Add guests..'/>
    </div>
    </div>

    <div className='singleInputs_flex'>
    <div className='icon_div'>
    <i className=" icon fa-regular fa-calendar-days"></i>
    </div>
    <div className='texts'>
    <h4>Check In</h4>
    <input type='text' placeholder='Add Date..'/>
    </div>
    </div>

    <div className='singleInputs_flex'>
    <div className='icon_div'>
    <i className=" icon fa-regular fa-calendar-days"></i>
    </div>
    <div className='texts'>
    <h4>Check Out</h4>
    <input type='text' placeholder='Add Date..'/>
    </div>
    </div>
    <button className='btn btnBlock flex'>Seacrh Flight</button>
    </div>
    </div>
    </div>
  )
}
