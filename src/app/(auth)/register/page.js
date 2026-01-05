"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function page() {
    const [state, setstate] = useState();
    useRouter();
    return (
        <div className='min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
            Register
        </div>
    )
}
