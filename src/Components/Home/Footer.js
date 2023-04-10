import { EnvironmentOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, SlackOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import React from 'react'
import { Input } from 'antd';
const { TextArea } = Input;
const Footer = () => {
  return (
    <div className='flex flex-col  bg-black text-white p-16'>
    <div className='flex flex-wrap justify-between'>
 

    <div>
    <div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3 pr-3 "><PhoneOutlined className='text-3xl pt-3 bg-zinc-900 h-[11vh] w-[7vw] rounded'/></div>
  <div class="col-span-2 "> <p>+251912345678</p></div>
  <div class="row-span-2 col-span-2 ">  <p>Fahradit klasický smysluplný text vhodnou bezvýznamovo</p></div>
</div>
<div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3 "><EnvironmentOutlined className='text-3xl pt-3 bg-zinc-900 h-[11vh] w-[7vw] rounded'/></div>
  <div class="col-span-2 "> <p>Addis Ababa, Ethiopia</p></div>
  <div class="row-span-2 col-span-2 ">  <p>Fahradit klasický smysluplný text vhodnou bezvýznamovo</p></div>
</div>
<div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3 "><MailOutlined  className='text-3xl pt-3 bg-zinc-900 h-[11vh] w-[7vw] rounded'/></div>
  <div class="col-span-2 "> <p>example@gmail.com</p></div>
  <div class="row-span-2 col-span-2 ">  <p>Fahradit klasický smysluplný text vhodnou bezvýznamovo</p></div>
</div>
    
    </div>
    <div className='flex flex-col w-full items-start xl:w-1/2 xl:pl-10'>
     <h2 className='text-2xl font-semibold'>Contact us</h2>
     <div className='rounded-full bg-white w-10 h-[0.4rem] 
mt-2 mb-4 hover:w-[7.5rem] transition-width duration-500 ease-in-out shadow shadow-white'></div>
<Input className="bg-black text-white mb-4 placeholder-white hover:border-white" placeholder="Name" />
  <Input className="bg-black text-white mb-4 placeholder-white hover:border-white" placeholder="Email" />
  <TextArea className="bg-black text-white mb-4 placeholder-white hover:border-white" placeholder="Message" rows={4} />
  <button class="bg-zinc-600 text-white hover:bg-zinc-800 hover:text-white rounded-full border-2 border-white px-4 py-1">Contact us</button>

    </div>
    </div>
    <div className='flex justify-center pt-10'><FacebookOutlined className='text-3xl pr-4'/> 
    <TwitterOutlined className='text-3xl pr-4'/> <YoutubeOutlined className='text-3xl pr-4'/> <LinkedinOutlined className='text-3xl pr-4'/>
    <SlackOutlined className='text-3xl pr-4'/><InstagramOutlined className='text-3xl pr-4'/>
    </div>
    </div>
  )
}

export default Footer
