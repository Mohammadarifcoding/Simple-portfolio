import React from 'react';
import Banner from '../Components/Banner/Banner';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import ParticlesValue from '../Components/Particles/Particles';


const Layout = () => {
    return (
        <>
    
        <div className='bg min-h-screen font '>
       
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        
        
        </>
        
    );
};

export default Layout;