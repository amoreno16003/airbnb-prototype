import React from 'react'
import '../css/Hero.css'
import collage from '../images/collage.png'
const Hero = () => {
  return (
    <div id='HeroRoot'>
        <div className='HeroImageContainer'>
            <img src={collage} alt="" />
        </div>
        <h1>Online Experiences</h1>
        <p className='Herop'>Join a unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </div>
  )
}

export default Hero