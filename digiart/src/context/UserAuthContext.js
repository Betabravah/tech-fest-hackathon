import { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../firebase';

const userAuthContext = createContext();


export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState('');

    function signup(email, password) {
        console.log(99999999999);
        createUserWithEmailAndPassword(auth, email, password);
    }
    function login(email, password) {
        signInWithEmailAndPassword(auth, email, password);
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
        <userAuthContext.Provider value={{user, signup}}>{children}</userAuthContext.Provider>
     );
}


export function useUserAuth() {
    return useContext(userAuthContext);
}