import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    return (
        <>
            <div className='w-11/12 mx-auto'>

                <div className="flex bg-base-100 shadow-sm">
                    <div className="navbar-start">
                        <h2 className="text-xl">RECIPE BOOK</h2>
                    </div>
                    <div className="navbar-center lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-4">
                            <NavLink to="/"> Home </NavLink>
                            <NavLink to="/allRecipe">All Recipe</NavLink>
                            <NavLink to="/addRecipe">Add Recipe</NavLink>
                            <NavLink to="/myRecipe">My Recipe</NavLink>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to='/singUp'>Log in</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;