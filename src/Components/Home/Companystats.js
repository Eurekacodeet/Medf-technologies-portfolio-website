import React from 'react'

import Efko from '../../assets/efko.png'

import { ClockCircleOutlined } from '@ant-design/icons'
import { TrophyOutlined, UserOutlined, UsergroupAddOutlined, CodeSandboxOutlined } from '@ant-design/icons'

const Companystats = () => {
  return (
    <div className="grid grid-cols-4 p-10 ">
      <div className=''>
        <p className="text-sm">Why choose us</p>
        <div className='relative group'>
          <h1 className='text-3xl py-4 font-bold hover:text-black mb-8 hover:cursor-default'>EFKO Unfolds Solutions</h1>
          <div className='rounded-full bg-black w-10 h-[0.15rem] mt-2 
               absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow
                shadow-black group-hover:w-[90%]'></div>
        </div>
      </div>
      <div className="flex justify-center text-center border-l-2 border-t-2 rounded-tl-3xl border-gray-300 flex-col"><ClockCircleOutlined className='text-5xl p-4' /><p className="text-base font-medium antialiased">Punctuality</p></div>
      <div className="flex justify-center text-center  border-t-2 border-l-2 border-gray-300 flex-col"><TrophyOutlined className='text-5xl p-4' /><p className="text-base font-medium antialiased">Quality</p></div>
      <div className='flex justify-center items-center border-2 border-gray-300 row-span-2 bg-black rounded-br-3xl rounded-tr-xl'> <img className="rounded-tr-xl rounded-br-3xl" src={Efko} /></div>
      <div className="flex justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-300 flex-col rounded-tl-3xl rounded-bl-2xl"><UserOutlined className='text-5xl p-4' /> <h2 className='text-3xl font-bold p-4'>20</h2><p className="text-base font-medium antialiased">Clients</p></div>
      <div className="flex justify-center items-center border-y-2 border-l-2 border-gray-300 flex-col"><UsergroupAddOutlined className='text-5xl p-4' /><h2 className='text-3xl font-bold p-4'>20</h2><p className="text-base font-medium antialiased">Members</p></div>
      <div className="flex justify-center items-center border-t-2 border-l-2 border-b-2 border-gray-300 flex-col"><CodeSandboxOutlined className='text-5xl p-4' /><h2 className='text-3xl font-bold p-4'>20</h2><p className="text-base font-medium antialiased">Projects</p></div>

    </div>
  )
}

export default Companystats