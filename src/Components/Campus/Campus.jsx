import React from 'react'
import gallery1 from '../../Assets/gallery-1.png'
import gallery2 from '../../Assets/gallery-2.png'
import gallery3 from '../../Assets/gallery-3.png'
import gallery4 from '../../Assets/gallery-4.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Campus() {
  return (
    <div id='campus' className='flex flex-col items-center justify-center h-screen px-4 xl:px-20 mt-36'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-[#212EA0] font-medium'>Gallery</p>
            <h1 className='text-3xl font-bold'>Campus Photos</h1>
        </div>
        <div className='flex flex-wrap justify-center my-20 md2:flex-nowrap'>
            <img className='max-w-[260px] w-1/2 py-2 md2:py-0 md2:w-[25%] px-2 rounded-[20px]' src={gallery1} />
            <img className='max-w-[260px] w-1/2 py-2 md2:py-0 md2:w-[25%] px-2 rounded-[20px]' src={gallery2} />
            <img className='max-w-[260px] w-1/2 py-2 md2:py-0 md2:w-[25%] px-2 rounded-[20px]' src={gallery3} />
            <img className='max-w-[260px] w-1/2 py-2 md2:py-0 md2:w-[25%] px-2 rounded-[20px]' src={gallery4} />
        </div>
        <div>
        <button className='h-12 px-6 py-2 font-sans font-medium bg-[#212EA0] text-white cursor-pointer rounded-[100px] flex items-center justify-between w-44'>See More Here <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    </div>
  )
}

export default Campus
