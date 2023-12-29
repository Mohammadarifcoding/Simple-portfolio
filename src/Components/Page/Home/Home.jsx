import React from 'react';
import Banner from '../../Banner/Banner';
import About from '../../About/About';
import TechStack from '../../TechStack/TechStack';
import Projects from '../../Projects/Projects';
import Profile from '../../Profile/Profile';
import Contact from '../../Contact/Contact';
import { CiUser } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
import { AiOutlineQuestion } from "react-icons/ai";

import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
  } from "@material-tailwind/react";
  import {
    PlusIcon,
    HomeIcon,
    CogIcon,
    Square3Stack3DIcon,
  } from "@heroicons/react/24/outline";
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
    return (
        <div className='relative'>
            <Banner></Banner>
            <About></About>
            <TechStack></TechStack>
            <Projects></Projects>
            <Profile></Profile>
            <Contact></Contact>




      <div className="fixed bottom-9 right-5">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
          <ScrollLink
    to="home"
    smooth={true}
    duration={1000}
 
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
    <SpeedDialAction>
      
      <HomeIcon className="h-5 w-5" />
    </SpeedDialAction>
  </ScrollLink>


           <ScrollLink
    to="whoIam"
    smooth={true}
    duration={1000}
   
    onClick={(e) => {
      e.preventDefault(); // Prevents default behavior of anchor tag
      setTimeout(() => {
        const contactSection = document.getElementById('whoIam');
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 500); // Change the delay time (in milliseconds) as needed
    }}
  >
    <SpeedDialAction>
              <AiOutlineQuestion className="h-5 w-5" />
            </SpeedDialAction>
  </ScrollLink> 



  <ScrollLink
    to="projects"
    smooth={true}
    duration={1000}
   
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
 <SpeedDialAction>
              <GrProjects className="h-5 w-5" />
            </SpeedDialAction>
  </ScrollLink> 
            
           

  <ScrollLink
    to="AboutMe"
    smooth={true}
    duration={1000}
   
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
    <SpeedDialAction>
              <CiUser className="h-5 w-5" />
            </SpeedDialAction>
    
  </ScrollLink> 



  <ScrollLink
    to="skills"
    smooth={true}
    duration={1000}
   
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
    <SpeedDialAction>
              <FaCode className="h-5 w-5" />
            </SpeedDialAction>
  </ScrollLink> 
            
  <ScrollLink
    to="contact"
    smooth={true}
    duration={1000}
   
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
<SpeedDialAction>
              <LuMessageSquare className="h-5 w-5" />
            </SpeedDialAction>
  </ScrollLink> 
            
          </SpeedDialContent>
        </SpeedDial>
      </div>

        </div>
    );
};

export default Home;