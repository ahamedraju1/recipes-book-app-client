import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Navbar from './Navbar';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";


const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const { createUser, googleSignIn, updateUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const photoURL = formData.get('photoURL')
        console.log(photoURL);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData);

        setSuccess(false);
        setErrorMessage('');

        const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (passwordRegExp.test(userData) === true) {
            setErrorMessage("Password must have One lowerCase, On UpperCase and One digit and 6 characters or long.")
            return;
        }



        // create a user
        createUser(userData.email, userData.password)
            .then(result => {
                console.log(result.user);

                return updateUser(name, photoURL);
            })
            .then(() => {
                console.log("Profile update successfully");
                setSuccess(true);
                navigate(location?.state || '/');
            })
            .catch(error => {
                console.log(error.message)
                setErrorMessage(error.message);
            })
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result)
                navigate(location?.state || '/');
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            <Navbar />
            <div className="card bg-base-100 mx-auto mt-14 max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold"> Please Register </h1>

                    <form onSubmit={handleSignUp} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Your Name" required />
                        <label className="label">Photo</label>
                        <input type="text" name='photoURL' className="input" placeholder="Photo URL" required />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="input"
                            placeholder="Password"
                            minLength="6"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                            required
                        />
                        {
                            errorMessage && <p className='validator-hint hidden'>Must be more than 8 characters,<br /> including number,<br /> lowercase letter,<br /> uppercase letter</p>
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Sign Up</button>
                        <p>Already have an Account? Please <Link to="/signIn" className='text-blue-500 underline font-bold'>Login</Link></p>

                        <button onClick={handleGoogleSignIn} className='btn bg-white text-black border-[#e5e5e5]'>
                            <FcGoogle />Login with Google
                        </button>
                    </form>
                    {
                        errorMessage && <p className='text-red-500 mt-1'>{errorMessage} </p>
                    }
                    {
                        success && <p className='text-green-500 mt-1'>User has created successfully</p>
                    }
                </div>
            </div>
        </div >
    );
};

export default SignUp;