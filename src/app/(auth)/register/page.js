"use client"
import CountryCodeSelect from '@/components/CountryCodeSelect/CountryCodeSelect';
import InputField from '@/components/InputField/InputField';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function page() {
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
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

                    <InputField
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        placeholder="Enter your email"
                        required
                    />

                    {/* password */}
                    <div className='relative'>
                        <InputField
                            label="Password"
                            type={showPassword ? 'text' : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            error={errors.password}
                            placeholder="Enter your password"
                            required
                        />

                        <button type='button' onClick={() => { setShowPassword(!showPassword) }} aria-label={showPassword ? "Hide password" : "Show password"} className='flex items-center justify-center w-11 h-11 cursor-pointer absolute bottom-1 right-0'>
                            {showPassword ?
                                <svg className="" aria-hidden='true' width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx={12} cy={12} r={3} /></svg>
                                :
                                <svg className="lucide lucide-eye-off-icon lucide-eye-off" aria-hidden='true' width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /><path d="m2 2 20 20" /></svg>
                            }
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <div className='relative'>
                        <InputField
                            label="Confirm Password"
                            type={showPassword ? 'text' : "password"}
                            name="password_confirmation"
                            value={formData.password_confirmation}
                            onChange={handleChange}
                            error={errors.password_confirmation}
                            placeholder="Confirm your password"
                            required
                        />

                        <button type='button' onClick={() => { setShowRePassword(!showRePassword) }} aria-label={showRePassword ? "Hide password" : "Show password"} className='flex items-center justify-center w-11 h-11 cursor-pointer absolute bottom-1 right-0'>
                            {showRePassword ?
                                <svg className="" aria-hidden='true' width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx={12} cy={12} r={3} /></svg>
                                :
                                <svg className="lucide lucide-eye-off-icon lucide-eye-off" aria-hidden='true' width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /><path d="m2 2 20 20" /></svg>
                            }
                        </button>
                    </div>

                    <CountryCodeSelect
                        label="Country Code"
                        name="mobile_country_code"
                        value={formData.mobile_country_code}
                        onChange={handleChange}
                        error={errors.mobile_country_code}
                        required
                    />

                    <InputField
                        label="Phone Number"
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        error={errors.mobile}
                        placeholder="Enter your phone number"
                        required
                    />
                </form>
            </div>
        </div>
    )
}
