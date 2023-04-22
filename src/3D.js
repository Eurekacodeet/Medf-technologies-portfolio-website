import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import V3 from './V5.js';

const Dh = () => {
  return (
    <div className='flex flex-col bg-black  text-white p-10 h-[85vh] md:flex md:flex-row overflow-hidden'>
      <div className='w-full mr-10 md:w-2/5'>
        <p className='text-sm'>Obtain High Quality Webapps</p>
        <div className='relative group'>
          <h1 className='text-3xl py-4 font-bold hover:text-white mb-8 hover:cursor-default'>Full Stack Web Development</h1>
          <div className='rounded-full bg-white w-10 h-[0.15rem] mt-1
               absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow
                shadow-white group-hover:w-[87%]'></div>
        </div>
        <p className='text-sm'>We help you to grow your business by developing awesome and interactive web and mobile apps </p>
      </div>
      <div className='md:w-3/5 h-[80%] w-full md:h-full pt-6'>
        <Canvas className=''>
          <OrbitControls />
          <directionalLight intensity={0.5} />
          <ambientLight intensity={0.2} />
          <V3 />
        </Canvas>
      </div>
    </div>
  );
};

export default Dh;