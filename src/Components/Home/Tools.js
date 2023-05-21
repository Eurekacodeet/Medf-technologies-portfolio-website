import React from 'react'
import Reactimg from '../../assets/Reantimg-01.png' 
import Nodejs from '../../assets/Nodejsimg-01.png'
import MongoDB from '../../assets/Mongodbnew-01.png'
import AdobeIlus from '../../assets/adobeillusnew-01.png'
import Adobephoto from '../../assets/adobephotoshnew-01.png'
import Python from '../../assets/python.png'
import Figma from '../../assets/Figmanew-01.png'
import Tailwind from '../../assets/tailwindneer-01.png'
import Cplusplus from '../../assets/Cplusplus-01.png'
import Flutter from '../../assets/Flutternew-01.png'
import Unity from '../../assets/Unityimg-01.png'
import UnrealEngine from '../../assets/uneng-01.png'


import Marquee from "react-fast-marquee";
import Cshr from '../../assets/Cshr-01.png'
const Tools = () => {
  return (
    <div className="bg-white text-black p-10 flex flex-wrap overflow-hidden" >
      <div className="flex flex-col md:flex md:flex-row">
     
<div className=' w-1/7 ' >


<div className='relative group'>
  <h1 className='text-3xl py-4 font-bold hover:text-black mb-8 mr-4 hover:cursor-default'>Tools and Technology</h1>
  <div className='rounded-full bg-black w-10 h-[0.4rem] mt-2 
               absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow
                shadow-black group-hover:w-[19rem]'></div>
</div>

   

    </div>
<div className='pr-4 w-3/5'>
<Marquee speed={70} pauseOnHover={true} reverse={true} background="#f5f5f5" height="150px" className="marque_container"axis="X" width="1100px">
<img src={Reactimg} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
<img src={Cshr} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
<img src={Nodejs} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
<img src={MongoDB} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
<img src={AdobeIlus} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
<img src={Adobephoto} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
<img src={Figma} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
<img src={Tailwind} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
<img src={Cplusplus} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
<img src={Flutter} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
<img src={Unity} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
<img src={UnrealEngine} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
{/* <img src={Kibana} className="img-fluid-2"/> */}
{/* <img src={Parquet} className="img-fluid"/> */}
<img src={Python} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
{/* <img src={Qlik} className="img-fluid"/> */}
{/* <img src={R} className="img-fluid"/> */}
</Marquee>
</div>

      </div>
    </div>
  )
}

export default Tools
