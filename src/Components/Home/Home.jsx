import React from 'react'
// import './Home.css';
// import bgvdo1 from "./../../Media/bgvdo1.mp4";
// import bgImg1 from './../../Media/bgImg1.png';
import MediaComponent from '../MediaComponent/MediaComponent';
import ImageComponent from '../MediaComponent/ImageComponent';


export default function Home() 
{
  const container= 
  {
    margin: 20,
    marginTop: 30,
  }

  return (
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
    </div>
  )
}
