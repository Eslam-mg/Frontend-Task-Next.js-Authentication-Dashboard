'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function page({ params }) {
    const [selectedColor, setSelectedColor] = useState('blue');
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    const colors = [
        { name: 'red', value: '#EF4444', label: 'Red' },
        { name: 'blue', value: '#93C5FD', label: 'Blue' },
        { name: 'olive', value: '#84CC16', label: 'Olive' },
        { name: 'lightblue', value: '#60A5FA', label: 'Light Blue' },
        { name: 'gray', value: '#6B7280', label: 'Gray' },
    ];

    const images = [
        '/image/young-adult-man-wearing-hoodie.png',
        '/image/white-hoodie.png',
        '/image/red-hoodie.png',
        '/image/black-hoodie.jpg',
    ];

    const handlePrevImage = () => {
        setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const incrementQuantity = () => setQuantity((prev) => prev + 1);
    const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const ratings = [
        { star: 5, percent: 67 },
        { star: 4, percent: 15 },
        { star: 3, percent: 6 },
        { star: 2, percent: 3 },
        { star: 1, percent: 9 },
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className='w-full h-52 bg-[#F5F5F5] flex items-center justify-center relative'>
                <Image src="/image/3d-vertical-background-with-abstract-style.png" alt="vertical background with abstract style" fill className="object-cover" />
                <div>
                    {/* Background Text */}
                    <span style={{ WebkitTextStroke: '.3px #9ca3af' }} className="absolute inset-0 flex items-center justify-center text-[80px] font-bold text-[#0000000D]/5 opacity-30 select-none">Product Details</span>
                    <div className='font-semibold text-4xl'>Product Details</div>
                </div>
            </div>
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm w-full px-4 sm:px-6 lg:px-8 py-4 mb-8 rounded-2xl bg-[#ECECEC66]">
                    <Link href="/" className="text-gray-900 font-medium hover:text-gray-600">
                        Home
                    </Link>
                    <span className="text-gray-400">›</span>
                    <Link href="#" className="text-gray-900 font-medium hover:text-gray-600">
                        Our Category
                    </Link>
                    <span className="text-gray-400">›</span>
                    <span className="text-gray-400">Product Details</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Side - Image Gallery */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative bg-linear-to-b from-gray-200 to-gray-100 rounded-3xl overflow-hidden aspect-square">
                            <Image
                                src={images[selectedImage]}
                                alt="Product Image"
                                fill
                                className="object-contain p-8"
                                priority
                            />

                            {/* Navigation Arrows */}
                            <button
                                onClick={handlePrevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#C4C4C4] text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                                aria-label="Previous image"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                                aria-label="Next image"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-3 gap-4">
                            {images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative aspect-square bg-linear-to-b from-gray-200 to-gray-100 rounded-2xl overflow-hidden border-2 transition-all ${selectedImage === index ? 'border-gray-800 scale-105' : 'border-transparent hover:border-gray-300'}`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Thumbnail ${index + 1}`}
                                        fill
                                        className="object-contain p-4"
                                    />
                                    {index === 2 && (
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                            <span className="text-white text-2xl font-bold">+2</span>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Product Info */}
                    <div className="space-y-6">
                        {/* Header with Icons */}
                        <div className="flex items-start justify-between">
                            <div className="inline-block px-4 py-1.5  border border-primary rounded-full">
                                <span className="text-sm text-primary">T-Shirt</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button type='button' aria-label='add to cart' className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
                                    <Image src="/icon/bag-add.svg" alt="Wishlist" width={24} height={24} />
                                </button>
                                <button type='button' aria-label='add to wish list' className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
                                    <Image src="/icon/brown-heart.svg" alt="Wishlist" width={24} height={24} />
                                </button>
                            </div>
                        </div>

                        {/* Product Title */}
                        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                            J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
                        </h1>

                        {/* Price */}
                        <div>
                            <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-bold text-gray-900">$300.00</span>
                                <span className="text-xl text-gray-400 line-through">$360.00</span>
                            </div>
                            <p className="text-sm text-gray-500">This price is exclusive of taxes.</p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed pb-4 border-b-2 border-[#E6E6E6]">
                            Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy
                        </p>

                        {/* Type Selector */}
                        <div className="space-y-2 relative md:max-w-2xs">
                            <label className="w-10 block text-xs font-medium bg-white text-gray-900 text-center absolute -top-2 left-2">Type</label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMUw2IDZMMTEgMSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] bg-size-[12px] bg-position-[right_1rem_center] bg-no-repeat pr-10">
                                <option>Cotton</option>
                                <option>Polyester</option>
                                <option>Blend</option>
                            </select>
                        </div>

                        {/* Size Selector */}
                        <div className="space-y-2 relative md:max-w-2xs">
                            <label className="w-10 block text-xs font-medium bg-white text-gray-900 text-center absolute -top-2 left-2">Size</label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMUw2IDZMMTEgMSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] bg-size-[12px] bg-position-[right_1rem_center] bg-no-repeat pr-10">
                                <option>2Xl</option>
                                <option>XL</option>
                                <option>L</option>
                                <option>M</option>
                                <option>S</option>
                            </select>
                        </div>

                        {/* Colors */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-900">Colors</label>
                            <div className="flex items-center gap-3">
                                {colors.map((color) => (
                                    <div key={color.name} className='relative'>
                                        <button
                                            onClick={() => setSelectedColor(color.name)}
                                            className={`w-14 h-14 rounded-full flex items-center justify-center bg-[#F4F7F9] transition-all ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-gray-900' : ''} cursor-pointer`}
                                            aria-label={color.label}
                                        >
                                            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: color.value }} />
                                        </button>

                                        <div className='absolute -bottom-7 left-1/2 -translate-x-1/2'>
                                            {selectedColor === color.name && (
                                                <p className="text-sm text-gray-600 mt-2">{color.name}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-sm font-medium text-gray-900">
                                    Quantity <span className="text-[#8A8A8A]">($300.00 for Piece)</span>
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                {/* Quantity Selector */}
                                <div className="flex items-center bg-[#F5F5F5] p-2 rounded-xl overflow-hidden">
                                    <button
                                        onClick={decrementQuantity}
                                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-white transition-colors text-gray-600 cursor-pointer"
                                    >
                                        <svg width="16" height="2" viewBox="0 0 16 2" fill="currentColor">
                                            <rect width="16" height="2" />
                                        </svg>
                                    </button>

                                    <span className="w-16 h-12 flex items-center justify-center text-gray-900 font-medium">
                                        {quantity.toString().padStart(2, '0')}
                                    </span>

                                    <button
                                        onClick={incrementQuantity}
                                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-white transition-colors text-black cursor-pointer"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M8 0v16M0 8h16" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Price Display */}
                                <span className="text-2xl font-bold text-gray-900">$300.00</span>

                                {/* Add to Cart Button */}
                                <button className="flex-1 bg-primary text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors">
                                    Add To Cart
                                    <Image src="/icon/shopping-bag-2.svg" alt="shopping bag icon" width={20} height={20} className="brightness-0 invert" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <section className="max-w-6xl mx-auto px-4 py-10">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Left */}
                        <div className="md:col-span-2">
                            <h3 className="font-semibold text-lg mb-4 relative">Rating & Reviews <span className='bg-primary h-1 w-8 rounded-2xl absolute -bottom-1 left-0' /></h3>

                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Rating */}
                                <div className='flex items-end justify-center gap-3'>
                                    <div className="text-7xl md:text-9xl font-bold">4.5</div>
                                    <span className="text-gray-400 text-2xl">/ 5</span>
                                </div>

                                {/* Bars */}
                                <div className="flex-1 space-y-2">
                                    {ratings.map((item) => (
                                        <div key={item.star} className="flex items-center gap-2">
                                            <div className="flex items-center gap-1 w-10">
                                                <Image src="/icon/star.svg" alt='star' width={20} height={20} className="fill-primary text-primary" />
                                                <span className="text-sm">{item.star}</span>
                                            </div>

                                            <div className="flex-1 h-2 bg-gray-200 rounded">
                                                <div
                                                    className="h-2 bg-primary rounded"
                                                    style={{ width: `${item.percent}%` }}
                                                />
                                            </div>

                                            <span className="text-sm text-gray-500 w-10 text-right">
                                                %{item.percent}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="hidden md:flex flex-col justify-between items-start md:items-end">
                            <div className="text-center">
                                <p className="text-gray-400 text-base mb-4">Total Reviews</p>
                                <p className="text-6xl font-semibold">3.0K</p>
                            </div>

                            <button className="flex items-center justify-center gap-2 mt-4 bg-primary text-white px-5 py-2 rounded-lg text-sm hover:opacity-90">
                                <span>Add Comment</span>
                                <Image src="/icon/chat.svg" alt='chat' width={20} height={20} />
                            </button>
                        </div>
                    </div>

                    {/* Reviews List */}
                    <div className="mt-10 space-y-6">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="border-b pb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <div className='flex items-center justify-center gap-2'>
                                        <h4 className="font-semibold">Alex Daewn</h4>
                                        <div className="flex">
                                            {Array.from({ length: 4 }).map((_, i) => (
                                                <Image
                                                    key={i}
                                                    src="/icon/star.svg"
                                                    alt='star'
                                                    width={14}
                                                    height={14}
                                                    className="fill-primary text-primary"
                                                />
                                            ))}
                                            <Image
                                                src="/icon/star.svg"
                                                alt='star'
                                                width={14}
                                                height={14}
                                                className="fill-primary text-primary opacity-35"
                                            />
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-400">4 months ago</span>
                                </div>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                                    nonummy Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        ))}

                        <div className="text-center relative">
                            <Image src="/image/logo-without-text.png" alt='logo-without-text' width={90} height={41} className='hidden md:block absolute -top-4 left-0'/>
                            <button className="text-sm bg-[#F5F5F5] text-primary px-6 h-14 rounded-lg cursor-pointer">
                                View More Comments
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
