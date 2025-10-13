import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Navbar from './Navbar';

const AllRecipes = () => {
    const recipes = useLoaderData();
    console.log(recipes);
   

    return (
        <>
            <Navbar/>
            <div className='w-11/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                {
                    recipes.map((recipe) => (
                        <div className='mt-32' key={recipe._id}>
                            <div className="card bg-base-100 shadow-sm space-x-4">
                                <figure> 
                                    <img
                                        src={ recipe.photo}
                                        alt="recipes"
                                        className='w-full
                                        object-cover h-48
                                        overflow-hidden'/>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title"> { recipe.name}</h2>
                                    <p>{ recipe.cuisine} </p>
                                    <p>{ recipe.like} </p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/recipeDetails/${recipe._id}`} className="btn btn-primary">See Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
         </div>
        </>
    );
};

export default AllRecipes;