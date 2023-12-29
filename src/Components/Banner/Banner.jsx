import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import 'animate.css';

const Banner = () => {
  const job = ["Frontend Developer />", "Web Developer />", "Fronted Engineer />"];

  const jobColors = {
    "Frontend Developer": "#4c8df5",
    "MERN Developer": "#6ab04c",
  };

  return (
    <div id="home" className="flex flex-col lg:flex-row max-w-[1200px] mx-auto py-20 text-white">
    <div className="lg:w-[65%] lg:order-1 order-2 px-10 flex flex-col">
      <div className="lg:text-[48px] text-white banner-text sm:text-[35px] text-[28px] font-bold mb-8">
        <h2>
         {'<'} Hi 👋, <br /> My name is <br />
          <span className="super-text font-bold my-element ">Mohammad Arif</span>
          <p className="  ">
            I'm{' '}
            <span className="font-bold tech-dev ">
                <Typewriter words={job} loop={20} cursor cursorColor={jobColors[job]} /> 
              </span>
          </p>
          
        </h2>
      </div>
      <div className="fronted ">
          <a
            href="/Demo_Resume.pdf" 
            download="Mohamma_Arif_Resume.pdf" 
            className="btn-resume bg-blue-600 mt-6 border-blue-600 border-2 hover:bg-[#232D3F] rounded-3xl  text-white font-bold lg:py-3 py-2 lg:px-6 px-4 md:text-base text-sm lg:text-lg focus:outline-none focus:shadow-outline inline-block"
            style={{ textDecoration: 'none' }}
          >
           {'<'} Download Resume {'/>'}
          </a>
        </div>
    </div>

    <div className="lg:w-[35%]  hidden rounded-fulll lg:order-2 order-1    lg:flex justify-center mx-auto items-center relative">
  <img className=" rounded-full shadow-xl max-w-[250px]  lg:w-3/6 banner-img " src="/githubeditme.png" alt=""  />
</div>

  </div>
  );
};

export default Banner;
