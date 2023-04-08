import React from 'react'

import Efko from '../../assets/efko.png'

import {ClockCircleOutlined} from '@ant-design/icons'
import {TrophyOutlined,  UserOutlined, UsergroupAddOutlined, CodeSandboxOutlined} from '@ant-design/icons'

const Companystats = () => {
  return (
<div class="grid grid-cols-4 p-10 ">
  <div className=''> <p className="text-sm pb-4">Why choose us</p>
 <h1 className='text-[1.6rem] font-bold break-words mr-4'>EFKO unfolds solutions to everything </h1>

 <div className='rounded-full bg-black w-10 h-[0.6rem] mt-4 hover:w-40 transition-width duration-500 ease-in-out shadow shadow-black'></div>
</div>
  <div className="flex justify-center text-center border-l-2 border-t-2 rounded-tl-3xl border-gray-300 flex-col"><ClockCircleOutlined className='text-5xl p-4' /><p className="text-base font-medium antialiased">Punctuality</p></div>
  <div className="flex justify-center text-center  border-t-2 border-l-2 border-gray-300 flex-col"><TrophyOutlined className='text-5xl p-4'/><p className="text-base font-medium antialiased">Quality</p></div>
  <div className='flex justify-center items-center border-2 border-gray-300 row-span-2 bg-black rounded-br-3xl rounded-tr-xl'> <img  className="rounded-tr-xl rounded-br-3xl"src={Efko}/></div>
  <div className="flex justify-center items-center border-l-2 border-t-2 border-b-2 border-gray-300 flex-col rounded-tl-3xl rounded-bl-2xl"><UserOutlined className='text-5xl p-4' /> <h2 className='text-3xl font-bold p-4'>20</h2><p className="text-base font-medium antialiased">Clients</p></div>
  <div className="flex justify-center items-center border-y-2 border-l-2 border-gray-300 flex-col"><UsergroupAddOutlined className='text-5xl p-4' /><h2 className='text-3xl font-bold p-4'>20</h2><p className="text-base font-medium antialiased">Members</p></div>
  <div className="flex justify-center items-center border-t-2 border-l-2 border-b-2 border-gray-300 flex-col"><CodeSandboxOutlined className='text-5xl p-4' /><h2 className='text-3xl font-bold p-4'>20</h2><p className="text-base font-medium antialiased">Projects</p></div>
  
</div>
  )
}

export default Companystats