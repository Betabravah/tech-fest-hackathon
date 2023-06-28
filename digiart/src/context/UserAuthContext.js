import { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { auth } from '../firebase';

const userAuthContext = createContext();


export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState('');

    function signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password);
    }
    function login(email, password) {
        signInWithEmailAndPassword(auth, email, password);
    }

    function googleSignin() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);
     return (
        <userAuthContext.Provider value={{user, signup, login, logout, googleSignin}}>{children}</userAuthContext.Provider>
     );
}


export function useUserAuth() {
    return useContext(userAuthContext);
}