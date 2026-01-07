'use client';
import Image from 'next/image';
import React from 'react';

const products = [
    {
        id: 1,
        title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
        price: 900,
        oldPrice: 1300,
        rating: 4.5,
        reviews: 2910,
        image: '/products/img1.png',
    },
    {
        id: 2,
        title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
        price: 900,
        rating: 4.5,
        reviews: 2910,
        image: '/products/img2.png',
        discount: '25% OFF',
    },
    {
        id: 3,
        title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
        price: 900,
        rating: 4.5,
        reviews: 2910,
        image: '/products/img3.png',
    },
    {
        id: 4,
        title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
        price: 900,
        rating: 4.5,
        reviews: 2910,
        image: '/products/img4.png',
        discount: '25% OFF',
    },
];

export default function SimilarItems() {
    return (
        <section className="py-12">

            {/* Title */}
            <div className="mb-6">
                <h2 className="font-semibold text-lg">Similar Items</h2>
                <div className="w-10 h-1 rounded-2xl bg-primary mt-1" />
            </div>

            {/* Products */}
            <div className="relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="p-3"
                        >
                            {/* Image */}
                            <div className="relative bg-gray-50 rounded-xl p-4 pt-16 border border-black/5">
                                {product.discount && (
                                    <span className="absolute top-4 left-2 text-[10px] border border-primary text-primary px-2 py-1 rounded">
                                        {product.discount}
                                    </span>
                                )}

                                <div className="absolute top-2 right-2 flex gap-2">
                                    <button type='button' aria-label='add to cart' className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
                                        <Image src="/icon/bag-add.svg" alt="Wishlist" width={24} height={24} />
                                    </button>
                                    <button type='button' aria-label='add to wish list' className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
                                        <Image src="/icon/brown-heart.svg" alt="Wishlist" width={24} height={24} />
                                    </button>
                                </div>

                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={200}
                                    height={220}
                                    className="mx-auto object-contain"
                                />
                            </div>

                            {/* Info */}
                            <div className="mt-3 space-y-1">
                                <div className='flex items-center justify-between'>
                                    <p className="text-xs font-medium text-[#545454]">Dresses</p>

                                    {/* Rating */}
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <Image src="/icon/star.svg" alt='star' width={20} height={20} className="fill-primary text-primary" />
                                        {product.rating}
                                        <span>({product.reviews})</span>
                                    </div>
                                </div>

                                <h3 className="text-sm font-medium line-clamp-2">
                                    {product.title}
                                </h3>

                                <div className='flex items-center justify-between'>
                                    {/* Price */}
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-sm">AED {product.price}</span>
                                        {product.oldPrice && (
                                            <span className="text-xs line-through text-gray-400">
                                                AED {product.oldPrice}
                                            </span>
                                        )}
                                    </div>

                                    {/* Colors */}
                                    <div className="flex items-center gap-1">
                                        <span className="w-4 h-4 rounded-full bg-[#5C3A2E]" />
                                        <span className="w-4 h-4 rounded-full bg-black" />
                                        <span className="text-xs text-gray-400 ml-1">+2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Arrows */}
                <div className="flex justify-center gap-3 mt-8">
                    <button type='button' className="p-2 rounded-full bg-[#E8EDF2] text-black cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <button type='button' className="p-2 rounded-full bg-primary text-white cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
