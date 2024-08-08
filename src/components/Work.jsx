import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
import realEstate from '../assets/projects/realestate.jpg'
import carleton from '../assets/projects/carleton.jpg'
import water from '../assets/projects/ogl.png'
import health from '../assets/projects/health.jpg'
import portfolio from '../assets/projects/portfolio.png'



const Work = () => {
  return (
    <div name = 'work' className='bg-[#0a192f] w-full text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full py-24'>
            <div className='pb-8'>
               <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p> 
               <p className='py-6'>Check out some of my recent work</p>
            </div>

{/*Container*/}
            <div
             className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                {/*Grid Item*/}
                <div className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto border-[1px] border-gray-700 content-div'>
                    <h2 className='text-center py-2 text-base font-bold text-white tracking-wider bg-[#122d55] group-hover:hidden'>
                        Carleton Course Notifier
                    </h2>

                   <img src={carleton} alt="carleton" className='mx-auto h-40 group-hover:hidden' />
                   
                   <div className='tracking-wide text-center group-hover:hidden'>
                        <p>
                            NodeJs Express PostgreSQL Docker Puppeteer
                        </p>
                   </div>

                    {/*Hover Effects */}
                    <div className='invisible max-h-0 group-hover:visible'>
                        <p className='p-3'>
                            This project is a reminder service that notifies you when a seat opens up in any class of your choice at Carleton University.
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/vitcorr/carleton-course-notifier">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Grid Item*/}
                <div className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto border-[1px] border-gray-700 content-div'>
                    <h2 className='text-center py-2 text-base font-bold text-white tracking-wider bg-[#122d55] group-hover:hidden'>
                        Pool Animation
                    </h2>

                   <img src={water} alt="water" className='mx-auto h-40 group-hover:hidden' />
                   
                   <div className='tracking-wide  mt-2 text-center group-hover:hidden'>
                        <p>
                            C++, OpenGL
                        </p>
                   </div>

                    {/*Hover Effects */}
                    <div className='invisible max-h-0 group-hover:visible'>
                        <p className='p-3'>
                        This project aims to bring the captivating motion of water to life through the power of computer graphics
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/vitcorr/WaterAnimationOpenGL">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Grid Item*/}
                <div className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto border-[1px] border-gray-700 content-div'>
                    <h2 className='text-center py-2 text-base font-bold text-white tracking-wider bg-[#122d55] group-hover:hidden'>
                        HealthAndFitnessClub
                    </h2>

                   <img src={health} alt="health" className='mx-auto h-40 group-hover:hidden' />
                   
                   <div className='tracking-wide  mt-2 text-center group-hover:hidden'>
                        <p>
                            Node.js, PostgreSQL
                        </p>
                   </div>

                    {/*Hover Effects */}
                    <div className='invisible max-h-0 group-hover:visible'>
                        <p className='p-3'>
                            Designed an application system that serves as a comprehensive platform catering to the diverse needs of club members, trainers, and administrative staff..
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/vitcorr/Health-and-Fitness-Club-Management-System">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Grid Item*/}
                <div className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto border-[1px] border-gray-700 content-div'>
                    <h2 className='text-center py-2 text-base font-bold text-white tracking-wider bg-[#122d55] group-hover:hidden'>
                        Portfolio Website
                    </h2>

                   <img src={portfolio} alt="portfolio" className='mx-auto h-40 group-hover:hidden' />
                   
                   <div className='tracking-wide mt-2 text-center group-hover:hidden'>
                        <p>
                            React Tailwind
                        </p>
                   </div>

                    {/*Hover Effects */}
                    <div className='invisible max-h-0 group-hover:visible'>
                        <p className='p-3'>
                            Using the power of Reactjs and tailwind to showcase my profile
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/vitcorr/WaterAnimationOpenGL">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work