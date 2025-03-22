"use client";
import React, { useState } from 'react';
import { DINE_IN, ONLINE } from '@/app/utils/Constants/common';
import { filterOrdersByType } from '@/app/utils/Helpers/helpers';
import { IRestaurantDataTypes } from '@/app/types/restaurantDataTypes';
import OrdersListCard from '../Shared/OrdersList';


const OrderTypes: React.FC = () => {

    const [activeTab, setActiveTab] = useState<string>(ONLINE);
    
    const onlineOrders = filterOrdersByType(ONLINE);
    const dineInOrders = filterOrdersByType(DINE_IN);

    const renderContent = () => {
        switch (activeTab) {
            case ONLINE:
                return <div className='flex flex-wrap items-center justify-center gap-4 max-w-6xl mx-auto'>
                    {onlineOrders && onlineOrders?.map((onlineOrder: IRestaurantDataTypes) => {
                        return (
                        <OrdersListCard orders={onlineOrder} key={onlineOrder?.Order_ID} />
                        )
                    })}
                </div>;
            case DINE_IN:
                return <div className='flex flex-wrap items-center justify-center gap-4 max-w-6xl mx-auto'>
                    {dineInOrders && dineInOrders?.map((dineInOrder: IRestaurantDataTypes) => {
                        return (
                        <OrdersListCard orders={dineInOrder} key={dineInOrder?.Order_ID} />
                        )
                    })}
                </div>;
            default:
                return null;
        }
    };

    return (
        <div>
                        <h2 className='text-3xl lg:text-4xl py-4 pt-10 font-sans text-center text-gray-800 font-bold'>Order Variations</h2>

            <div className="tabs pb-8 flex justify-center gap-3">
                <button
                    className={`${activeTab === ONLINE ? 'bg-gray-800 text-white' : ''} cursor-pointer p-3 px-6 border border-gray-800 rounded-md`}
                    onClick={() => setActiveTab(ONLINE)}
                >
                    Online ({onlineOrders && onlineOrders?.length})
                </button>
                <button
                    className={`${activeTab === DINE_IN ? 'bg-gray-800 text-white' : ''} cursor-pointer p-3 px-6 border border-gray-800 rounded-md`}
                    onClick={() => setActiveTab(DINE_IN)}
                >
                    Offline ({dineInOrders && dineInOrders?.length})
                </button>
            </div>
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
};

export default React.memo(OrderTypes);