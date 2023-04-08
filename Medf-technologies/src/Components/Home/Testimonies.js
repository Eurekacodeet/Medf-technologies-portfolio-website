import React, { useState } from 'react'
import BgTestimonies from '../../assets/worldmap.png'
import TestimonyMap from '../../assets/in-bg.png'
import Avatar from '@mui/material/Avatar';
import './Testimonies.css'
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
    <div className='Test_all_con'>
        <div className='Testsubcon'>
            
            <div>  
       <p id="p_test">Testimonies</p> 
       <h1 id="test_h1">We serve our clients</h1>
        <h3 id="h3_test"></h3>
        <div>
        <div className='Testimony_map'>
{/* <img src={TestimonyMap}/> */}
<button>
  
  <Avatar alt="Remy Sharp" src="../../assets/in-bg.png" /></button>
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