import React, { useState, useEffect } from 'react'
import BgTestimonies from '../../assets/worldmap.png'
import TestimonyMap from '../../assets/in-bg.png'
import { UserOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const Testimonies = () => {
  const dummyTestimonies =[
    {
    Profielimage:"https://res.cloudinary.com/dvqawl4nw/image/upload/v1681215360/ef2kgpaolfbh88muw7aw.jpg",
    Username:"Empetsa",
    Testimonies:"This software company is amazing! Their products are intuitive and packed with useful features. What sets them apart is their commitment to customer service. They are always quick to respond and go above and beyond to ensure my satisfaction.",
   
  },
  {
    Profielimage:"https://res.cloudinary.com/dvqawl4nw/image/upload/v1681215291/zeuidy2neaeug5zyxe9r.jpg",
    Username:"Jemal tasaw",
    Testimonies:"This company delivers high-quality and innovative software solutions. What I appreciate most is their commitment to continuously improving their products and services.",

  },{
    Profielimage:"https://res.cloudinary.com/dvqawl4nw/image/upload/v1681215279/oonoqezud5spqbhmzxrh.jpg",
    Username:"Zeberga",
    Testimonies:"This company is a true gem in the software industry. Their products are top-notch and their team is incredibly knowledgeable, responsive, and professional.",

  },
  {
    Profielimage:"https://res.cloudinary.com/dvqawl4nw/image/upload/v1681215257/rbxybcxzgcrnxyxsxduz.jpg",
    Username:"John Smith",
    Testimonies:"I have been thoroughly impressed by this company's expertise and professionalism. They always go above and beyond to ensure that their clients are satisfied and that their products are of the highest quality.",

  },
  {
    Profielimage:"https://res.cloudinary.com/dvqawl4nw/image/upload/v1681156342/tqdptjffmucilgtawkvq.jpg",
    Username:"John Doe",
    Testimonies:"This company's software solutions have been a game-changer for our business. They have helped us streamline our operations, increase productivity, and achieve better results. Their personalized support and guidance have been invaluable.",

  }

]
const [testimonies,setTestimonies]=useState(dummyTestimonies[0])
useEffect(() => {
  let currentIndex = 0;
  const interval = setInterval(() => {
    currentIndex = currentIndex === dummyTestimonies.length - 1 ? 0 : currentIndex + 1;
    setTestimonies(dummyTestimonies[currentIndex]);
  }, 5000);
  return () => clearInterval(interval);
}, []);
// console.log(testimonies, "testimonies")
  return (
    <div className='bg-[url("https://res.cloudinary.com/dvqawl4nw/image/upload/v1681151993/dswa4jvlordlohgz9hyf.png")] bg-cover bg-no-repeat text-white p-10'>
        <div className=''>
            
      
                 <p className="text-base">We serve our clients</p> 
                 <div className='relative group'>
  <h1 className='text-3xl py-4 font-bold hover:text-white mb-8 hover:cursor-default'>Testimonies</h1>
  <div className='rounded-full bg-white w-10 h-[0.4rem] mt-2 
               absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow
                shadow-white group-hover:w-[10.4rem]'></div>
</div>
        <div className=''>
<div  className='flex flex-col lg:flex  lg:flex-row'>
<div className="hidden lg:flex flex-row items-start pl-8 w-2/5 bg-no-repeat bg-contain bg-[url('https://res.cloudinary.com/dvqawl4nw/image/upload/v1681151992/oexvoxnkffeev3wzjqho.png')]">
  <div className="flex justify-center items-center p-14">
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 w-[5vw] h-[5vw] bg-zinc-500 lg:w-[5vw] lg:h-[5vw] m-auto flex justify-center items-center rounded-full">
        <button onClick={()=>setTestimonies(dummyTestimonies[0])} onMouseOver={() => setTestimonies(dummyTestimonies[0])}><img className="rounded-full border-2 border-zinc-600 hover:border-white" src={'https://res.cloudinary.com/dvqawl4nw/image/upload/v1681215360/ef2kgpaolfbh88muw7aw.jpg'}/></button>
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1 w-[5vw] h-[5vw] bg-zinc-500 lg:w-[5vw] lg:h-[5vw] flex justify-center items-center rounded-full">
        <button onClick={()=>setTestimonies(dummyTestimonies[1])} onMouseOver={() => setTestimonies(dummyTestimonies[1])}><img className="rounded-full border-2 border-zinc-600 hover:border-white" src='https://res.cloudinary.com/dvqawl4nw/image/upload/v1681215291/zeuidy2neaeug5zyxe9r.jpg'/></button>
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1 w-[5vw] h-[5vw] bg-zinc-500 lg:w-[5vw] lg:h-[5vw] flex justify-center items-center rounded-full">
        <button onClick={()=>setTestimonies(dummyTestimonies[2])} onMouseOver={() => setTestimonies(dummyTestimonies[2])}><img className="rounded-full border-2 border-zinc-600 hover:border-white" src='https://res.cloudinary.com/dvqawl4nw/image/upload/v1681215279/oonoqezud5spqbhmzxrh.jpg'/></button>
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1 w-[5vw] h-[5vw] bg-zinc-500 lg:w-[5vw] lg:h-[5vw] flex justify-center items-center rounded-full">
        <button onClick={()=>setTestimonies(dummyTestimonies[3])} onMouseOver={() => setTestimonies(dummyTestimonies[3])}><img className="rounded-full border-2 border-zinc-600 hover:border-white" src='https://res.cloudinary.com/dvqawl4nw/image/upload/v1681215257/rbxybcxzgcrnxyxsxduz.jpg'/></button>
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1 w-[5vw] h-[5vw] bg-zinc-500 lg:w-[5vw] lg:h-[5vw] flex justify-center items-center rounded-full">
  <button onClick={() => setTestimonies(dummyTestimonies[4])} onMouseOver={() => setTestimonies(dummyTestimonies[4])}>
    <img className="rounded-full border-2 border-zinc-600 hover:border-white" src='https://res.cloudinary.com/dvqawl4nw/image/upload/v1681156342/tqdptjffmucilgtawkvq.jpg' alt='Profile'/>
  </button>
</div>

    </div>
  </div>
</div>

<div className='w-full lg:w-3/5'>
  <div className=' h-[35vh]'>
  <div className="p-6 bg-white rounded-lg shadow text-center w-full overflow-y-scroll">
    <p className="mb-3 font-normal lg:text-base text-sm text-gray-500">{testimonies.Testimonies}</p>
  </div>
</div>
<div className='flex items-start justify-start flex-row h-[calc(100% - 35vh)]'>
  <img className="mt-4 rounded-full w-12 h-12 sm:w-20 sm:h-20" src={testimonies.Profielimage}/>
  <p className="mt-4 pl-4 ">{testimonies.Username}</p>
</div>

</div>




 
</div>
</div>
</div>
    </div>
  )
}

export default Testimonies