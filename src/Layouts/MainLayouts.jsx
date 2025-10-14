import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import AddRecipe from '../Component/AddRecipe';
import Slider from '../Component/Slider';
import RecipeBook from '../Component/RecipeBook';
import Blogs from '../Component/Blogs';

const MainLayouts = () => {
    return (
        <div>
            <div>
                <Navbar />
                <Slider />
            </div>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
                <RecipeBook />
                <Blogs />
            </div>
        </div>
    );
};

export default MainLayouts;