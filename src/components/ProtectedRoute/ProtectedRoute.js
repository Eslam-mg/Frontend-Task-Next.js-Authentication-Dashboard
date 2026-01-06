"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function ProtectedRoute() {
    const router = useRouter();

    useEffect(() => {
        
        return () => {
            
        };
    }, []);
    return (
        <div>ProtectedRoute</div>
    )
}