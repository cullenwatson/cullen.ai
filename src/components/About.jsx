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
                            <p> Versatile Full-Stack Software Architect</p>
                        </div>
                        <div>
                            <p>
                            I'm a skilled full stack developer with experience in modern front-end frameworks like React and Next.js, and back-end technologies such as Prisma and Fastify. I'm also proficient in using the T3 stack (tRPC, TailwindCSS, and TypeScript) to create efficient and maintainable code. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About