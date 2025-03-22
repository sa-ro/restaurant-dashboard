'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Pizza from '../../../../public/Home/pizza.jpg';
import dummyData from '@/app/utils/Constants/dummyData.json'


import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { IRestaurantDataTypes } from '@/app/types/restaurantDataTypes';


const MostPurchased = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(1);
    const [topSellingProducts, setTopSellingProducts] = useState<string[]>([])

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? topSellingProducts?.length - visibleItems : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === topSellingProducts?.length - visibleItems ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const updateVisibleItems = () => {
            if (window.innerWidth >= 1024) {
                setVisibleItems(3);
            } else if (window.innerWidth >= 768) {
                setVisibleItems(2);
            } else {
                setVisibleItems(1);
            }
        };

        updateVisibleItems();
        window.addEventListener('resize', updateVisibleItems);

        return () => {
            window.removeEventListener('resize', updateVisibleItems);
        };
    }, []);

    useEffect(() =>{
        const itemsArr = dummyData?.map((data: IRestaurantDataTypes) => {
            return data?.Items.flat();
        })
        const itemNames = itemsArr && itemsArr?.flatMap(order => order.map(item => item.Item_Name));
        
        const frequency = itemNames && itemNames?.reduce((acc: { [key: string]: number }, item: string) => {
            acc[item] = (acc[item] || 0) + 1;
            return acc;
        }, {});

        const mostFrequent: string[] = Object.entries(frequency)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6)
            .map(item => item[0]);
            if(mostFrequent?.length){
                setTopSellingProducts(mostFrequent);
            }
    },[])

    return (
        <div className="relative w-full lg:max-w-6xl mx-auto">
            <h1 className='text-3xl lg:text-4xl py-4 pb-10 font-sans text-center text-gray-800 font-bold'>Top-Selling Products</h1>
            <div className="overflow-hidden">
                <div
                    className="flex gap-1 transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
                >
                    
                    {topSellingProducts?.map((item: string) => (
                        <div key={item} className=" flex-shrink-0 p-1 pb-4" style={{ width: `${100 / visibleItems}%` }}>
                            <div className=" relative shadow-2xl  h-200px bg-white rounded-md flex items-center justify-center">
                                <Image src={Pizza} alt={item} width={400} height={200} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px" className="object-cover rounded-md" />
                                <h2 className="mt-2 text-center absolute pt-4 text-gray-800 font-semibold bottom-0 h-14 bg-white rounded-b-md w-full">{item }</h2>
                            </div>
                           
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={prevSlide}
                aria-label="Previous"
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white hover:bg-gray-500/80 rounded-full cursor-pointer text-white p-2"
            >
               <ArrowLeftIcon className="h-6 w-6 text-gray-800" />
            </button>
            <button
                onClick={nextSlide}
                aria-label="Next"
                className="absolute top-1/2 right-0 transform cursor-pointer -translate-y-1/2 bg-white hover:bg-gray-500/80 rounded-full text-white p-2"
            >
                 <ArrowRightIcon className="h-6 w-6 text-gray-800" />
            </button>
        </div>
    );
};

export default React.memo(MostPurchased);