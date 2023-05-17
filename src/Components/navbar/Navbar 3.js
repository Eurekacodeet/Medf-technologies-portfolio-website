import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import { Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons';


const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    let navigate=useNavigate();
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const [currentMenu, setCurrentMenu] = useState('home');




    const handleNavbarClick = (sectionID) => {
        if (window.location.pathname !== '/') {
          navigate('/');
          setTimeout(() => {
            const navbarHeight = document.querySelector('nav').offsetHeight;
            const element = document.getElementById(sectionID);
            const offset = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({ top: offset, behavior: 'smooth' });
          }, 500);
        } else {
          const navbarHeight = document.querySelector('nav').offsetHeight;
          const element = document.getElementById(sectionID);
          const offset = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }
      

    const handleDrawerClose = () => {
      setIsDrawerVisible(false);
    };
  
    const handleDrawerShow = () => {
      setIsDrawerVisible(true);
    };
  
    const handleMenuClick = (e) => {
      if (e.key !== currentMenu) {
        setCurrentMenu(e.key);
        handleDrawerClose();
      }
    };
    return (
        <nav id="nav" className="bg-black dark:bg-back sticky w-full z-20 top-0 left-0 border-b border-black dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <img src="" className="h-8 mr-3" alt="Logo" />
                </a>
                <div className="flex md:order-2">
                    <Link to="/contact" className="flex items-center text-white bg-gray-700 hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-800 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">
                        Contact Us
                    </Link>
                   
                    <div className="md:hidden m-2 h-full hover:cursor-pointer text-3xl">
   <Menu  mode="horizontal"
        className="bg-black text-white text-lg flex justify-center items-center m-auto sticky top-0 z-10"
        selectedKeys={[currentMenu]}><Menu.Item key="menu" onClick={handleDrawerShow} as="div"><MenuOutlined className='text-xl'/></Menu.Item>
</Menu>
</div>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium borderrounded-sm md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className='group/home hover:cursor-pointer'>
                            <div className='w-fit'>
                            <Link to="/">  <p className="block py-2 pl-3 pr-4 text-white bg-gray-100 md:bg-transparent md:p-0 hover:cursor-pointer" aria-current="page">Home </p></Link>
                                <div className='rounded-full bg-white w-0 h-[0.15rem] mt-1 relative transition-all duration-300 ease-in-out group-hover/home:w-full'></div>
                            </div>
                        </li>
                        <li className='group/about hover:cursor-pointer'>
                        <button onClick={()=>handleNavbarClick("about")}> <p className="block py-2 pl-3 pr-4 text-white bg-gray-100 rounded md:bg-transparent md:p-0 hover:cursor-pointer">About</p></button>
                            <div className='rounded-full bg-white w-0 h-[0.15rem] mt-1
                            transition-all relative duration-300 ease-in-out group-hover/about:w-full'></div>
                        </li>
                        <li className='group/services hover:cursor-pointer'>
                        <button onClick={()=>handleNavbarClick('ourservices')}><p className="block py-2 pl-3 pr-4 text-white bg-gray-100 rounded md:bg-transparent md:p-0 hover:cursor-pointer">Services</p></button> 
                            <div className='rounded-full bg-white w-0 h-[0.15rem] mt-1 relative
                            transition-all duration-300 ease-in-out group-hover/services:w-full'></div>
                        </li>
                        <li className='group/our_team hover:cursor-pointer'>
                           <Link to="/ourteam"> <p className="block py-2 pl-3 pr-4 text-white bg-gray-100 rounded md:bg-transparent md:p-0">Our Team</p></Link>
                            <div className='rounded-full bg-white w-0 h-[0.15rem] mt-1 relative
                            transition-all duration-300 ease-in-out group-hover/our_team:w-full'></div>
                        </li>
                      
                    </ul>
                    

                </div>
                <Drawer title="Menu" open={isDrawerVisible} onClose={handleDrawerClose} placement="right" as="div">
  <Menu mode="vertical" selectedKeys={[currentMenu]} onClick={handleMenuClick} as="div">
    <Menu.Item key="home" as="div" onClick={handleDrawerClose}>
    <Link to="/"><button onClick={()=>setIsDrawerVisible(false)}>Home</button> </Link>
    </Menu.Item>
    <Menu.Item key="services" as="div"  onClick={handleDrawerClose}>
    <Link to="/"><button 
    onClick={()=>{setIsDrawerVisible(false);handleNavbarClick('ourservices');}}>Services</button></Link>
  </Menu.Item>
    <Menu.Item key="our-team" as="div"  onClick={handleDrawerClose}>
       <Link to="/ourteam"><button onClick={()=>setIsDrawerVisible(false)}>Our Team</button>
 </Link>   </Menu.Item>
    <Menu.Item key="about" as="div"  onClick={handleDrawerClose}>
    <button onClick={()=>{setIsDrawerVisible(false);handleNavbarClick("about");}}>About</button>
   </Menu.Item>
    <Menu.Item key="contact-us" as="div"  onClick={handleDrawerClose}>
       <Link to="/contact"><button onClick={()=>setIsDrawerVisible(false)}>Contact Us</button></Link>
    </Menu.Item>
  </Menu>
</Drawer>
            </div>
        </nav>
    )
}