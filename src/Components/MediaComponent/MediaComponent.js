import React from 'react'
import bgvdo1 from "./../../Media/bgvdo1.mp4";

export default function MediaComponent() 
{
    const component1 = 
    {
        width:'1000px',
    }

    return (
        <video style={component1} autoplay loop controls="controls" muted alt="">
            <source  src={bgvdo1}/>
        </video>
  )
}