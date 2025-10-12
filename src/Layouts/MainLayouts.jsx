import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import AddRecipe from '../Component/AddRecipe';

const MainLayouts = () => {
    return (
        <div>
            <div>
                 <Navbar/>
            </div>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
                 
            </div>
        </div>
    );
};

export default MainLayouts;