"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="max-w-7xl p-4 m-auto">
            <nav aria-label="Main navigation" className="flex items-center gap-6">
                {/* Logo */}
                <Link href="/" className="flex items-center justify-center cursor-pointer">
                    <Image src="/image/logo.png" alt="Company Logo" width={65} height={50} loading='lazy' className='' />
                </Link>

                {/* Mobile menu button */}
                <button
                    className="ml-auto block lg:hidden cursor-pointer"
                    aria-label="Toggle navigation menu"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Image src="/icon/mingcute_menu-fill.svg" alt="Menu icon" width={24} height={24} />
                </button>

                <div className={`flex-1 flex-col lg:flex-row items-center justify-between absolute lg:static top-20 left-0 w-full lg:w-auto bg-white lg:bg-transparent pl-6 lg:pl-0 ${isOpen ? 'block' : 'hidden lg:flex'}`}>
                    {/* Links */}
                    <ul className="w-full lg:w-fit flex flex-col gap-4 lg:flex-row lg:gap-6 mb-6 lg:mb-0">
                        <li>
                            <Link href="#" className='flex items-center lg:justify-center gap-1'>
                                <Image src="/icon/home-icon.svg" alt='home' width={20} height={20} loading='lazy' className='' />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='flex items-center lg:justify-center gap-1'>
                                <Image src="/icon/category-icon.svg" alt='category icon' width={20} height={20} loading='lazy' className='' />
                                <span>Our Category</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='flex items-center lg:justify-center gap-1'>
                                <Image src="/icon/about-icon.svg" alt='about icon' width={20} height={20} loading='lazy' className='' />
                                <span>About Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='flex items-center lg:justify-center gap-1'>
                                <Image src="/icon/contact-icon.svg" alt='contact icon' width={20} height={20} loading='lazy' className='' />
                                <span>Contact Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='flex items-center lg:justify-center gap-1'>
                                <Image src="/icon/faq-icon.svg" alt='faqs icon' width={20} height={20} loading='lazy' className='' />
                                <span>FAQs</span>
                            </Link>
                        </li>
                    </ul>

                    {/* Utility Icons */}
                    <div className="w-full lg:w-fit flex flex-col lg:flex-row lg:items-center lg:justify-center gap-6">
                        <button type='button' aria-label="Open shopping cart" className="flex items-center gap-1 cursor-pointer">
                            <Image src="/icon/shopping bag.svg" alt="shopping bag icon" width={24} height={24} loading='lazy' />
                            <span className='block lg:hidden'>shopping cart</span>
                        </button>

                        <button type='button' aria-label="Open notification" className="flex items-center gap-1 cursor-pointer">
                            <Image src="/icon/notification.svg" alt="notification" width={24} height={24} loading='lazy' />
                            <span className='block lg:hidden'>notification</span>
                        </button>

                        {/* Wishlist */}
                        <button type='button' aria-label="Wishlist" className="flex items-center gap-1 cursor-pointer">
                            <Image src="/icon/love.svg" alt='heart icon' width={24} height={24} loading='lazy' />
                            <span className='block lg:hidden'>Wish list</span>
                        </button>

                        <button id="dropdownDefaultButton" aria-label="Language" type="button" className='flex flex-row items-center justify-center text-black cursor-pointer'>
                            <span>EN</span>
                            <Image src="/icon/mingcute_down-line.svg" alt='mingcute_down-line' width={24} height={24} loading='lazy' />
                        </button>
                        <button id="dropdownDefaultButton" aria-label="Language" type="button" className='flex flex-row items-center justify-center text-black cursor-pointer'>
                            <Image src="/icon/user.svg" alt='user icon' width={24} height={24} loading='lazy' />
                            <Image src="/icon/mingcute_down-line.svg" alt='mingcute_down-line' width={24} height={24} loading='lazy' />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}