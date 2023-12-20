import React from 'react'
import './Home.css';
import bgvdo from "./../../Media/bgvdo.mp4";
import bgImg1 from './../../Media/bgImg1.png';


export default function Home() {
  return (
    <div className='home flex container'>
<div className='mainText'>
<h1>Create Ever-lasting Memories With Us</h1>
</div>   
<div className='homeImages flex'>
<div className='videoDiv'>
<video  className='video' loop controls="controls" muted width= "1000" height="400" autoPlay > 
< source  src={bgvdo} ></source>
</video>
<img className='plane' src={bgImg1} ></img>
</div>

</div> 
    </div>
  )
}
