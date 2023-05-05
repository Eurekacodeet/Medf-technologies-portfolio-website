import React from 'react'


import About from "./Components/Home/About";
import Companystats from './Components/Home/Conpanystats/Companystats';
import Ourservices from './Components/Home/Ourservices'
import Dh from './3D'
import Tools from './Components/Home/Tools';
import Whychus from './Components/Home/Whychus';
import Footer from './Components/Home/Footer';
import Testimonies from './Components/Home/Testimonies';
import BlogList from './Components/Home/Blogs/BlogList';
import Portfolio from './Components/Home/Portfolio/Portfolio';

const Mainapp = () => {
  return (

    <div className=''>
      <Dh />
      <Companystats />
      <div id="ourservices"><Ourservices /></div>
      <Tools />
      <div className='' id="about"><About/></div>
      <div className='' id="portfolio"><Portfolio/></div>
      <Testimonies />
      <BlogList />
      <Whychus />
      <Footer />
      {/* <Industries/> */}
    </div>


  )
}

export default Mainapp