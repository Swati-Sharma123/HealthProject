import React from 'react'
import bgImg1 from './../../Media/bgImg1.png';

export default function ImageComponent() 
{
    const component2 = 
    {
        position: 'absolute', 
        top: 200, 
        left: 300
    }
    
    return (
        <img style={component2} src={bgImg1} alt=''/>
    )
}
