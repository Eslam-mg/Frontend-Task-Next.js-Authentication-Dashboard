"use client"
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function page() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        
        return () => {
            
        };
    }, []);
    return (
        <ProtectedRoute>
            <div>userAccount</div>
        </ProtectedRoute>
    )
}