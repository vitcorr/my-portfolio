import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div name = 'home' className=' w-full h-screen bg-[#0a192f]'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Victor Kolawole.</h1>
            <h2 className='text-4xl font-bold text-[#8892b8]'>I'm a Software Engineer, Web Developer and Student.</h2>
            <div className='mt-9'>
              <Link to="about" smooth = {true} duration={500}>
              <button className= 'group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 border-pink-600'>About
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
              </Link> 
            </div>
        </div>
    </div>
  )
}

export default Home