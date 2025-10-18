import React from 'react';
import { Link, useLoaderData } from 'react-router';
import RecipeCard from './RecipeCard';

const Home = () => {
    const recipes = useLoaderData()
    console.log(recipes);

    return (

        <div className='mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    Array.isArray(recipes) ? (
                    recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe}>
                    </RecipeCard>))
                    : (
                        <p>No recipes found or loading ...</p>

                    )
                }
            </div>
            <Link to='allRecipe' className='my-10 btn btn-primary w-1/2 block mx-auto p-2'>See All Recipes</Link>
        </div>
    );
};

export default Home;