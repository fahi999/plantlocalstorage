import React from 'react'
import '../Hero/Hero.css'
import heroimg from '../../Assets/heroimg.jpg'

export default function Hero() {
  return (
    <div> 
        <div className='hero'>
            <div className='hero-left'>
                <h1>NEW ARRIVALS ONLY</h1>
                <div className='hero-text'>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>Latest Collection</div>
                </div>
            </div>
            <div className='hero-right'>
                <img src={heroimg} alt="Hero"/>
            </div>
        </div>
      
    </div>
  )
}
