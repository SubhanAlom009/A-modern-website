import React, { useEffect, useState } from 'react'
import logo from '../../Assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
  const [scrollBg,setScrollBg] = useState(0)

  useEffect(()=>{
    const handleScroll = ()=>{
      const position = window.scrollY;
      setScrollBg(position)
    }
    
    window.addEventListener('scroll',handleScroll)

  },[])
  
  const handleToggleMenu = () => {
    console.log('clicked');
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`w-full h-[62px] lg:px-12 transition-all duration-300 bg-opacity-0 ${scrollBg > 40 ? 'bg-[#212EA0] bg-opacity-100' : 'bg-transparent'} xl:px-20 px-4 items-center flex justify-between fixed z-10`}>
        <img className='lg:w-[200px] w-[150px]' src={logo} alt="logo" />
        <ul className='md2:flex hidden text-white lg:w-[700px] w-[600px] items-center justify-between'>
            <li className='cursor-pointer'><a href="#home">Home</a></li>
            <li className='cursor-pointer'><a href="#program">Program</a></li>
            <li className='cursor-pointer'><a href="#about">About us</a></li>
            <li className='cursor-pointer'><a href="#campus">Campus</a></li>
            <li className='cursor-pointer'><a href="#testimonials">Testimonials</a></li>
            <li className='px-6 py-2 font-medium text-black bg-white cursor-pointer rounded-2xl focus:outline-none'><button >Contact Us</button></li>
        </ul>
        <div className='flex text-2xl text-white cursor-pointer md2:hidden' onClick={handleToggleMenu}><FontAwesomeIcon icon={faBars} />
        </div>
        {
          showMenu && (
            <ul className='text-white md2:invisible visible bg-[#212EA0] p-2 rounded-lg leading-[50px] w-[150px] h-[350px] flex flex-col items-center justify-start absolute right-4 top-20 '>
                <li className='cursor-pointer'><a href="#home" onClick={()=>setShowMenu(false)}>Home</a></li>
                <li className='cursor-pointer'><a href="#program" onClick={()=>setShowMenu(false)}>Program</a></li>
                <li className='cursor-pointer'><a href="#about" onClick={()=>setShowMenu(false)}>About us</a></li>
                <li className='cursor-pointer'><a href="#campus" onClick={()=>setShowMenu(false)}>Campus</a></li>
                <li className='cursor-pointer'><a href="#testimonials" onClick={()=>setShowMenu(false)}>Testimonials</a></li>
                <li className='px-4 font-medium text-black bg-white border-none cursor-pointer rounded-2xl focus:outline-none'><button >Contact Us</button></li>
            </ul>   
          )
        }
    </nav>
  )
}

export default Navbar
