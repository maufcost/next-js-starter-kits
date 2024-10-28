'use client'

import { auth, db } from '@/firebase';
import {
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useContext, useState, useEffect } from 'react';

const AuthContext = React.createContext();

// This is a custom hook
// It lets us access the context
//
// Also, any components that import this hook must
// be client components! So, use 'use client'
// 
// We could've just imported 'useContext' and the
// actual context 'AuthContext' in whatever child
// component we'd want to use this context; however,
// we wanted to give this context a specific name: useAuth()
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const [userDataObject, setUserDataObject] = useState(null);

    // AUTH HANDLERS
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        setUserDataObject(null);
        setCurrentUser(null);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            try {
                // Set the user to our local context state
                setLoading(true);
                setCurrentUser(user);

                if (!user) {
                    console.log("No user found/authenticated")
                    return;
                }

                // If user exists, fetch their data from firestore
                console.log('Fetching user data...')
                const docRef = doc(db, 'users', user.uid);
                const docSnapshot = await getDoc(docRef);
                let firebaseData = {}

                if (docSnapshot.exists()) {
                    console.log('Found user data')
                    firebaseData = docSnapshot.data();
                    console.log(firebaseData);
                }

                setUserDataObject(firebaseData);

            } catch(error) {
                console.log(error.message)
            } finally {
                setLoading(false);
            }
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        userDataObject,
        setUserDataObject,
        signUp,
        signOut,
        login,
        loading,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </ AuthContext.Provider>
    )
}
