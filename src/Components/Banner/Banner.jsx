import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {

  const job = ['Frontend Developer', 'MERN Developer'];

  const jobColors = {
    'Frontend Developer': '#4c8df5',
    'MERN Developer': '#6ab04c',
  };
 
  return (
    <div className="flex flex-col lg:flex-row max-w-[1200px] mx-auto py-20 text-white">
      <div className="lg:w-[60%] lg:order-1 order-2">
        <div className="px-10 lg:text-[48px] sm:text-[35px] text-[28px] font-bold mb-8">
          <h2>
            Hi 👋, <br /> My name is <br />
            <span className="super-text font-bold">
              <Typewriter words={['Mohammad Arif']} loop={1} cursor   />
            </span>
            <p className="  ">
              I am a{' '}
              <span className="font-bold tech-dev">
                <Typewriter words={job} loop={2} cursor cursorColor={jobColors[job]} />
              </span>
            </p>
          </h2>
        </div>
        <p className="text-[#a7a7a7] lg:text-lg px-10">
          Crafting seamless digital experiences through code, a frontend developer merges creativity with technical finesse to bring designs to life. Leveraging languages like HTML, CSS, and JavaScript, they sculpt user-friendly interfaces that captivate and engage.
        </p>
      </div>

      <div className="lg:w-[40%] lg:order-2 order-1 w-[300px] flex justify-center mx-auto items-center">
        <img className="rounded-full lg:w-3/6" src="/githubeditme.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
