import React from 'react';
import Human from './Human.json'
import Lottie from 'lottie-react';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Profile = () => {
    return (
      <div id='AboutMe' className='max-w-[1200px] animate-scroll mx-auto mt-10 px-10 pb-20'>
 <div className=" bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col lg:flex-row items-center md:justify-between">

{/* Left Side - Profile Data */}

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-3/5 mb-6 md:mb-0">



  
  <div className="mb-4 flex flex-col justify-start items-start">
    <h3 className="text-lg font-semibold text-white mb-2">Main Goal:</h3>
    <p className="text-gray-300">I am learning technology. So that I can make a significant impact on normal people's lives.</p>
  </div>
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-white mb-2">Years of Experience:</h3>
    <p className="text-gray-300">1 year self learning Experience</p>
  </div>
 

  <div className="mb-4">
    <h3 className="text-lg font-semibold text-white mb-2">Completed Projects:</h3>
    {/* <ul className="text-gray-300">
      <li>Project 1</li>
      <li>Project 2</li>
      <li>Project 3</li>

    </ul> */}
    <p className='text-gray-300'>3+ Full Stack Projects</p>
  </div>
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-white mb-2">Age:</h3>
    <p className="text-gray-300">17+</p>
  </div>
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-white mb-2">Educational Institute:</h3>
    <p className="text-gray-300">Khulna Polytechniq Institute (CSE)</p>
  </div>

  

  {/* Additional Details */}
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-white mb-2">Language:</h3>
   <ul className="text-gray-300">
      <li>Bangla : Native</li>
      <li>English : Fluent</li>
      <li>Hindi : Intermediate</li>

    </ul>
  </div>

 

  <div className="mb-4">
    <h3 className="text-lg font-semibold text-white mb-2">Social Media:</h3>
    <div className="flex space-x-4">
     <a href="https://web.facebook.com/profile.php?id=100052356673540">
      <button className='py-2 rounded-full hover:bg-[#111827] group border border-white   bg-white text-blue-500 text-2xl px-2 '><FaFacebook className='group-hover:text-white rounded-xl'></FaFacebook></button>
     </a>
     <a href="https://www.linkedin.com/in/mohammad-arif-504b27210/">
      <button className='py-2 rounded-full hover:bg-[#111827] group border border-white   bg-white text-blue-500 text-2xl px-2 '><FaLinkedin className='group-hover:text-white rounded-xl'></FaLinkedin></button>
     </a>
     <a href="https://github.com/Mohammadarifcoding"  >
      <button className='py-2  rounded-full hover:bg-[#111827] group border border-white   bg-white text-gray-700 text-2xl px-2 '><FaGithub className='group-hover:text-white rounded-xl'></FaGithub></button>
     </a>

      
    </div>
  </div>
</div>

{/* Right Side - GIF Image */}
<div className="md:w-2/5 lg:block hidden">
  <Lottie animationData={Human}></Lottie>
</div>

</div>


      </div>
       
      
    );
};

export default Profile;