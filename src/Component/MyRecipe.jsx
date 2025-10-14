import React, { use, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';


const MyRecipe = () => {
    const { user } = use(AuthContext);
    const [recipes, setRecipes] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selected, setSelected] = useState(null);


    useEffect(() => {
        if (!user?.email) return;
        fetch(`http://localhost:5000/my-recipes?email=${user.email}`)
            .then(res => res.json())
            .then(data => setRecipes(data));

    }, [user]);


    const handleUpdateSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updatedRecipe = Object.fromEntries(formData.entries());
        console.log(updatedRecipe);

        fetch(`http://localhost:5000/recipes/${selected._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedRecipe)
        })
            .then(res => res.json())
            .then(data => {
                setIsModalOpen(false);
                setSelected(null);
                setRecipes(prev => prev.map(r => r._id === selected._id ? { ...r, ...data.update } : r))
            })


    }

    const handleDeleteRecipe = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/recipes/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            setRecipes((prev) => prev.filter((r) => r._id !== id));
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your recipe has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }



    return (
        <>
            <Navbar />
            <div className='mt-16 w-11/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                        recipes.map((recipe) =>
                            <div key={recipe._id} className="card bg-base-100 shadow-sm">
                                <figure className='h-56 overflow-hidden'>
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
                                    <p>{recipe.preparation} </p>
                                    <p>{recipe.like} </p>
                                    <div className="flex card-actions">
                                        <button onClick={() => {
                                            setSelected(recipe);
                                            setIsModalOpen(true);
                                        }} className="btn bg-gray-300">update</button>

                                        <button onClick={
                                            () => handleDeleteRecipe(recipe._id)} className='btn bg-red-400'>
                                            delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            {/* modal */}
            {

                isModalOpen && selected && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-xl w-11/12 max-w-sm shadow-2xl max-h-[90vh] overflow-y-auto">
                            <h2 className="text-xl font-bold mb-4 text-center">Update Recipe</h2>

                            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                <div className="card-body">
                                    <form onSubmit={handleUpdateSubmit} className="fieldset">
                                        <div>
                                            <label className="block text-sm font-medium">Name</label>
                                            <input
                                                type='text'
                                                name="name"
                                                defaultValue={selected.name}
                                                className="input input-bordered w-full"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="label">Ingredients</label>
                                            <input
                                                type='text'
                                                name="Ingredients"
                                                // value={form.name}
                                                // onChange={handleChange}
                                                defaultValue={selected.Ingredients}
                                                className="input input-bordered w-full"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="label">Instruction</label>
                                            <input
                                                type='text'
                                                name="instruction"
                                                defaultValue={selected.instruction}
                                                className="input input-bordered w-full"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="label">Cuisine Type</label>
                                            <input
                                                type='text'
                                                name="cuisine"
                                                defaultValue={selected.cuisine}
                                                className="input input-bordered w-full"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="label">Preparation Time</label>
                                            <input
                                                type='text'
                                                name="preparation"
                                                defaultValue={selected.preparation}
                                                className="input input-bordered w-full"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="label">Category</label>
                                            <input
                                                type='text'
                                                name="categories"
                                                defaultValue={selected.categories}
                                                className="input input-bordered w-full"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="label">Like Count</label>
                                            <input
                                                type='number'
                                                name="like"
                                                defaultValue={selected.like}
                                                className="input input-bordered w-full"
                                                required
                                            />
                                        </div>


                                        <div className="flex justify-between mt-4">
                                            <button type="submit" className="btn btn-success">Save</button>
                                            <button type="button" className="btn btn-error" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                )
            }


        </>
    );
};

export default MyRecipe;