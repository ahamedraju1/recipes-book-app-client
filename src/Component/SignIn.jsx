import React, { use } from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';
import { AuthContext } from '../Context/AuthContext';

const SignIn = () => {
    const { userSignIn } = use(AuthContext);

    const handleSignIn = e =>{
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        console.log(email)
        const password = formData.get('password');
        console.log(password);

        //user sign in
        userSignIn(email, password)
        .then(result=> {
            console.log(result.user)
            form.reset()
        })
        .catch(error=> {
            console.log(error)
        })

    }

    return (

        <div>
            <Navbar/>
            <div className="card bg-base-100 mx-auto mt-14 max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold"> Please Login </h1>
                    <form onSubmit={handleSignIn} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p>New to this Website? Please <Link to="/singUp" className='text-blue-500 underline font-bold'>Register</Link></p> 
                    </form>
                </div>
            </div>
        </div>

    );
};

export default SignIn;