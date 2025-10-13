import React from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router';

const RecipeDetails = () => {
    const recipes = useLoaderData();
    console.log(recipes);


    return (
        <>
            <Navbar />
            <div>
                <div className='mt-16 w-11/12 mx-auto'>
                    <div className="card bg-base-100 shadow-sm">
                        <figure>
                            <img
                                src={recipes.photo}
                                alt="Shoes"
                                className='w-full object-cover p-5' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">{recipes.name}</h2>
                            <div className='space-y-0'>
                            <p><span className='text-lg font-bold'>Ingredients:</span> {recipes.Ingredients} </p>
                            <p><span className='text-lg font-bold'>Instruction:</span>{recipes.instruction} </p>
                            <p><span className='text-lg font-bold'>Cuisine:</span>{recipes.cuisine} </p>
                            <p><span className='text-lg font-bold'>Preparation-Time:</span> {recipes.preparation} </p>
                            <p><span className='text-lg font-bold'>Categories:</span> {recipes.categories} </p>
                            <p><span className='text-lg font-bold'>Like :</span> {recipes.like} </p>
                            </div>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipeDetails;