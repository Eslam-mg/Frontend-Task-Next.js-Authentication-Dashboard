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

    useEffect(() => {
        // Check if user has token, if not redirect to login
        const token = authStorage.getToken();
        if (!token) {
            router.push('/login');
        }
    }, [router]);

    const handleChange = (index, value) => {
        // Only allow numbers
        if (value && !/^\d$/.test(value)) {
            return;
        }

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
        setError('');

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    // Handles paste event to allow pasting the full 6-digit verification code at once.
    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);

        if (!/^\d+$/.test(pastedData)) {
            return;
        }

        const newCode = pastedData.split('');
        while (newCode.length < 6) {
            newCode.push('');
        }
        setCode(newCode.slice(0, 6));

        // Focus last filled input or first empty
        const nextIndex = Math.min(pastedData.length, 5);
        inputRefs.current[nextIndex]?.focus();
    };

    // Handles verification form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Combines the 6-digit code
        const verificationCode = code.join('');

        // Validates input length
        if (verificationCode.length !== 6) {
            setError('Please enter all 6 digits');
            return;
        }

        // Sends code to the API for verification
        setLoading(true);
        setError('');

        try {
            const response = await authAPI.verifyEmail(verificationCode);

            if (response.status) {
                setSuccess('Email verified successfully!');

                // Update user data
                const userData = authStorage.getUser();
                if (userData) {
                    userData.email_verified_at = true;
                    authStorage.setUser(userData);
                }

                // Redirect to dashboard after a short delay
                setTimeout(() => {
                    router.push('/dashboard');
                }, 1000);
            }
        } catch (err) {
            console.error('Verification error:', err);
            setError(err.message || 'Invalid verification code. Please try again.');
        } finally {
            setLoading(false);
        }
    };

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

                <form onSubmit={handleSubmit}>
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
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                onPaste={handlePaste}
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