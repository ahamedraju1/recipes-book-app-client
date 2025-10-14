import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import logo from '../assets/recipe-logo.png';

const Navbar = () => {
    const { user, userSignOut } = use(AuthContext);
    const [menu, setMenu] = useState(false);

       useEffect(() => {
        if (menu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [menu])

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
                <div className="navbar bg-base-100 w-full md:flex items-center">
                    <div className="navbar-start flex sm:flex-row items-center gap-1">
                        <img className='w-8 h-8 md:w-9 md:h-9'
                            src={logo} alt="recipe-logo" />
                        <h2 className="text-md md:text-lg lg:text-xl pl-1 font-medium">RECIPE BOOK</h2>
                    </div>
                    <div className="navbar-center md:flex items-center gap-5 hidden md:text-lg lg:text-xl font-medium md:ml-7">
                        <ul className="menu menu-horizontal px-1 gap-4 text-xl">
                            <NavLink to="/"> Home </NavLink>
                            <NavLink to="/allRecipe">All Recipe</NavLink>
                            <NavLink to="/addRecipe">Add Recipe</NavLink>
                            <NavLink to="/my-recipe">My Recipe</NavLink>
                        </ul>
                    </div>

                    <div className='flex md:hidden items-center gap-3'>
                        <button className='text-2xl' onClick={() => setMenu(!menu)}>
                            &#9776;
                        </button>
                        {
                            menu && (
                                <div className='flex flex-col items-center absolute mt-32 h:underline gap-1 px-2'>
                                    <NavLink to="/"> Home </NavLink>
                                    <NavLink to="/allRecipe">All Recipe</NavLink>
                                    <NavLink to="/addRecipe">Add Recipe</NavLink>
                                    <NavLink to="/my-recipe">My Recipe</NavLink>
                                </div>
                            )
                        }
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