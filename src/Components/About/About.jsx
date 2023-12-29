import React, { useEffect } from "react";
import  Aboutanimate  from './Aboutanimate.json';

import Lottie from "lottie-react";


const About = () => {
    
  
  return (
    <div id="whoIam" className="max-w-[1200px] animate-scroll lg:mt-1 pt-10 pb-24 mt-12 px-10 mx-auto text-white">
      <h2 className="lg:text-[48px] text-start  text-white banner-text sm:text-[35px] text-[32px] font-bold mb-8">
        A Little Bit About Me
      </h2>
      <div className="flex lg:flex-row flex-col">

    
      <div className="flex gap-10 flex-col ">
        <div>
          <h3 className="mt-8 lg:text-[25px] animate__animated animate__shakeY font-semibold text-gray-400">
            Who I am{" "}
          </h3>
          <p className="mt-3 text-[18px] max-w-[500px] font-medium text-gray-300 animate__animated animate__flipInX">
            I'm Arif, a junior frontend developer with a keen interest in
            technology and a passion for designing websites.
          </p>
        </div>
        <div>
          <h3 className="mt-6 lg:text-[25px] font-semibold animate__animated animate__shakeY text-gray-400">
            What I do{" "}
          </h3>
          <p className="mt-3 text-[18px] max-w-[500px] font-medium text-gray-300 animate__animated animate__flipInX">
            As an aspiring frontend developer, I've devoted myself to learning
            technologies like HTML, CSS, JavaScript, React.js, MongoDB , Node.js , Express.js , jwt and more. I've
            also undertaken personal projects such as building responsive
            websites and experimenting with various frameworks and libraries.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 lg:-mt-20 animate__animated animate__rubberBand">
       <Lottie  animationData={Aboutanimate}></Lottie>
      </div>
      </div>
    </div>
  );
};

export default About;
