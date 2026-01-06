"use client"
import { authStorage } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
    const router = useRouter();

    useEffect(() => {
        const token = authStorage.getToken();

        if (!token) {
            router.push('/login');
        }
    }, [router]);

    // Check authentication
    const token = authStorage.getToken();

    if (!token) {
        return null; // or a loading spinner
    }
    
    return <>{children}</>;
}