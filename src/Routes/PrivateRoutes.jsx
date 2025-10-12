import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoutes = ({ children }) => {
    const {loading} = use(AuthContext);

    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }
   
    return children;
};

export default PrivateRoutes;