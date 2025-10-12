import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email, password)
    }


    const userInfo = {
        user,
        createUser 
    }



    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("current user", currentUser);
            setUser(currentUser);
        })
        return unSubscribe();
    },[])


    return (
         <AuthContext value={userInfo}>
            {children}
         </AuthContext>
    );
};

export default AuthProvider;