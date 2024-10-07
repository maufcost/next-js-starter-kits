'use client';
import Button from './Button';
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

const AuthWall = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [authenticating, setAuthenticating] = useState(false);

    const { signUp, login } = useAuth();

    const handleSubmit = async () => {
        if (!email || !password || password.length < 6) {
            return;
        }

        setAuthenticating(true);

        try {
            if (isRegister) {
                console.log('Signing up a new user...');
                await signUp(email, password);
            } else {
                console.log('Logging in existing user...')
                await login(email, password);
            }
        } catch (error) {
            console.log('Error: ', error.message);
        } finally {
            setAuthenticating(false);
        }
    }

    return (
        <div>
            <h3>{isRegister ? "Register" : "Log in"}</h3>
            <input
                placeholder="Email"
                type="text"
                value={email}
                onChange={e => {
                    setEmail(e.target.value)
                }}
            />
            <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => {
                    setPassword(e.target.value)
                }}
            />
            <Button
                text={authenticating ? 'Submitting...' : 'Submit'}
                onClick={handleSubmit}
            />
            <p>{isRegister ? 'Already have an account? ' : 'Don\'t have an account?' }
                <button onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? 'Sign In' : 'Create one for free here'}
                </button>
            </p>
        </div>
    )
}

export default AuthWall