import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import New3D from './New3D1';
import { ChevronUpIcon, ChevronDownIcon, CubeIcon, VideoCameraIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const Dh = () => {
  const [showButton, setShowButton] = useState(true);
  const [conditionalMode, setConditionalMode] = useState(true);

  useEffect(() => {
    const storedConditionalMode = localStorage.getItem('conditionalMode');
    if (storedConditionalMode !== null) {
      setConditionalMode(JSON.parse(storedConditionalMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('conditionalMode', JSON.stringify(conditionalMode));
  }, [conditionalMode]);
  const handleScroll = () => {
    const componentHeight = document.querySelector('.dh-component').getBoundingClientRect().height;
    window.scrollBy({
      top: componentHeight,
      behavior: 'smooth',
    });
    setShowButton(false);
  };

  const handleReturn = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setShowButton(true);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY === 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <div className="flex flex-col bg-black text-white p-10 h-[85vh] md:flex md:flex-row overflow-hidden dh-component">
      {showButton ? (
        <button onClick={handleScroll} className="fixed bottom-10 z-50 right-10 bg-white text-black py-2 px-4 border-[1px] border-black rounded-full">
         <div className='flex flex-row justify-between items-center'>Scroll Past <ChevronDownIcon className="ml-1 rounded full text-black" width={20} height={20}/></div> 
        </button>
      ) : (
        <button 
        onClick={handleReturn} 
        className="fixed bottom-10 z-50 right-10 bg-white text-black py-4 px-4 border-[1px] border-black shadow-white fill-none rounded-full sm:border-[1px] sm:border-black md:border-[1px] md:border-black"
      >
        <ChevronUpIcon className="rounded full text-black" width={20} height={20}/>
      </button>
      
      )}
      <div className="w-full mr-10 md:w-2/5">
        <p className="text-sm">Obtain High Quality Webapps</p>
        <div className="relative group">
          <h1 className="text-3xl py-4 font-bold hover:text-white mb-8 hover:cursor-default">Full Stack Web Development</h1>
          <div className="rounded-full bg-white w-10 h-[0.32rem] mt-1 absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow shadow-white group-hover:w-[87%]" />
        </div>
        <p className="text-sm">We help you to grow your business by developing awesome and interactive web and mobile apps </p>
      </div>
      <div className="md:w-3/5 h-[100%] w-full md:h-full pt-2">
      <button className='flex justify-start items-start' onClick={toggleConditionalMode}>
        {conditionalMode?<div className='mt-4 flex flex-row items-center justify-center'>
          <CubeIcon className='bg-white text-black rounded mr-4' width={32}/><InformationCircleIcon width={20}/>
          <p className='text-xs'>Experiencing performance issues click the cube</p></div>
        :<div><VideoCameraIcon className='mt-4 bg-white text-black rounded' width={32}/></div>}
      </button>
     {conditionalMode? <div className='md:w-full h-[90%] w-full md:h-[90%] pt-2'>
        <Canvas className="">
          <OrbitControls />
          <directionalLight intensity={0.5} />
          <ambientLight intensity={0.2} />
          <New3D />
        </Canvas>
      </div>:<div className="md:w-full h-[80%] w-full md:h-[80%] pt-2">
      <video 
      className='md:w-full object-contain object-center w-[100%] h-[100%] md:h-full' 
      src="https://res.cloudinary.com/dvqawl4nw/video/upload/v1683454642/gdgmk6iz1ugkxhvairzy.3gp" 
      autoPlay 
      loop 
      alt="there should be a video here"
       />
        </div>}</div>
    </div>
  );
};

export default Dh;
