import React from 'react'
import mail from '../../Assets/mail-icon.png'
import location from '../../Assets/location-icon.png'
import phone from '../../Assets/phone-icon.png'
import msg from '../../Assets/msg-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


function Footer() {
  return (
    <div className='h-screen px-4 md2:px-20'>
      <div className='flex flex-col items-center justify-center mb-12'>
        <p className='text-[#212EA0] font-medium'>Contact Us</p>
        <h1 className='text-3xl font-bold'>Get in Touch</h1>
      </div>
      <div className='flex flex-col items-center justify-around md2:items-start md2:flex-row'>
        {/* Send msg */}
        <div className='mb-4 md2:mb-0'>
            <div className='flex items-center '>
                <h1 className='text-lg font-semibold lg:text-2xl'>Send us a message</h1>
                <img className='h-6 ml-2' src={msg}/>
            </div>
            <p className='max-w-[500px] my-4'>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <div className='flex items-center'>
                <img className='h-5 mr-2' src={mail}/>
                <label htmlFor="label">Contact@practice.dev</label>
            </div>
            <div className='flex items-center'>
                <img className='h-6 my-4 mr-2' src={phone}/>
                <label htmlFor="label">+1 123-456-789</label>
            </div>
            <div className='flex items-center'>
                <img className='h-6 mr-2' src={location}/>
                <label className='max-w-[250px]' htmlFor="label">77 Massachusetts Ave, Cambridge
                MA 02139, United States</label>
            </div>
        </div>
        {/* Form */}
        <form className='ml-4'>
            <div className='mb-4'>
                <p className='font-mono'>Your Name</p>
                <input className='sm:sm:w-[450px] w-[350px] focus:outline-none border-none h-[45px] bg-[#EBECFE] px-4' type="text" name="text" placeholder='Enter your name' />
            </div>
            <div className='mb-4'>
                <p className='font-mono'>Phone Number</p>
                <input className='sm:w-[450px] w-[350px] focus:outline-none border-none h-[45px] bg-[#EBECFE] px-4' type="number" name="number" placeholder='Enter your number'/>
            </div>
            <div className='mb-4'>
                <p className='font-mono'>Your Email</p>
                <input className='sm:w-[450px] w-[350px] focus:outline-none border-none h-[45px] bg-[#EBECFE] px-4' type="email" name="email" placeholder='Enter your email'/>
            </div>
            <div className='mb-4'>
                <p className='font-mono'>Write Your messages here</p>
                <textarea className='sm:w-[450px] w-[350px] focus:outline-none border-none h-[245px] bg-[#EBECFE] px-4 py-4' type="text" name="text" placeholder='Enter your message'/>
            </div>
            <button type='submit' className='h-12 px-6 py-2 font-sans font-medium text-white bg-[#212EA0] cursor-pointer rounded-[100px] flex items-center justify-between w-44'>Submit Form <FontAwesomeIcon icon={faArrowRight} /></button>
        </form>
      </div>
      <div className='h-16 mt-20'>
        <div className='w-full h-[2px] bg-[#a6a6a6]'></div>
        <div className='flex items-center justify-between px-2'>
            <p className='text-[#212EA0] font-medium'>Copyright 2022. All rights reserved</p>
            <div className='flex justify-between w-[230px]'>
                <p className='cursor-pointer'>Terms of Services</p>
                <p className='cursor-pointer'>Privacy Policy</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
