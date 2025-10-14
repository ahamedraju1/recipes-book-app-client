import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Navbar from './Navbar';
import { Link, useLocation, useNavigate } from 'react-router';


const SignUp = () => {
    const { createUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData);

        // create a user
         createUser(userData.email, userData.password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state || '/');
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            <Navbar/>
            <div className="card bg-base-100 mx-auto mt-14 max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold"> Please Register </h1>
                    <form onSubmit={handleSignUp} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Your Name" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input"  placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Sign Up</button>
                        <p>Already have an Account? Please <Link to="/signIn" className='text-blue-500 underline font-bold'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;