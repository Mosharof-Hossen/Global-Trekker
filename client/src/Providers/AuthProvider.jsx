import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // User Create by Email and password
    const createUserByEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Login by Email and password

    const loginByEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Logout
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return () => unSubscriber()
    }, [])

    const authInfo = {
        user,
        createUserByEmailAndPassword,
        logOut,
        loginByEmailAndPassword
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;