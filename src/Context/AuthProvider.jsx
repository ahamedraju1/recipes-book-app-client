import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
 

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const userSignIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userSignOut = ()=>{
        return signOut(auth)
    }


    const userInfo = {
        user,
        createUser,
        userSignIn,
        userSignOut
    }



    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("current user", currentUser);
            setUser(currentUser);
        })
        return () => unSubscribe();
    },[])


    return (
         <AuthContext value={userInfo}>
            {children}
         </AuthContext>
    );
};

export default AuthProvider;