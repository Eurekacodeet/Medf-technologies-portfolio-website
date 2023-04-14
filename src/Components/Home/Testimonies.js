import React, { useState } from 'react'
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
    Username:"Zeberga",
    Testimonies:"I have been thoroughly impressed by this company's expertise and professionalism. They always go above and beyond to ensure that their clients are satisfied and that their products are of the highest quality.",

  },
  {
    Profielimage:"https://res.cloudinary.com/dvqawl4nw/image/upload/v1681156342/tqdptjffmucilgtawkvq.jpg",
    Username:"Zeberga",
    Testimonies:"This company's software solutions have been a game-changer for our business. They have helped us streamline our operations, increase productivity, and achieve better results. Their personalized support and guidance have been invaluable.",

  }

]
const [testimonies,setTestimonies]=useState(dummyTestimonies[0])
console.log(testimonies, "testimonies")
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
{/* <img src={TestimonyMap}/> */}
{/* <button>
<UserOutlined />
</button> */}
<div  className='flex flex-col lg:flex  lg:flex-row'>
<div className="flex flex-row items-start pl-8 brder-2 brder-red-500 w-2/5 lg:visible bg-no-repeat bg-contain bg-[url('https://res.cloudinary.com/dvqawl4nw/image/upload/v1681151992/oexvoxnkffeev3wzjqho.png')]">
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


  <div className='brder-2 brder-green-400'>
  <div className=' brder-2 brder-blue-500 flex flex-col items-center justify-center'>
  <Card
  className='w-1/5 lg:w-3/5'
    title=""
    brdered={false}
    style={{
      width: 600,
    }}
  >
    <p>{testimonies.Testimonies}</p>
    {/* <p>Card content</p>
    <p>Card content</p> */}
  </Card>
 
  </div>
  <div className='flex items-start justify-start flex-row'>
  <img className="mt-4 rounded-full w-[5vw] h-[5vw]" src={testimonies.Profielimage}/><p className="mt-4 pl-4 ">{testimonies.Username}</p></div>
</div>

 
</div>
</div>
  

{/* <div className=''>
<div>
{testimonies.map(testimonies=>
<p>{testimonies.Username}</p>
)}

</div>
</div> */}
</div>
    </div>
  )
}

export default Testimonies