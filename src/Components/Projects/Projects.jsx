import React from "react";
import { Box, Flex, Image, Button, Heading, Text } from "@chakra-ui/react";
import FirstProject from "./FirstProject";
import SecondProject from "./SecondProject";
import ThirdProject from "./ThirdProject";

const Projects = () => {
  return (
    <div className="max-w-[1200px] lg:mt-1 pb-36 mt-12 px-10 mx-auto text-white">
      <h2 className="lg:text-[50px] text-center  text-white banner-text sm:text-[35px] text-[35px] font-bold mb-8">
        My Projects
      </h2>
      <FirstProject></FirstProject>
 <SecondProject></SecondProject>
 <ThirdProject></ThirdProject>


      
      
    </div>
  );
};

export default Projects;
