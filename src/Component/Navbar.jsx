import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
    const { user, userSignOut } = use(AuthContext);


    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                console.log("user try to sign out")
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <div className=''>
                <div className="flex bg-base-100 shadow-sm">
                    <div className="navbar-start">
                        <h2 className="text-xl mx-7">RECIPE BOOK</h2>
                    </div>
                    <div className="navbar-center lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-4">
                            <NavLink to="/"> Home </NavLink>
                            <NavLink to="/allRecipe">All Recipe</NavLink>
                            <NavLink to="/addRecipe">Add Recipe</NavLink>
                            <NavLink to="/my-recipe">My Recipe</NavLink>
                        </ul>
                    </div>
                    <div className="navbar-end mx-7">
                       {
                        user ? <div className='flex flex-col'>
                            <button onClick={handleSignOut} className='btn btn-primary'>
                                Log out
                            </button>
                            <span>{user.email} </span>
                        </div> : <Link to='/signIn' className='btn btn-primary'>Login</Link>
                       }
                    </div>

                </div>
            </div >
        </>
    );
};

export default Navbar;