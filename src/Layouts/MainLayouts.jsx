import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import AddRecipe from '../Component/AddRecipe';
import Slider from '../Component/Slider';
import RecipeBook from '../Component/RecipeBook';
import Blogs from '../Component/Blogs';
import Footer from '../Footer/Footer';

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
             <Footer />
        </div>
    );
};

export default MainLayouts;