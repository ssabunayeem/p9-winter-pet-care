import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <p className='text-2xl text-center p-15'>Loading...</p>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;