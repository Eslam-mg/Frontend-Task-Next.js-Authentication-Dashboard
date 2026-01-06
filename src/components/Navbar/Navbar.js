"use client";
import React, { useState } from 'react';

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <div className="logo">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 4L6 8V26C6 27.1 6.9 28 8 28H24C25.1 28 26 27.1 26 26V8L24 4H8Z" fill="#9B8B7E" />
                        <path d="M6 8H26" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M21 14C21 16.7614 18.7614 19 16 19C13.2386 19 11 16.7614 11 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="logo-text">ShopHub</span>
                </div>

                {/* Search Bar */}
                <div className="search-bar">
                    <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 19L14.65 14.65" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search for products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>

                {/* Utility Icons */}
                <div className="header-icons">
                    {/* Wishlist */}
                    <button className="icon-button" aria-label="Wishlist">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Shopping Cart */}
                    <button className="icon-button" aria-label="Shopping Cart">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 2L7 6H23L21 2H9Z" fill="#9B8B7E" />
                            <path d="M7 6V20C7 21.1 7.9 22 9 22H21C22.1 22 23 21.1 23 20V6H7Z" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18 11C18 12.6569 16.6569 14 15 14C13.3431 14 12 12.6569 12 11" stroke="#444444" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}