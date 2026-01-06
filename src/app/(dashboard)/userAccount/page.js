"use client"
import Navbar from '@/components/Navbar/Navbar';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'
import SubmitButton from '@/components/SubmitButton/SubmitButton';
import { authAPI } from '@/lib/api';
import { authStorage } from '@/lib/auth';
import { useRouter } from 'next/navigation';
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

    const handleLogout = async () => {
        try {
            await authAPI.logout();
        } catch (err) {
            console.error('Logout error:', err);
        } finally {
            authStorage.clearAuth();
            router.push('/login');
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);
    return (
        <ProtectedRoute>
            <Navbar/>
            {loading && (
                <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading...</p>
                    </div>
                </div>
            )}

            {error && (
                <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
                        <p className="text-red-600 mb-4">{error}</p>
                        <SubmitButton onClick={() => fetchUserData()} variant="primary">
                            Retry
                        </SubmitButton>
                    </div>
                </div>
            )}

            {!loading && !error && (
                <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-4">
                    <div className="max-w-4xl mx-auto pt-8">
                        {/* Header */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                                        Welcome, {user?.name || 'User'}! 👋
                                    </h1>
                                    <p className="text-gray-600">Manage your account and settings</p>
                                </div>
                                <SubmitButton onClick={handleLogout} variant="outline">
                                    Logout
                                </SubmitButton>
                            </div>

                            {/* User Info Cards */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 rounded-lg p-4">
                                    <p className="text-sm text-blue-600 font-medium mb-1">Email</p>
                                    <p className="text-gray-800 font-medium">{user?.email}</p>
                                    {user?.email_verified_at ? (
                                        <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                            ✓ Verified
                                        </span>
                                    ) : (
                                        <span className="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                                            ⚠ Not Verified
                                        </span>
                                    )}
                                </div>

                                <div className="bg-purple-50 rounded-lg p-4">
                                    <p className="text-sm text-purple-600 font-medium mb-1">Phone</p>
                                    <p className="text-gray-800 font-medium">
                                        +{user?.mobile_country_code} {user?.mobile}
                                    </p>
                                </div>

                                <div className="bg-indigo-50 rounded-lg p-4">
                                    <p className="text-sm text-indigo-600 font-medium mb-1">Account Type</p>
                                    <p className="text-gray-800 font-medium capitalize">{user?.type || 'N/A'}</p>
                                </div>

                                <div className="bg-pink-50 rounded-lg p-4">
                                    <p className="text-sm text-pink-600 font-medium mb-1">User ID</p>
                                    <p className="text-gray-800 font-medium">#{user?.id}</p>
                                </div>
                            </div>
                        </div>

                        {/* Profile Image */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile</h2>
                            <div className="flex items-center gap-6">
                                <img
                                    src={user?.image || 'https://skipapp.ae/default-images/profile.png'}
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">{user?.name}</h3>
                                    <p className="text-gray-600">{user?.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </ProtectedRoute>
    )
}