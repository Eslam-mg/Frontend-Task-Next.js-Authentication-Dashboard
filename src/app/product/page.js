'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <nav className="flex items-center gap-2 text-sm">
                    <Link href="/" className="text-gray-900 font-medium hover:text-gray-600">
                        Home
                    </Link>
                    <span className="text-gray-400">›</span>
                    <Link href="#" className="text-gray-900 font-medium hover:text-gray-600">
                        Our Category
                    </Link>
                    <span className="text-gray-400">›</span>
                    <span className="text-gray-400">Product Details</span>
                </nav>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                                    className={`relative aspect-square bg-linear-to-b from-gray-200 to-gray-100 rounded-2xl overflow-hidden border-2 transition-all ${selectedImage === index ? 'border-gray-800 scale-105' : 'border-transparent hover:border-gray-300'
                                        }`}
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
                                    <div className='relative'>
                                        <button
                                            key={color.name}
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
            </div>
        </div>
    );
}
