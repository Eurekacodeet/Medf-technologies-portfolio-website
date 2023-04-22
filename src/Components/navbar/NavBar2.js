import React, { useState } from 'react';
import { Menu, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
// import logo from './logo.png';

const Navbar = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [currentMenu, setCurrentMenu] = useState('home');

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
    <>
      <Menu
        mode="horizontal"
        className="bg-black text-white text-lg flex justify-between items-center sticky top-0 z-10"
        selectedKeys={[currentMenu]}
      >
        <div className="flex items-center">
          {/* <img src={logo} alt="Logo" className="h-8 w-8 mr-4" /> */}
          <div className="hidden md:block">
            <Menu.Item key="home" className="mr-4">
              Home
            </Menu.Item>
            <Menu.Item key="services" className="mr-4">
              Services
            </Menu.Item>
            <Menu.Item key="our-team" className="mr-4">
              Our Team
            </Menu.Item>
            <Menu.Item key="about" className="mr-4">
              About
            </Menu.Item>
          </div>
        </div>
        <div className="flex items-center">
          <div className={`text-right ${isDrawerVisible ? 'block md:hidden' : 'hidden md:block'}`}>
            <Menu.Item key="contact-us" onClick={handleMenuClick}>
              Contact Us
            </Menu.Item>
          </div>
          <div className="md:hidden mr-4">
            <Menu.Item key="menu" icon={<MenuOutlined />} onClick={handleDrawerShow} />
          </div>
        </div>
      </Menu>
      <Drawer title="Menu" visible={isDrawerVisible} onClose={handleDrawerClose} placement="right">
        <Menu mode="vertical" selectedKeys={[currentMenu]} onClick={handleMenuClick}>
          <Menu.Item key="home">
            Home
          </Menu.Item>
          <Menu.Item key="services">
            Services
          </Menu.Item>
          <Menu.Item key="our-team">
            Our Team
          </Menu.Item>
          <Menu.Item key="about">
            About
          </Menu.Item>
          <Menu.Item key="contact-us">
            Contact Us
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
};

export default Navbar;
