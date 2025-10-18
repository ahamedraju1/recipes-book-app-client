import React, { use } from 'react';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';
import Footer from '../Footer/Footer';

const AddRecipe = () => {
    const {user} = use(AuthContext);
    
    const handleAddRecipe = e => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);
        const newRecipe = Object.fromEntries(formData.entries());
        console.log(newRecipe);
      
       newRecipe.userEmail = user.email; 

        // send data to the db
        fetch('https://recipes-book-app-server.vercel.app/recipes', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('after adding a recipe to db', data);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Recipe has been added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                }
            })

    }

    
    return (
        <>
            <Navbar />
            <div className='p-24'>
                <div className='p-12 space-y-5 text-center'>
                    <h2 className='text-xl text-center'>Add Recipes</h2>
                    <p>Add your favorite recipes to our collection! Include the ingredients, step-by-step instructions, and a photo to share your culinary creations with others. Inspire fellow food lovers and make cooking fun!Submit your recipe and let others enjoy your culinary creations!Create and share recipes that bring flavor and joy to the kitchen!</p>
                </div>
                <form onSubmit={handleAddRecipe}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Title</label>
                            <input type="text" name='name' className="input w-full" placeholder=" Recipe Name" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Ingredients</label>
                            <input type="text" name='Ingredients' className="input w-full" placeholder="Ingredients" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Instructions</label>
                            <input type="text" name='instruction' className="input w-full" placeholder="Instruction" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Cuisine Type</label>

                            <select name="cuisine" className="select select-bordered w-full">
                                <option value="" disabled selected>Select a Cuisine</option>
                                <option value="Italian">Italian</option>
                                <option value="Mexican">Mexican</option>
                                <option value="Indian">Indian</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Bengali">Bengali</option>
                                <option value="Others">Others</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Preparation Time</label>
                            <input type="number" name='preparation' className="input w-full" placeholder="Preparation Time" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Categories</label>
                            <div className="flex flex-wrap gap-4">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" name="categories" value="Breakfast" className="checkbox checkbox-primary" />
                                    Breakfast
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" name="categories" value="Lunch" className="checkbox checkbox-primary" />
                                    Lunch
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" name="categories" value="Dinner" className="checkbox checkbox-primary" />
                                    Dinner
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" name="categories" value="Dessert" className="checkbox checkbox-primary" />
                                    Dessert
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" name="categories" value="Vegan" className="checkbox checkbox-primary" />
                                    Vegan
                                </label>
                            </div>

                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Like count</label>
                            <input 
                            type="number"
                            name='like' 
                            className="input w-full"
                            defaultValue={0}
                            min={0}
                            placeholder="Like count" />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset bg-base-200 border-base-300 my-5 rounded-box border p-4">
                        <label className="label">Photo</label>
                        <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
                    </fieldset>
                    
                    <input className='btn w-full' type="submit" value="Add Recipe" />

                </form>

            </div>
            <Footer/>

        </>
    );
};

export default AddRecipe;