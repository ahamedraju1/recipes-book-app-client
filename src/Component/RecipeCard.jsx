import React from 'react';
import { Link } from 'react-router';

const RecipeCard = ({ recipe }) => {
    const { name, cuisine, like, photo } = recipe;

    return (

        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={photo}
                        alt="recipes"
                        className="rounded-xl w-full" />
                </figure>
                <div className="card-body items-center text-center w-full">
                    <h2 className="card-title">{name}</h2>
                    <p>{cuisine}</p>
                    <p>{like} </p>
                    <div className="card-actions">
                        <Link to={`/recipeDetails/${recipe._id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;