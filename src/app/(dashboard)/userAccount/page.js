"use client"
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'
import { authAPI } from '@/lib/api';
import { authStorage } from '@/lib/auth';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function page() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();

    const fetchUserData = async () => {
        try {
            const response = await authAPI.getUserData();

            if (response.status && response.data) {
                setUser(response.data);
                // Update stored user data
                authStorage.setUser(response.data);
            }
        } catch (err) {
            console.error('Failed to fetch user data:', err);
            setError('Failed to load user data');

            // If unauthorized, clear auth and redirect to login
            if (err.status === 401) {
                authStorage.clearAuth();
                router.push('/login');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);
    return (
        <ProtectedRoute>
            <div>userAccount</div>
        </ProtectedRoute>
    )
}