import React, { useState, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AnimationFixed from './Animationfixed';
import { ChevronUpIcon, ChevronDownIcon, CubeIcon, VideoCameraIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { Button, Divider, Segmented, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
const Dh = () => {
  const [showButton, setShowButton] = useState(true);
  const [conditionalMode, setConditionalMode] = useState(true);
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    setOnlineStatus(navigator.onLine);

    const handleOnlineStatusChange = () => {
      setOnlineStatus(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);
  useEffect(() => {
    const storedConditionalMode = localStorage.getItem('conditionalMode');
    if (storedConditionalMode !== null) {
      setConditionalMode(JSON.parse(storedConditionalMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('conditionalMode', JSON.stringify(conditionalMode));
  }, [conditionalMode]);

  const toggleConditionalMode = () => {
    setConditionalMode(!conditionalMode);
  };
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
  const options = ['Show', 'Hide', 'Center'];
  const [arrow, setArrow] = useState('Show');
  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }
    if (arrow === 'Show') {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
      // //console.log(window.innerWidth)
    }

    window.addEventListener("resize", handleResize);
  }, [size]);
  const text="For better performance, switch to the video view by clicking the cube. We're optimizing the 3D view soon. Enjoy the video experience despite any performance issues."
  return (
    <div className="flex flex-col bg-black text-white p-10 h-[100vh] md:flex md:flex-row overflow-hidden dh-component">
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
      <Carousel autoplay  className='pb-8 bordr-2 flex flex-row justify-evenly border-blue-500' >
    <div className={` ${size>=768&&'pt-[20vh]'}`}>
    <p className="text-sm text-white">Obtain High Quality Webapps</p>
        <div className="relative group text-white">
          <h1 className="text-3xl py-4 font-bold text-white mb-8 hover:cursor-default">Full Stack Web Development</h1>
          <div className="rounded-full bg-white w-10 h-[0.32rem] mt-1 absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow shadow-white group-hover:w-[87%]" />
        </div>
        <p className="text-sm text-white">We help you to grow your business by developing awesome and interactive web apps </p>
        <Link to="/contact" className="">
                       <button className='bg-white mt-4 text-black hover:font-bold hover:bg-white hover:text-black rounded-full px-4 py-2'><p className='text-sm '>Contact Us</p></button>
                    </Link>
    </div>


    <div>



    <div className={` ${size>=768?'pr-4 pt-[20vh]':'pr-4 '}`}>
  <p className="text-sm text-white">Build Innovative Mobile Applications</p>
  <div className="relative group text-white">
    <h1 className="text-3xl py-4 font-bold text-white mb-8 hover:cursor-default">Mobile App Development</h1>
    <div className="rounded-full bg-white w-10 h-[0.32rem] mt-1 absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow shadow-white group-hover:w-[87%]" />
  </div>
  <p className="text-sm text-white">We specialize in creating cutting-edge mobile applications that provide seamless user experiences and drive business growth.</p>
  <Link to="/contact" className="">
    <button className='bg-white mt-4 text-black hover:font-bold hover:bg-white hover:text-black rounded-full px-4 py-2'>
      <p className='text-sm'>Contact Us</p>
    </button>
  </Link>
</div>
    </div>


    
    <div className=''>
    <div className={` ${size>=768?'pr-4 pt-[20vh]':'pr-4 '}`}>
  <p className="text-sm text-white">Create Stunning Visual Designs</p>
  <div className="relative group text-white">
    <h1 className="text-3xl py-4 font-bold text-white mb-8 hover:cursor-default">Graphics Design Services</h1>
    <div className="rounded-full bg-white w-10 h-[0.32rem] mt-1 absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow shadow-white group-hover:w-[87%]" />
  </div>
  <p className="text-sm text-white">We offer professional graphics design services to bring your ideas to life with captivating visuals and engaging designs.</p>
  <Link to="/contact" className="">
    <button className='bg-white mt-4 text-black hover:font-bold hover:bg-white hover:text-black rounded-full px-4 py-2'>
      <p className='text-sm'>Contact Us</p>
    </button>
  </Link>
</div>
    </div>



    <div>
    <div className={` ${size>=768?'pr-4 pt-[20vh]':'pr-4 '}`}>
  <p className="text-sm text-white">Bring Your Imagination to Life</p>
  <div className="relative group text-white">
    <h1 className="text-3xl py-4 font-bold text-white mb-8 hover:cursor-default">3D Animation & Design</h1>
    <div className="rounded-full bg-white w-10 h-[0.32rem] mt-1 absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow shadow-white group-hover:w-[87%]" />
  </div>
  <p className="text-sm text-white">Our expert animators use Blender & other animation softwares to create immersive 3D animations that capture attention and tell compelling visual stories.</p>
  <Link to="/contact" className="">
    <button className='bg-white mt-4 text-black hover:font-bold hover:bg-white hover:text-black rounded-full px-4 py-2'>
      <p className='text-sm'>Contact Us</p>
    </button>
  </Link>
</div>

    </div>

    
  </Carousel>
      </div>
      <div className="md:w-3/5 h-[100%] w-full md:h-full pt-2">
      <button className='flex justify-start items-start' onClick={toggleConditionalMode}>
        {!conditionalMode?<div className='mt-4 flex flex-row items-center justify-center'>
          <CubeIcon className='bg-white text-black rounded mr-4' width={32}/>
          <Tooltip placement="topLeft" title={text} arrow={mergedArrow}>
            <InformationCircleIcon width={20}/> </Tooltip>
          <p className='text-xs'>Experiencing performance issues click the cube</p></div>
        :<div className='mt-4 flex flex-row items-center justify-center'>
           <VideoCameraIcon className='bg-white text-black rounded mr-4' width={32}/><Tooltip placement="topLeft" title={text} arrow={mergedArrow}><InformationCircleIcon width={20}/> </Tooltip>
        <p className='text-xs'>Click the video icon to see something cool</p></div>}
      </button>
     {!conditionalMode? <div className='md:w-full h-[87%] w-full md:h-[90%] pt-2'>
        <Canvas className="">
          <OrbitControls />
          <directionalLight intensity={0.5} />
          <ambientLight intensity={0.2} />
          <AnimationFixed />
        </Canvas>
      </div>:<div className="md:w-full h-[80%] w-full md:h-[80%] pt-2">
      <video 
      className='md:w-full object-contain object-center w-[100%] h-[100%] md:h-full' 
      src="/vidalt.mp4" 
      type="video/mp4"
      autoPlay 
      loop
      muted 
      alt="there should be a video here"
       />
</div>}
        </div>
    </div>
  );
};

export default Dh;
