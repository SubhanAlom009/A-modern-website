import React, { useRef,useEffect } from 'react'
import user1 from '../../Assets/user-1.png'
import user2 from '../../Assets/user-2.png'
import user3 from '../../Assets/user-3.png'
import user4 from '../../Assets/user-4.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Testimonials() {

  const users = [user1,user2,user3,user4]
  const containerRef = useRef(null)


  const handleClickPrev = () => {
    const container = containerRef.current;
    container.scrollLeft -= 520;
  }

  const handleClickNext = () => {
    const container = containerRef.current;
    container.scrollLeft += 520;
  }


  const handleWheel = (e) => {
    const container = containerRef.current;
    const scrollSpeed = 3;
    container.scrollLeft += e.deltaY * scrollSpeed;
  };

  useEffect(() => {
    const handleWindowWheel = (e) => {
      const container = containerRef.current
      if (container && container.contains(e.target)) {
        e.preventDefault()
      }
    }

    document.addEventListener('wheel', handleWindowWheel, { passive: false })

    return () => {
      document.removeEventListener('wheel', handleWindowWheel)
    }
  }, [])
  
  return (
    <div id='testimonials' className='flex flex-col items-center justify-center h-screen mt-24 md:mt-10'>
      <div className='flex flex-col items-center justify-center mb-8'>
        <p className='text-[#212EA0] font-medium'>Testimonials</p>
        <h1 className='text-3xl font-bold'>What Student Says</h1>
      </div>
      <div className='flex items-center justify-center'>
        <div className='h-12 w-12 bg-[#212EA0] flex justify-center items-center rounded-full text-white mx-4 cursor-pointer' onClick={handleClickPrev} >
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className='flex xl:w-[1030px] lg:w-[800px] md2:w-[700px] sm:w-[400px] w-[250px] min-h-[270px] overflow-scroll scrollbar-width-none transition-all scroll-smooth' onWheel={handleWheel} ref={containerRef}>
            {users.map((user, index) => (
                <div key={index} className="m-4 justify-center flex-col rounded-[20px] xl:min-w-[500px] lg:min-w-[400px] md2:min-w-[350px] md:min-w-[300px] w-[200px]  h-auto px-6 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                  <div className="flex items-center mb-4">
                    <img
                      className="max-w-16 h-16 mr-4 rounded-full border-4 border-[#212EA0]"
                      src={user}
                    />
                    <div>
                      <p className="font-bold text-[#212EA0] w-auto">Emily Williams</p>
                      <p>Edusity, USA</p>
                    </div>
                  </div>
                  <div className="w-auto">
                    <p>
                      Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art
                      facilities, and commitment to academic excellence have truly exceeded my expectations.
                    </p>
                  </div>
                </div>
              ))}
        </div>
        <div className='h-12 w-12 bg-[#212EA0] flex justify-center items-center rounded-full text-white mx-4 cursor-pointer' onClick={handleClickNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
