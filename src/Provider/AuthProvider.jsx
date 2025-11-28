import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const registerWithEmailPassword = (email, pass) => {

        // console.log("from register data: ", email, pass)
        return createUserWithEmailAndPassword(auth, email, pass)
    }


    const authData = {
        registerWithEmailPassword
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;