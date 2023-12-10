
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { CgMenuGridO, CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  const link = (
    <>
      <li>
        <Link to="/" className="text-[#ffffff] hover:text-[#a7a7a7]">
          Home
        </Link>
      </li>
      <li>
        <Link to="/projects" className="text-[#ffffff] hover:text-[#a7a7a7]">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/technology" className="text-[#ffffff] hover:text-[#a7a7a7]">
          Technology
        </Link>
      </li>
      <li>
        <Link to="/contact" className="text-[#ffffff] hover:text-[#a7a7a7]">
          Contact
        </Link>
      </li>
    </>
  );

  const linktwo = (
    <>
      <li>
        <Link to="/" className="text-xl mb-2 text-left text-[#666] hover:text-gray-800">
          Home
        </Link>
      </li>
      <li>
        <Link to="/projects" className="text-xl mb-2 text-left text-[#666] hover:text-gray-800">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/technology" className="text-xl mb-2 text-left text-[#666] hover:text-gray-800">
          Technology
        </Link>
      </li>
      <li>
        <Link to="/contact" className="text-xl mb-2 text-left text-[#666] hover:text-gray-800">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <nav className="flex items-center justify-between py-4 px-6">
          <div className="flex items-center flex-shrink-0 gap-3">
            <label
             onClick={toggleDrawer}
              className="btn btn-square lg:hidden btn-ghost"
            >
              <CgMenuGridO className="text-[#00ADB5] text-2xl"></CgMenuGridO>
            </label>
            <img src="logo.svg" alt="Logo" className="h-8 w-auto" />
            <h2 className="text-[#ffffff]  text-2xl">Arif</h2>
          </div>
          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex space-x-5 font-medium">{link}</ul>
          </div>
        </nav>
      </div>
      <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
                <div className="flex justify-end">
                <label
             onClick={toggleDrawer}
              className="btn btn-square lg:hidden btn-ghost m-6"
            >
              <IoMdClose className=" text-2xl"></IoMdClose>
            </label>
                </div>
                <ul className="flex justify-center items-end px-10 flex-col font-medium">{linktwo}</ul>
            </Drawer>

    
     

    </>
  );
};

export default Navbar;
