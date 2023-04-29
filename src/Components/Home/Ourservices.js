import React from 'react'
import { Card } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons'
import { ComputerDesktopIcon, DevicePhoneMobileIcon, GlobeAltIcon, QuestionMarkCircleIcon, CubeIcon, PuzzlePieceIcon, CursorArrowRaysIcon, LightBulbIcon, PaintBrushIcon } from '@heroicons/react/24/outline'
import BlenderIcon from '../../assets/blender.svg'
import UXUXIcon from '../../assets/ui_ux.svg'
const { Meta } = Card;


const Ourservices = () => {
  const iconName="ComputerDesktopIcon"
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
       "description": "We develop custom software tailored to your unique business needs.",
       "link": "#"
    },
    {
       "icon": GlobeAltIcon,
       "title": "Web Development",
       "description": "We build conversational AI chatbots to enhance customer interactions.",
       "link": "#"
    },
    {
       "icon": QuestionMarkCircleIcon,
       "title": "Project consultancy",
       "description": "We provide expert database management services to ensure optimal performance.",
       "link": "#"
    }, 
     {
       "icon": CubeIcon,
       "title": "Blender 3D",
       "description": "We manage your infrastructure to ensure it's secure, reliable, and scalable.",
       "link": "#"
    },

    {
       "icon": PaintBrushIcon,
       "title": "Graphics design",
       "description": "We create responsive and dynamic websites that captivate audiences.",
       "link": "#"
    },
    {
       "icon": PuzzlePieceIcon,
       "title": "Game development",
       "description": "We help you transition to the cloud and streamline your business processes.",
       "link": "#"
    },
    {
       "icon": CursorArrowRaysIcon,
       "title": "IT Maintenance & Installation",
       "description": "We offer comprehensive IT consulting services to optimize your technology infrastructure.",
       "link": "#"
    },
    {
       "icon": LightBulbIcon,
       "title": "Training & Education",
       "description": "We provide training and education to equip your team with the latest industry knowledge.",
       "link": "#"
    },
   ],
}

  return (
<div className='bg-black flex flex-col pr-10'>
<div className='relative group ml-10 mt-10 flex flex-col'>
  <h1 className='text-3xl font-bold text-white hover:text-white mb-4 hover:cursor-default'>Our services</h1>
  <div className='rounded-full bg-white w-10 h-[0.4rem] mt-2 absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow shadow-white group-hover:w-[11rem]'></div>
</div>



<div className="flex items-center">
     
     <div className="mx-auto max-w-2xl py-16  sm:py-10 lg:max-w-7xl">
 
       <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
       {uiData.services.map((service)=>(
           <div key={service.title} class="group flex flex-col items-center max-w-sm p-6 ml-10 bg-white border 
            border-gray-200 rounded-lg shadow text-center mb-10  hover:text-white hover:bg-black">
           {service.icon && (
                   <service.icon className="text-black group-hover:text-white" width={100} height={100} />
                 )}
               <a href="#">
                   <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white">{service.title}</h5>
               </a>
               <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 group-hover:text-white">{service.description}</p>
               <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                   See our works
                   <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
               </a>
           </div>
         ))}
       </div>
     </div>
   </div></div>
  )
}

export default Ourservices
