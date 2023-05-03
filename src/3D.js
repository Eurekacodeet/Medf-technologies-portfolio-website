import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import V3 from './V5.js';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Dh = () => {
  const [showButton, setShowButton] = useState(true);

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
      <div className="md:w-3/5 h-[80%] w-full md:h-full pt-6">
        {/* <Canvas className="">
          <OrbitControls />
          <directionalLight intensity={0.5} />
          <ambientLight intensity={0.2} />
          <V3 />
        </Canvas> */}
      </div>
    </div>
  );
};

export default Dh;
