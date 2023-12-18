import React from 'react' 
import pilotImg from'./../../Media/pilotImg.jpg';
import insideImg from'./../../Media/insideImg.jpg'
import './Lounger.css';

export default function Lounger() {
  return (
    <div className='longerContainer_section'>
    <div className='textDiv'>
    <h2>Unaccompanied Minor Lounge</h2>
    </div>
    <div className='sectionContainer_grid'>
    

   

    <div className='grids_grid'>

    <div className='singleGrid'>
    <span className='gridTitle'><b>Help through the airpot</b></span>
    <p className='paraDiv'> You can also call airlines from your phone and book a flight ticket to one of your faviourit destination.</p>
    </div>

    <div className='singleGrid'>
    <span className='gridTitle'><b>Priority Boarding</b></span>
    <p className='paraDiv'> You can also call airlines from your phone and book a flight ticket to one of your faviourit destination.</p>
    </div>

    <div className='singleGrid'>
    <span className='gridTitle'><b>Care on the flight </b></span>
    <p className='paraDiv'> You can also call airlines from your phone and book a flight ticket to one of your faviourit destination.</p>
    </div>

    <div className='singleGrid'>
    <span className='gridTitle'><b>Chauffeur-drivr service</b></span>
    <p className='paraDiv'> You can also call airlines from your phone and book a flight ticket to one of your faviourit destination.</p>
    </div>
    </div>

    <div className='imgDiv'>
    <img className='PlainimgOne' src={pilotImg} alt='numberOne_img'/>
    <img className='PlainimgTwo' src={insideImg} alt='numberTwo_img'/>
    </div>
    
    
    </div>
    </div>
  )
}
