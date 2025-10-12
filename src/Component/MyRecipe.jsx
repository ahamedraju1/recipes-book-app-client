import React, { use, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { AuthContext } from '../Context/AuthContext';


const MyRecipe = () => {
    const { user } = use(AuthContext);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
         if (!user?.email) return;
        fetch(`http://localhost:5000/my-recipes?email=${user.email}`)
            .then(res => res.json())
            .then(data => setRecipes(data));

    }, [user]);


    return (
        <>
            <Navbar />
            <div className='mt-16 w-11/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                        recipes.map((recipe) =>
                            <div key={recipe._id} className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <img
                                        src={recipe.photo}
                                        alt="Recipes"
                                        className='w-full object-cover p-2'
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{recipe.name} </h2>
                                    <p>{recipe.Ingredients} </p>
                                    <p>{recipe.instruction} </p>
                                    <p>{recipe.cuisine} </p>
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