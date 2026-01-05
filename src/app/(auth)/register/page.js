"use client"
import InputField from '@/components/InputField/InputField';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function page() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        mobile: '',
        mobile_country_code: '',
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error for this field when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };
    return (
        <div className='min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
                    <p className="text-gray-600">Sign up to get started</p>
                </div>

                <form className='flex flex-col gap-4'>
                    <InputField
                        label="Full Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        placeholder="Enter your full name"
                        required
                    />
                </form>
            </div>
        </div>
    )
}
