import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#5ce1e6]'>About</p>
                    </div>
                    <div></div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p> Versatile Engineer </p>
                        </div>
                        <div>
                            <p>
                            I am a skilled backend developer with experience in modern API frameworks such as Fastify and FastAPI. My expertise extends to architectural patterns, databases, and CI/CD workflows. Beyond my technical skills, I am a personable individual who collaborates effectively with others to produce efficient and maintainable code.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About