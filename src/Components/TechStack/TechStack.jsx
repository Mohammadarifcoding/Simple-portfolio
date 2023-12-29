import React from "react";

const TechStack = () => {
  return (

    <div id="skills" className="max-w-[1200px] animate-scroll lg:mt-1 pb-36 mt-12 px-10 mx-auto text-white">
      <h2 className="lg:text-[48px] text-end font-bold mb-8">My Skills</h2>
      <p className="text-lg text-gray-300 max-w-[500px] text-right ml-auto">
        Adept in leveraging a diverse skill set to craft seamless and engaging
        digital experiences, ensuring user-centric designs and intuitive
        interfaces.
      </p>

      <div className="mt-10">
        <h3 className="text-[32px] font-bold mb-6">Frontend Technologies</h3>
        <div className="flex flex-wrap justify-center items-center gap-3">
          <img src="/Skills/HTML.svg" className="max-w-[70px] bouce-tech" alt="" />
          <img src="/Skills/CSS.svg" className="max-w-[70px] bouce-tech" alt="" />
          <img src="/Skills/Bootstrap.svg" className="max-w-[70px] bouce-tech" alt="" />
          <img src="/Skills/Tailwind.svg" className="max-w-[70px] bouce-tech" alt="" />
          <img
            src="/Skills/Router.png"
            className="max-w-[80px] rounded-full  bouce-tech"
            alt=""
          />
          <img src="/Skills/JS.svg" className="max-w-[70px] bouce-tech" alt="" />
          <img src="/Skills/React.svg" className="max-w-[70px] bouce-tech" alt="" />
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-[32px] text-end font-bold mb-6">
          Backend Technologies
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-3">
          <img src="/Skills/MongoDb.png" className="max-w-[70px] bouce-tech" alt="" />
          <img src="/Skills/NodeJs.png" className="max-w-[80px]  bouce-tech" alt="" />
          <img src="/Skills/Express.png" className="max-w-[70px] bouce-tech" alt="" />
          <img src="/Skills/Firebase.png" className="max-w-[90px] bouce-tech" alt="" />
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-[32px] text-start font-bold mb-6">
          Development Tools
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-3">
          <img src="/Skills/Git.svg" className="max-w-[70px] bouce-tech" alt="" />

          <img src="/Skills/Vs_Code.svg" className="max-w-[70px] bouce-tech" alt="" />
          <img
            src="/Skills/vercel.png"
            className="max-w-[70px] rounded-full bouce-tech"
            alt=""
          />
          <img
            src="/Skills/Github.png"
            className="max-w-[70px] rounded-full  bouce-tech bg-white"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
