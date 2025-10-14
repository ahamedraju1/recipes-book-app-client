import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/recipe-logo.png'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


const Footer = ({ darkMode }) => {

    return (

        <footer className='w-full'>
            <div
                className={`py-10 mt-42 shadow-lg transition duration-300 ${darkMode
                    ? "bg-gray-900 text-gray-200"
                    : "bg-gray-100 text-gray-800"
                    }`}
            >
                <div className="w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <span className='flex'>

                        <img className='w-8 h-8' src={logo} alt="" />
                        <h2 className="text-2xl font-bold">  Recipe Book</h2>
                        </span>
                        <p className="mt-2 text-sm">
                            Your favorite recipes, all in one place.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <p className="flex items-center gap-2 mt-2"><MdOutlineEmail /> info@recipebook.com</p>
                        <p className='flex items-center gap-2'> <FaPhoneAlt /> +880 123 456 789</p>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold">Follow Us</h3>
                        <div className="flex justify-center md:justify-start gap-5 mt-3 text-2xl">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className={`transition duration-300 ${darkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
                                    }`}
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className={`transition duration-300 ${darkMode ? "text-gray-300 hover:text-sky-400" : "text-gray-600 hover:text-sky-500"
                                    }`}
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className={`transition duration-300 ${darkMode ? "text-gray-300 hover:text-pink-400" : "text-gray-600 hover:text-pink-500"
                                    }`}
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className={`transition duration-300 ${darkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
                                    }`}
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className={`border-t mt-8 pt-4 text-center text-sm transition duration-300 ${darkMode ? "border-gray-700 text-gray-400" : "border-gray-300 text-gray-600"
                        }`}
                >
                    © {new Date().getFullYear()} <span className="font-semibold">Recipe Book</span>. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};
export default Footer;