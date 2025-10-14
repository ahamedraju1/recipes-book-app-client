import React from 'react';
import chef from '../assets/chef_img.jpg'
import book_img from '../assets/recipe-book.png'

const RecipeBook = () => {

    return (
        <div className='mt-32 lg:mt-44 md:mt-38 px-4'>
            <div className=''>
                <div className='flex flex-col lg:flex-row gap-10 items-center'>
                    <img
                        className='lg:w-1/2 md:h-[600px] md:w-[600px] sm:w-fit h-full rounded-lg'
                        src={chef} alt="chef" />
                    <div className=' flex flex-col gap-2 w-full'>
                        <p className='text-lg text-gray-700'><span className='text-xl font-semibold'>Understand the Basics</span><br />
                            Before creating or experimenting, you need a strong foundation:
                            Learn basic cooking techniques: sautéing, roasting, braising, steaming, grilling, baking.
                            Master ingredient handling: chopping, marinating, seasoning.
                            Know your flavors: sweet, sour, salty, bitter, umami. Learn how to balance them</p>
                        <p className='text-lg text-gray-700 my-3'><span className='text-xl font-semibold'>Study the Recipe First</span><br />
                            When you find a new recipe:
                            Read it all the way through before cooking.
                            Identify the key ingredients and techniques.
                            Check cooking time, temperature, and tools needed</p>
                        <span className='mt-4 text-xl text-gray-800 font-bold'>“Discover the art of cooking  by mastering flavors and techniques.
                            ”</span>
                    </div>
                    <img
                        className='hidden md:block w-48 h-48'
                        src={book_img} alt="recipe-book" />

                </div>

            </div>
        </div>

    );
};

export default RecipeBook;