import React from 'react'
import aboutVideo from '../../Assets/aboutVid.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

function AboutUs() {
  return (
    <div className='flex flex-col-reverse items-center justify-center mt-20 md2:flex-row' id='about'>
        <div className='relative flex items-center justify-center h-[400px]'>
            <img className='w-[300px] md2:min-w-[400px] rounded-lg ' src={aboutVideo}/>
            <div className='absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 bg-[#212EA0] rounded-full top-1/2 left-1/2 bg-opacity-70 h-20 w-20'><FontAwesomeIcon className='absolute text-2xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' icon={faPlay} /></div>
        </div>
        <div className='max-w-[600px] mx-4 md2:ml-20 mb-4'>
            <p className='text-[#212EA0] font-medium text-2xl'>About University</p>
            <h1 className='my-4 text-4xl font-bold'>Nurturing Tomorrow's Leaders Today</h1>
            <div className='mr-4 md2:mr-0'>
                <p>
                    Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
                </p>
                <p className='my-4'>
                    With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
                </p>
                <p>
                    Whether you aspire to become a teacher, administrator, counselor, or educational leader, our perse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
