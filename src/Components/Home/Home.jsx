import React from 'react'
import './Home.css';
import bgvdo1 from "./../../Media/bgvdo1.mp4";
import bgImg1 from './../../Media/bgImg1.png';


export default function Home() {
  return (
    <div className='home flex container'>
<div className='mainText'>
<h1>Create Ever-lasting Memories With Us</h1>
</div>   
<div className='homeImages flex'>
<div className='videoDiv'>
<video autoplay loop controls="controls" muted width= "800" height="350" className='video'> < source  src={bgvdo1} ></source> </video>
<img className='plane' src={bgImg1} ></img>
</div>

</div> 
    </div>
  )
}
