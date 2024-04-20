import React from 'react'
import program1 from '../../Assets/program-1.png'
import program2 from '../../Assets/program-2.png'
import program3 from '../../Assets/program-3.png'
import proicon1 from '../../Assets/program-icon-1.png'
import proicon2 from '../../Assets/program-icon-2.png'
import proicon3 from '../../Assets/program-icon-3.png'

function Programs() {
  return (
    <div className='flex flex-col justify-center item-center' id='program'>
        <div className='flex flex-col items-center my-20'>
            <p className='text-[#212EA0] font-medium'>Our Program</p>
            <h1 className='text-4xl font-extrabold'>What We Offer</h1>
        </div>
        <div className='flex flex-col items-center justify-center lg:flex-row'>
            <div className="relative flex items-end justify-center w-[330px] h-[330px] rounded-lg image group" style={{backgroundImage: `url(${program1})`,backgroundSize:'cover',backgroundPosition:'center'}}>
                <div className='flex flex-col items-center justify-center w-[330px] h-0 rounded-lg cursor-pointer group group-hover:bg-[rgb(0,15,152)] group-hover:bg-opacity-30 group-hover:transition-all group-hover:duration-500 group-hover:h-[330px] hover:ease-linear'>
                    <img className='hidden h-16 duration-800 group-hover:flex group-hover:transition-all ' src={proicon1}alt="" />
                    <p className='hidden text-white group-hover:flex group-hover:transition-all group-hover:delay-700'>Graduation Degree</p>
                </div>
            </div>
            <div className="relative flex items-end justify-center w-[330px] h-[330px] lg:mx-4 my-4 rounded-lg image group" style={{backgroundImage: `url(${program2})`,backgroundSize:'cover',backgroundPosition:'center'}}>
                <div className='flex flex-col items-center justify-center w-[330px] h-0 rounded-lg cursor-pointer group group-hover:bg-[rgb(0,15,152)] group-hover:bg-opacity-30 group-hover:transition-all group-hover:duration-500 group-hover:h-[330px] hover:ease-linear'>
                    <img className='hidden h-16 duration-800 group-hover:flex group-hover:transition-all ' src={proicon2}alt="" />
                    <p className='hidden text-white group-hover:flex group-hover:transition-all group-hover:delay-700'>Masters Degree</p>
                </div>
            </div>
            <div className="relative flex items-end justify-center w-[330px] h-[330px] rounded-lg image group" style={{backgroundImage: `url(${program3})`,backgroundSize:'cover',backgroundPosition:'center'}}>
                <div className='flex flex-col items-center justify-center w-[330px] h-0 rounded-lg cursor-pointer group group-hover:bg-[rgb(0,15,152)] group-hover:bg-opacity-30 group-hover:transition-all group-hover:duration-500 group-hover:h-[330px] hover:ease-linear'>
                    <img className='hidden h-16 duration-800 group-hover:flex group-hover:transition-all ' src={proicon3}alt="" />
                    <p className='hidden text-white group-hover:flex group-hover:transition-all group-hover:delay-700'>Post Graduation</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Programs
