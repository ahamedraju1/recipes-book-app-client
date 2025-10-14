import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Navbar from './Navbar';

const AllRecipes = () => {
    const recipes = useLoaderData();
    console.log(recipes);
    const [ filteredRecipes, setFilteredRecipes] = useState( recipes);
    const [selectedCuisine, setSelectedCuisine] = useState('');

    const handleFilterChange = (e) =>{
        const value = e.target.value;
        setSelectedCuisine(value);

        if(value === '' || value === 'All'){
            setFilteredRecipes(recipes);
        }
        else{
            const filtered = recipes.filter(recipe => recipe.cuisine === value);
            setFilteredRecipes(filtered);
        }
    }

   

    return (
        <>
            <Navbar/>
            <div className='w-11/12 mx-auto'>
            <div className='mb-4'>
                <select name="cuisine"  
                    value={selectedCuisine}
                    onChange={handleFilterChange}

                >
                    <option value="">All Cuisine</option>
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Indian">Indian</option>
                    <option value="Chinese">chinese</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                {
                    filteredRecipes.map((recipe) => (
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
                                    <h2 className="card-title text-xl"> { recipe.name}</h2>
                                    <p className='font-semibold'><span className='text-lg '>Cuisine:</span> { recipe.cuisine} </p>
                                    <p className='font-semibold'><span className='text-lg'>Like: </span> { recipe.like} </p>
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