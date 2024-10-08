import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import PG from '../assets/postgresql.png'
import CPP from '../assets/cpp.png'
import python from '../assets/python.png'
import JAVA from '../assets/java.png'



const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-[#0a192f] text-gray-300'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full py-24'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-2'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-1'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-1'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-1'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="react icon" />
                    <p className='my-4'>REACTJS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-1'>
                    <img className='w-20 mx-auto' src={GitHub} alt="github icon" />
                    <p className='my-4'>GITHUB</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-1'>
                    <img className='w-20 mx-auto' src={Node} alt="node icon" />
                    <p className='my-4'>NODEJS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-1'>
                    <img className='w-20 mx-auto' src={PG} alt="postgres icon" />
                    <p className='my-4'>POSTGRESQL</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-1'>
                    <img className='w-20 mx-auto' src={CPP} alt="cpp icon" />
                    <p className='my-4'>C++</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-1'>
                    <img className='w-20 mx-auto' src={python} alt="python icon" />
                    <p className='my-4'>Python</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-1'>
                    <img className='w-20 mx-auto' src={JAVA} alt="java icon" />
                    <p className='my-4'>JAVA</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills