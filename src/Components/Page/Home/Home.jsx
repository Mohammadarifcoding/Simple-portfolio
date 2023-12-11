import React from 'react';
import Banner from '../../Banner/Banner';
import About from '../../About/About';
import TechStack from '../../TechStack/TechStack';
import Projects from '../../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <TechStack></TechStack>
            <Projects></Projects>
        </div>
    );
};

export default Home;