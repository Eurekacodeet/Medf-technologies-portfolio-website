import React, { useEffect, useState } from 'react'

import Efko from '../../../assets/efko.png'

import {ClockCircleOutlined} from '@ant-design/icons'
import {TrophyOutlined,  UserOutlined, UsergroupAddOutlined, CodeSandboxOutlined} from '@ant-design/icons'
import NumberCounter from './NumberCounter';
const Companystats = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 20) {
        setCount(count + 1);
      }
    }, 100); // increment by 1 every 100ms

    return () => clearInterval(interval);
  }, [count]);

  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
      // //console.log(window.innerWidth)
    }

    window.addEventListener("resize", handleResize);
  }, [size]);
  return (
    <div>
{size >950 &&(<div className="grid grid-cols-4 p-10 ">
  <div className=''>
  <p className="text-sm pb-4">Why choose us</p>
  <div className='relative group'>
  <h1 className='text-3xl py-4 font-bold hover:text-black mb-8 hover:cursor-default'>EFKO unfolds solutions to everything</h1>
  <div className='rounded-full bg-black w-10 h-[0.4rem] mt-2 
               absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow
                shadow-black group-hover:w-[10.4rem]'></div>
</div>
</div>
  <div className="flex justify-center text-center border-l-2 border-t-2 rounded-tl-3xl border-gray-300 flex-col"><ClockCircleOutlined className='text-5xl p-4' /><p className="text-base font-medium antialiased">Punctuality</p></div>
  <div className="flex justify-center text-center  border-t-2 border-l-2 border-gray-300 flex-col"><TrophyOutlined className='text-5xl p-4'/><p className="text-base font-medium antialiased">Quality</p></div>
  <div className='flex justify-center items-center border-2 border-gray-300 row-span-2 bg-black rounded-br-3xl rounded-tr-xl'> <img  className="rounded-tr-xl rounded-br-3xl"src={Efko}/></div>
  <div className="flex justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-300 flex-col rounded-tl-3xl rounded-bl-2xl"><UserOutlined className='text-5xl p-4' /> 
  <NumberCounter startValue={0} endValue={20} /><p className="text-base font-medium antialiased pb-6">Clients</p></div>
  <div className="flex justify-center items-center border-y-2 border-l-2 border-gray-300 flex-col"><UsergroupAddOutlined className='text-5xl p-4' />
  <NumberCounter startValue={0} endValue={120} /><p className="text-base font-medium antialiased pb-6">Members</p></div>
  <div className="flex justify-center items-center border-t-2 border-l-2 border-b-2 border-gray-300 flex-col"><CodeSandboxOutlined className='text-5xl p-4' />
  <NumberCounter startValue={0} endValue={50} /><p className="text-base font-medium antialiased pb-6">Projects</p></div>
</div>)}


{size <= 950 && (
  <div className='p-10  flex flex-col'>
  <div>
    <p className="text-sm pb-4">Why choose us</p>
    <div className='relative group inline-block'>
      <h1 className='text-3xl py-4 font-bold hover:text-black mb-2 
      hover:cursor-default'>EFKO unfolds solutions to everything</h1>
      <div className='rounded-full bg-black w-10 h-[0.4rem] mt-2 
        absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow
        shadow-black group-hover:w-full'></div>
    </div>
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 pt-10">
  <div className="bg-white p-4 flex flex-col justify-center items-center border-t-2 border-l-2 border-gray-300 rounded-tl-3xl">
    <ClockCircleOutlined className='text-5xl p-4' />
    <p className="text-base font-medium antialiased">Punctuality</p>
  </div>
  <div className="bg-white p-4 flex flex-col justify-center items-center border-t-2 border-r-2 border-l-2 border-gray-300">
    <TrophyOutlined className='text-5xl p-4'/>
    <p className="text-base font-medium antialiased">Quality</p>
  </div>
  <div className="bg-white p-4 flex flex-col justify-center items-center border-t-2 border-l-2 border-gray-300 h-full">
    <UserOutlined className='text-5xl p-4' /> 
    <NumberCounter startValue={0} endValue={20} />
    <p className="text-base font-medium antialiased pb-6">Clients</p>
  </div>
  <div className="bg-white p-4 flex flex-col justify-center items-center border-t-2 border-x-2 border-gray-300 h-full">
    <UsergroupAddOutlined className='text-5xl p-4' />
    <NumberCounter startValue={0} endValue={120} />
    <p className="text-base font-medium antialiased pb-6">Members</p>
  </div>
  <div className="bg-white p-4 col-span-2 flex flex-col justify-center items-center border-x-2 border-t-2 border-gray-300 h-full">
    <CodeSandboxOutlined className='text-5xl p-4' />
    <NumberCounter startValue={0} endValue={50} />
    <p className="text-base font-medium antialiased pb-6">Projects</p>
  </div>
  <div className="bg-black p-4 col-span-2 flex flex-col justify-center items-center border-2 rounded-b-3xl border-gray-300 h-full">
    <img className="object-contain max-h-full w-full rounded-tr-xl rounded-br-3xl" src={Efko} />
  </div>
</div>



 

</div>

      )}
</div>
  )
}
export default Companystats