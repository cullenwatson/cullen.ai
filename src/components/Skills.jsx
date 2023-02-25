import React from 'react'
import Python from '../assets/python.png';
import Typescript from '../assets/ts.png';
import Docker from '../assets/docker.png';
import Next from '../assets/next-js.svg';
import Github from '../assets/github.png';
import Neovim from '../assets/neovim.svg';
const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#5ce1e6] '>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Typescript} alt="PYTHON icon"></img>
                    <p className='my-4'>TYPESCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Next} alt="JAVA icon"></img>
                    <p className='my-4'>NEXT.JS</p>
                </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt="PYTHON icon"></img>
                    <p className='my-4'>PYTHON</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Neovim} alt="JAVA icon"></img>
                    <p className='my-4'>NEOVIM</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="Github icon"></img>
                    <p className='my-4'>GIT</p>
                </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Docker} alt="PYTHON icon"></img>
                    <p className='my-4'>DOCKER</p>
                </div>
               
                
            </div>
            
        </div>
    </div>
  )
}

export default Skills