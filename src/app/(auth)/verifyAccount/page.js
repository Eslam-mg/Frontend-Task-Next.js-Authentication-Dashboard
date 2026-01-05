"use client"
import SubmitButton from '@/components/SubmitButton/SubmitButton';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react'

export default function page() {
    // State to store 6-digit verification code and loading/error states
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [resending, setResending] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();

    // Refs to manage focus for each code input box
    const inputRefs = useRef([]);
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Verify Your Email</h1>
                    <p className="text-gray-600">Enter the 6-digit code sent to your email</p>
                </div>

                {error && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm">
                        {success}
                    </div>
                )}

                <form >
                    <div className="flex justify-center gap-2 mb-6">
                        {code.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                inputMode="numeric"
                                aria-label={`Digit ${index + 1}`} 
                                aria-required="true"
                                pattern="[0-9]*"
                                maxLength={1}
                                value={digit}
                                className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                            />
                        ))}
                    </div>

                    <SubmitButton
                        type="submit"
                        loading={loading}
                        fullWidth
                        variant="primary"
                    >
                        Verify Email
                    </SubmitButton>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-600 mb-2">Didn't receive the code?</p>
                    <button
                        disabled={resending}
                        aria-disabled={resending}
                        className="text-blue-600 hover:text-blue-700 font-medium disabled:opacity-50"
                    >
                        {resending ? 'Sending...' : 'Resend Code'}
                    </button>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800 text-center">
                        <strong>For testing:</strong> Use code <code className="bg-blue-200 px-2 py-1 rounded">123456</code>
                    </p>
                </div>
            </div>
        </div>
    )
}