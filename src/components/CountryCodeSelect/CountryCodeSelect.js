"use client"
import React from 'react';

const countryCodes = [
    { code: '971', country: 'UAE', flag: '🇦🇪' },
    { code: '20', country: 'Egypt', flag: '🇪🇬' },
    { code: '966', country: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '1', country: 'USA', flag: '🇺🇸' },
    { code: '44', country: 'UK', flag: '🇬🇧' },
    { code: '91', country: 'India', flag: '🇮🇳' },
    { code: '92', country: 'Pakistan', flag: '🇵🇰' },
    { code: '880', country: 'Bangladesh', flag: '🇧🇩' },
    { code: '60', country: 'Malaysia', flag: '🇲🇾' },
    { code: '65', country: 'Singapore', flag: '🇸🇬' },
];

export default function CountryCodeSelect({ label, name, value, onChange, error, required = false, }) {
    return (
        <div className="relative">
            {label && (
                <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white`}
                aria-invalid={!!error}
                aria-describedby={error ? `${name}-error` : undefined}
            >
                <option value="" disabled hidden>Select Country Code</option>
                {countryCodes.map((item) => (
                    <option key={item.code} value={item.code}>
                        {item.flag} +{item.code} ({item.country})
                    </option>
                ))}
            </select>
            {error && (
                <p id={`${name}-error`} className="text-sm text-red-500 absolute top-full right-0">
                    {error}
                </p>
            )}
        </div>
    )
}