import React from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router';

const MyRecipe = () => {
    const userRecipe = useLoaderData();
    console.log(userRecipe);

    return (
        <>
            <Navbar />
            <div className='mt-16 w-11/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                        userRecipe.map((recipe) =>
                            <div key={recipe._id} className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Recipes"
                                        className='w-full object-cover p-2'
                                         />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{recipe.name} </h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div className="flex card-actions">
                                        <button className="btn btn-primary">update</button>
                                        <button className='btn btn-primary'>
                                            delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default MyRecipe;