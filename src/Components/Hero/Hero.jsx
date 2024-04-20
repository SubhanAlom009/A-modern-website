import React from 'react'
import ReactDOM from 'react-dom'
import HeroImg from '../../Assets/hero.png'
import MobileHeroImg from '../../Assets/hero-cropped.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Hero() {
  return (
    <div id='home' className='flex flex-col items-center justify-center w-full h-screen px-20 ' style={{ backgroundImage: `linear-gradient(rgba(8, 0, 58, 0.7), rgba(8, 0, 58, 0.7)), url(${HeroImg})`,backgroundSize:'cover',backgroundPosition:'center',color:'white',backgroundRepeat:'no-repeat' }}>
      <h1 className='text-4xl xl:text-6xl lg:w-[700px] xl:w-[800px] mt-4 font-bold leading-[50px] text-center lg:text-5xl'>We Ensure better education for a better world</h1>
      <p className='my-4 xl:text-xl md:text-lg lg:text-lg text-center 200px lg:w-[760px] md:w-[400px]'>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
      <button className='h-12 px-6 py-2 font-sans font-medium text-black bg-white cursor-pointer rounded-[100px] flex items-center justify-between w-44'>Explore More <FontAwesomeIcon icon={faArrowRight} /></button>
    </div>
  )
}

export default Hero
