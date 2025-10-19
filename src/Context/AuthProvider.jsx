import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const updateUser = (name, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoURL
        }); 
    }

    const userSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }


    const userSignOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    const userInfo = {
        user,
        loading,
        createUser,
        updateUser,
        userSignIn,
        googleSignIn,
        userSignOut
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("current user", currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () => unSubscribe();
    }, [])


    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;