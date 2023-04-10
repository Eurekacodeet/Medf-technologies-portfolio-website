import React from 'react'


import About from "./Components/Home/About";
import Companystats from './Components/Home/Companystats';
import Ourservices from './Components/Home/Ourservices'
import Dh from './3D'
import Tools from './Components/Home/Tools';
import Blogs from './Components/Home/Blogs';
import Whychus from './Components/Home/Whychus';
import Footer from './Components/Home/Footer';

const Mainapp = () => {
  return (
   
 <div>
       
    <Dh/>
<Companystats/>
<Ourservices/>
        <Tools/>
        <About/>
        <Blogs/>
        <Whychus/>
        <Footer/>
        {/* <Testimonies/> */}
        {/* <Industries/> */}
    </div>
        
 
  )
}

export default Mainapp