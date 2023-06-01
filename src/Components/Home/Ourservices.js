import React from 'react'
import { Card } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons'
import { ComputerDesktopIcon, DevicePhoneMobileIcon, GlobeAltIcon, QuestionMarkCircleIcon, CubeIcon, PuzzlePieceIcon, CursorArrowRaysIcon, LightBulbIcon, PaintBrushIcon, WifiIcon, LockClosedIcon, CursorArrowRippleIcon } from '@heroicons/react/24/outline'
import BlenderIcon from '../../assets/blender.svg'
import UXUXIcon from '../../assets/ui_ux.svg'
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;


const Ourservices = () => {
  const iconName="ComputerDesktopIcon"
  let navigate=useNavigate();

  const uiData = { "services": [
    {
       "icon": ComputerDesktopIcon,
       "title": "UI/UX Design",
       "description": "Crafting intuitive interfaces that engage and inspire.",
       "link": "#"
    },
    {
       "icon": DevicePhoneMobileIcon,
       "title": "Mobile app Development",
       "description": "We develop customized mobile applications for iOS and Android platforms that meet your specific needs and goals.",
       "link": "#"
    },
    {
      "icon": GlobeAltIcon,
      "title": "Web Development",
      "description": "We build modern and responsive websites with clean code and user-friendly interfaces to drive your online presence.",
      "link": "#"
    },
    {
       "icon": QuestionMarkCircleIcon,
       "title": "Project consultancy",
       "description": "Our experienced consultants provide expert guidance and support in managing and optimizing your projects for success.",
       "link": "#"
    }, 
    {
      "icon": CubeIcon,
      "title": "Blender 3D",
      "description": "We bring your ideas to life with high-quality 3D modeling, animation, and rendering using Blender.",
      "link": "#"
    },

    {
      "icon": PaintBrushIcon,
      "title": "Graphics Design",
      "description": "Our expert designers create visually stunning and impactful designs for branding, marketing, and more.",
      "link": "#"
    },
    {
      "icon": PuzzlePieceIcon,
      "title": "Game Development",
      "description": "We specialize in creating captivating and immersive gaming experiences tailored to your specific requirements.",
      "link": "#"
    },
    {
       "icon": CursorArrowRaysIcon,
       "title": "IT Maintenance & Installation",
       "description": "We offer comprehensive IT maintenance services to ensure optimal performance and reliability of your systems.",
       "link": "#"
    },
    {
       "icon": LightBulbIcon,
       "title": "Training & Education",
       "description": "We provide training and education to equip your team with the latest industry knowledge.",
       "link": "#"
    },
    {
      "icon": WifiIcon,
      "title": "Network installation",
      "description": "We provide professional network installation services to ensure seamless connectivity.",
      "link": "#"
   },
   {
    "icon": LockClosedIcon,
    "title": "Cyber Security",
    "description": "We provide robust cybersecurity solutions to safeguard your digital assets.",
    "link": "#"
 },
 {
  "icon": CursorArrowRippleIcon,
  "title": "Software Testing",
  "description": "Thorough testing to ensure software quality and reliability.",
  "link": "#"
},
   ],
}


const handleNavbarClick = (sectionID) => {
   if (window.location.pathname !== '/') {
     navigate('/');
     setTimeout(() => {
       const navbarHeight = document.querySelector('nav').offsetHeight;
       const element = document.getElementById(sectionID);
       const offset = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
       window.scrollTo({ top: offset, behavior: 'smooth' });
     }, 500);
   } else {
     const navbarHeight = document.querySelector('nav').offsetHeight;
     const element = document.getElementById(sectionID);
     const offset = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
     window.scrollTo({ top: offset, behavior: 'smooth' });
   }
 }
 

  return (
<div className='bg-black flex flex-col pr-10'>
<div className='relative group ml-10 mt-10'>
  <h1 className='text-3xl font-bold text-white hover:text-white mb-4 hover:cursor-default'>Our services</h1>
  <div className='rounded-full bg-white w-10 h-[0.4rem] mt-2 absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow shadow-white group-hover:w-[11rem]'></div>
</div>



<div className="flex items-center">
     
     <div className="mx-auto max-w-2xl py-16  sm:py-10 lg:max-w-7xl">
 
       <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
       {uiData.services.map((service)=>(
           <div key={service.title} className="group flex flex-col items-center max-w-sm p-6 ml-10 bg-white border 
            border-gray-200 rounded-lg shadow text-center mb-10  hover:text-white hover:bg-black hover:cursor-pointer">
           {service.icon && (
                   <service.icon className="text-black group-hover:text-white" width={100} height={100} />
                 )}
              
                   <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white">{service.title}</h5>
             
               <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 group-hover:text-white">{service.description}</p>
               <button onClick={()=>handleNavbarClick('portfolio')} href="#" className="inline-flex items-center text-blue-600 hover:underline">
                   See our works
                   <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
               </button>
           </div>
         ))}
       </div>
     </div>
   </div></div>
  )
}

export default Ourservices
