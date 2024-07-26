import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name = 'home' className=' w-full h-screen bg-[#0a192f]'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Victor Kolawole</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b8]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#8892b8] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum sint voluptate ab officia reiciendis id dolore nostrum cupiditate! Corporis, labore cumque atque saepe eius perspiciatis dolorum id cupiditate quae.</p>
            <div>
                <button className= 'group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 border-pink-600'>View Work
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home