"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function ProtectedRoute() {
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