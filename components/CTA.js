'use client';

import React from 'react';
import Link from 'next/link';
import Button from './Button';
import { useAuth } from '@/context/AuthContext';

const CTA = () => {
    const { currentUser } = useAuth();

    if (currentUser) {
        return (
            <div>
                <Link href="/dashboard">
                    <Button text="Go to my dashboard" />
                </Link>
            </div>
        )
    }

    return (
        <div className="buttons">
            <Link href="/dashboard">
                <Button text="Sign Up" />
            </Link>
            <Link href="/dashboard">
                <Button text="Login" />
            </Link>
        </div>
    )
}

export default CTA