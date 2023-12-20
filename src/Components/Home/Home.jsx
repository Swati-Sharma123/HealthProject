import React from 'react'
<<<<<<< HEAD
import './Home.css';
import bgvdo from "./../../Media/bgvdo.mp4";
import bgImg1 from './../../Media/bgImg1.png';
=======
// import './Home.css';
// import bgvdo1 from "./../../Media/bgvdo1.mp4";
// import bgImg1 from './../../Media/bgImg1.png';
import MediaComponent from '../MediaComponent/MediaComponent';
import ImageComponent from '../MediaComponent/ImageComponent';
>>>>>>> c8c1eea4247f8dd1c5f0e7bfcfa0cd99c77a6887


export default function Home() 
{
  const container= 
  {
    margin: 20,
    marginTop: 30,
  }

  return (
<<<<<<< HEAD
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
=======
    <div >
      <div>
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>   
      <div >
        <div style={container}>
          <MediaComponent/>          
          <ImageComponent/>
        </div>
      </div> 
>>>>>>> c8c1eea4247f8dd1c5f0e7bfcfa0cd99c77a6887
    </div>
  )
}
