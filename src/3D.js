import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import V3 from './V5.js';

const Dh = () => {
  return (
    <div className='flex flex-row bg-black text-white p-10 h-[80vh]'>
      <div className='w-2/5 mr-10 '>
        <p className='text-sm'>Obtain High Quality Webapps</p>
        <h1 className='text-3xl py-4 font-bold'>Full Stack Web Development</h1>
        <p className='text-sm'>We help you to grow you business by developing awesome and interactive web apps </p>
      </div>
      <div className='w-3/5 '>
        <Canvas className=''>
          <OrbitControls />
          <directionalLight intensity={0.5} />
          <ambientLight intensity={0.2}/>
          <V3 />
        </Canvas>
      </div>
    </div>
  );
};

export default Dh;