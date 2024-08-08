import React from 'react'

const About = () => {
  return (
    <div name = 'about' className='w-full min-h-screen h-full bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full min-h-screen h-full py-20 mx-auto'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
               
            </div>

                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4'>
                    <div>
                    <h1 className='text-cyan-200 font-bold'>Quick Facts</h1>
                        <p>- I am currently enrolled in the Bachelor of Computer Science Major at Carleton University (Graduation 2025) </p>
                        <p>- My interests are Software Engineering, Web Development and Mobile Application Development</p>
                        <p>- I enjoy playing videogames, basketball and experimenting with new JavaScript frameworks and libraries</p>
                    </div>
                    <div>
                        <h1 className='text-cyan-200 font-bold'>Quick history</h1>
                        <p>
                            My interest in Computer science started in high school when a friend brought up the idea of creating a video game.
                            After hours of research into this idea, I found myself creating my first calculator program in JAVA. 
                            Fast forward to the present and I am now wrapping up my Bachelors degree in Computer Science at Carleton University.
                        </p>
                    </div>
                    <div className='mx-auto min-w-[275px] md:w-4/12'>
                        <img className='rounded-2xl border-[1px] shadow-md shadow-[#040c16]' src="portrait.jpg" alt="portrait" />
                    </div>
                </div>
                
        </div>

        
    </div>
  )
}

export default About

