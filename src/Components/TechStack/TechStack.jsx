import React from "react";

const TechStack = () => {
  return (
    <div className="max-w-[1200px] lg:mt-1 pb-36 mt-12 px-10 mx-auto text-white">
      <h2 className="lg:text-[48px] text-end  text-white banner-text sm:text-[35px] text-[32px] font-bold mb-8">
        My Skills
      </h2>
      <p className="text-lg text-gray-300 text-end max-w-[500px] ml-auto">
        Adept in leveraging a diverse skill set to craft seamless and engaging
        digital experiences, ensuring user-centric designs and intuitive
        interfaces.
      </p>

      <div className="mt-5">
        <h2 className="lg:text-[32px] text-start  text-white banner-text sm:text-[28px] text-[24px] font-bold mb-8">
          Expert
        </h2>
        <div className="flex flex-wrap gap-3 mb-20 md:justify-start justify-center items-center mt-7">
          <img src="/Skills/HTML.svg" className="max-w-[70px]" alt="" />
          <img src="/Skills/CSS.svg" className="max-w-[70px]" alt="" />
          <img
            src="/Skills/Bootstrap.svg"
            className="max-w-[70px]"
            alt=""
          />
          <img
            src="/Skills/Tailwind.svg"
            className="max-w-[70px]"
            alt=""
          />
          <img
            src="/Skills/Router.png"
            className="max-w-[80px] rounded-full"
            alt=""
          />
          <img src="/Skills/JS.svg" className="max-w-[70px]" alt="" />
          <img src="/Skills/React.svg" className="max-w-[70px]" alt="" />
        </div>
      </div>
      <div className="mt-5">
        <h2 className="lg:text-[32px] text-end  text-white banner-text sm:text-[28px] text-[24px] font-bold mb-8">
          Familiar
        </h2>
        <div className="flex flex-wrap gap-3 md:justify-end justify-center items-center mt-7">
          <img
            src="/Skills/MongoDb.png"
            className="max-w-[70px]"
            alt=""
          />
          <img
            src="/Skills/NodeJs.png"
            className="max-w-[80px] "
            alt=""
          />
          <img
            src="/Skills/Express.png"
            className="max-w-[70px]"
            alt=""
          />
          <img
            src="/Skills/Firebase.png"
            className="max-w-[90px]"
            alt=""
          />
        </div>
      </div>
      <div className="mt-5">
        <h2 className="lg:text-[32px] text-start  text-white banner-text sm:text-[28px] text-[24px] font-bold mb-8">
          Tools
        </h2>
        <div className="flex flex-wrap gap-3 md:justify-start justify-center items-center mt-7">
          <img src="/Skills/Git.svg" className="max-w-[70px]" alt="" />

          <img
            src="/Skills/Vs_Code.svg"
            className="max-w-[70px]"
            alt=""
          />
          <img
            src="/Skills/vercel.png"
            className="max-w-[70px] rounded-full"
            alt=""
          />
          <img
            src="/Skills/Github.png"
            className="max-w-[70px] rounded-full  bg-white"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
