import React, { useState } from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router';
import { useAuth } from '../Context/AuthContext';

const RecipeDetails = () => {
    const recipe = useLoaderData();
    // console.log(recipe);
    const { user } = useAuth();
    const [likeCount, setLikeCount] = useState(recipe.like);

    const handleLike = () => {
        if (recipe.userEmail === user.email) {
            alert(" You can not like your own recipe");
            return;
        }
        setLikeCount(prev => prev + 1);
        // const newCount = likeCount + 1;
        // setLikeCount(newCount);
        // console.log("Recipe object before like:", recipe);// added after error

        fetch(`http://localhost:5000/recipes/${recipe._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ setLikeCount: likeCount })
        })
            .then(res => res.json())
            .then(data => {
                // console.log("Like updated:", data);
                setLikeCount(data.updateLikes);
            })
    }

    return (
        <>
            <Navbar />
            <div>
                <div className='mt-16 w-11/12 mx-auto'>
                    <div className="card bg-base-100 shadow-sm">
                        <div className='mt-2 px-4'>
                            <h2 className='text-lg font-semibold text-amber-700'>
                                {likeCount} people interested in this recipe
                            </h2>
                        </div>
                        <figure>
                            <img
                                src={recipe.photo}
                                alt="Shoes"
                                className='w-full object-cover p-5' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">{recipe.name}</h2>
                            <div className='space-y-0'>
                                <p><span className='text-lg font-bold'>Ingredients:</span> {recipe.Ingredients} </p>
                                <p><span className='text-lg font-bold'>Instruction:</span>{recipe.instruction} </p>
                                <p><span className='text-lg font-bold'>Cuisine:</span>{recipe.cuisine} </p>
                                <p><span className='text-lg font-bold'>Preparation-Time:</span> {recipe?.preparation} </p>
                                <p><span className='text-lg font-bold'>Categories:</span> {recipe.categories} </p>
                                <p><span className='text-lg font-bold'>Like Count:</span> {recipe.like} </p>


                                <button onClick={handleLike} className='btn btn-active hover:bg-amber-300 mt-4'>
                                    Like
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipeDetails;