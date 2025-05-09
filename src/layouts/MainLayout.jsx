import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>

            <div className='min-h-[calc(100vh-116px)]'>
                <div className='mx-auto'>
                    <Outlet></Outlet>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default MainLayout;