import React from 'react'
import duck from '../assets/duck.png'
import flight from '../assets/flight.jpg'
import tweet from '../assets/tweet.png'
import movie from '../assets/movie.jpg'
import community from '../assets/community.webp'
import kb from '../assets/kb.jpeg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4  text-gray-300 border-[#5ce1e6]'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

            {/* Container */}
            <div 
             className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div style={{backgroundImage: `url(${kb})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold  text-white tracking-wider'>
                            JobSpy
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://jobspy.ai" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Site</button>
                            </a>
                          
                        </div>
                    </div>
                </div> 
                {/* Grid item */}
                <div style={{backgroundImage: `url(${movie})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold  text-white tracking-wider'>
				Movie Reviews
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://flickaid.com" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Site</button>
                            </a>
                            <a href="https://github.com/drew-harris/db-gui-team-1" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid item */}
                <div style={{backgroundImage: `url(${community})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold  text-white tracking-wider'>
				Community Detection
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://medium.com/smucs/girvan-newman-and-louvain-algorithms-for-community-detection-f3feb7c31908" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Article</button>
                            </a>
                            <a href="https://github.com/cullenwatson/community-detection" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid item */}
                <div style={{backgroundImage: `url(${duck})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold  text-white tracking-wider'>
                            Search Engine
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a href="https://youtu.be/H_8EPUopvew" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/cullenwatson/search_engine" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid item */}
                <div style={{backgroundImage: `url(${flight})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold  text-white tracking-wider'>
                            Flight Planner
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://youtu.be/Cjz2g_a-Iig" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/cullenwatson/flight_planner" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid item */}
                <div style={{backgroundImage: `url(${tweet})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold  text-white tracking-wider'>
                            Tweet Sentiment
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://youtu.be/1FiGnzL5qQs" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/cullenwatson/tweet_sentiment_analyzer" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid item */}
           
            </div>

        </div>
    </div>
  )
}

export default Work;
