import React from 'react'

const About = () => {
  return (
    <div className=' bg-black p-10 text-white'>
        
        <div className='relative group'>
  <h1 className='text-3xl py-4 font-bold hover:text-white mb-8 hover:cursor-default'>About</h1>
  <div className='rounded-full bg-white w-10 h-[0.4rem] mt-2 
               absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow
                shadow-white group-hover:w-24'></div>
</div>

     

        <p id="p_about">At Tsinue, 
        we are a leading software company specializing in 
        providing a wide range of innovative services to 
        meet the unique needs of businesses across various industries.
         With a team of highly skilled professionals and a passion for
          cutting-edge technology, we are dedicated to delivering exceptional 
          solutions that drive success and empower our clients.</p>
        </div>
  )
}

export default About