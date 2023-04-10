import React, { useState } from 'react'
import BgTestimonies from '../../assets/worldmap.png'
import TestimonyMap from '../../assets/in-bg.png'
import Avatar from '@mui/material/Avatar';
import './Testimonies.css'
import { UserOutlined } from '@ant-design/icons';
const Testimonies = () => {
  const dummyTestimonies =[
    {
    Profielimage:"image",
    Username:"Empetsa",
    Testimonies:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

  },
  {
    Profielimage:"image_1",
    Username:"Jemal tasaw",
    Testimonies:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

  },{
    Profielimage:"image_2",
    Username:"Zeberga",
    Testimonies:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

  }
]
const [testimonies,setTestimonies]=useState(dummyTestimonies)
  return (
    <div className=''>
        <div className=''>
            
            <div>  
       <p id="">Testimonies</p> 
       <h1 id="">We serve our clients</h1>
        <h3 id=""></h3>
        <div>
        <div className=''>
{/* <img src={TestimonyMap}/> */}
<button>
<UserOutlined />
</button>
</div>
       </div>

</div>  
<div className='test_sub_arranger'>
<div>
{testimonies.map(testimonies=>
<p>{testimonies.Username}</p>
)}

</div>
</div>
</div>
    </div>
  )
}

export default Testimonies