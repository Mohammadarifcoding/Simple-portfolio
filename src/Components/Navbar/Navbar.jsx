
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { CgMenuGridO, CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Link as ScrollLink } from 'react-scroll';

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
  <ScrollLink
    to="AboutMe"
    smooth={true}
    duration={1000}
    className="text-[#ffffff] hover:text-[#a7a7a7] cursor-pointer"
    onClick={(e) => {
      e.preventDefault(); // Prevents default behavior of anchor tag
      setTimeout(() => {
        const contactSection = document.getElementById('AboutMe');
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 500); // Change the delay time (in milliseconds) as needed
    }}
  >
    About Me
  </ScrollLink>
</li>
      <li>
  <ScrollLink
    to="skills"
    smooth={true}
    duration={1000}
    className="text-[#ffffff] hover:text-[#a7a7a7] cursor-pointer"
    onClick={(e) => {
      e.preventDefault(); // Prevents default behavior of anchor tag
      setTimeout(() => {
        const contactSection = document.getElementById('skills');
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 500); // Change the delay time (in milliseconds) as needed
    }}
  >
    Skills
  </ScrollLink>
</li>
      <li>
  <ScrollLink
    to="contact"
    smooth={true}
    duration={1000}
    className="text-[#ffffff] hover:text-[#a7a7a7] cursor-pointer"
    onClick={(e) => {
      e.preventDefault(); // Prevents default behavior of anchor tag
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 500); // Change the delay time (in milliseconds) as needed
    }}
  >
    Contact
  </ScrollLink>
</li>


      <li>
  <ScrollLink
    to="projects"
    smooth={true}
    duration={1000}
    className="text-[#ffffff] hover:text-[#a7a7a7] cursor-pointer"
    onClick={(e) => {
      e.preventDefault(); // Prevents default behavior of anchor tag
      setTimeout(() => {
        const contactSection = document.getElementById('projects');
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 500); // Change the delay time (in milliseconds) as needed
    }}
  >
    Projects
  </ScrollLink>
</li>
    </>
  );

  const linktwo = (
    <>
       <li>
  <ScrollLink
    to="home"
    smooth={true}
    duration={1000}
    className="text-xl mb-2 text-left text-[#666] hover:text-gray-800 cursor-pointer"
    onClick={(e) => {
      e.preventDefault(); // Prevents default behavior of anchor tag
      setTimeout(() => {
        const contactSection = document.getElementById('home');
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 500); // Change the delay time (in milliseconds) as needed
    }}
  >
    Home
  </ScrollLink>
</li>
      <li>
  <ScrollLink
    to="AboutMe"
    smooth={true}
    duration={1000}
    className="text-xl mb-2 text-left text-[#666] hover:text-gray-800 cursor-pointer"
    onClick={(e) => {
      e.preventDefault(); // Prevents default behavior of anchor tag
      setTimeout(() => {
        const contactSection = document.getElementById('AboutMe');
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 500); // Change the delay time (in milliseconds) as needed
    }}
  >
    About Me
  </ScrollLink>
</li>
      <li>
  <ScrollLink
    to="skills"
    smooth={true}
    duration={1000}
    className="text-xl mb-2 text-left text-[#666] hover:text-gray-800 cursor-pointer"
    onClick={(e) => {
      e.preventDefault(); // Prevents default behavior of anchor tag
      setTimeout(() => {
        const contactSection = document.getElementById('skills');
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 500); // Change the delay time (in milliseconds) as needed
    }}
  >
    Skills
  </ScrollLink>
</li>
      <li>
  <ScrollLink
    to="contact"
    smooth={true}
    duration={1000}
    className="text-xl mb-2 text-left text-[#666] hover:text-gray-800 cursor-pointer"
    onClick={(e) => {
      e.preventDefault(); // Prevents default behavior of anchor tag
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 500); // Change the delay time (in milliseconds) as needed
    }}
  >
    Contact
  </ScrollLink>
</li>
<li>
  <ScrollLink
    to="projects"
    smooth={true}
    duration={1000}
    className="text-xl mb-2 text-left text-[#666] hover:text-gray-800 cursor-pointer"
    onClick={(e) => {
      e.preventDefault(); // Prevents default behavior of anchor tag
      setTimeout(() => {
        const contactSection = document.getElementById('projects');
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 500); // Change the delay time (in milliseconds) as needed
    }}
  >
    Projects
  </ScrollLink>
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
