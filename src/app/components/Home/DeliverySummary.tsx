'use client';
import React from "react";

import dummyData from '@/app/utils/Constants/dummyData.json'

const DeliverySummary = () => {
    const orders = dummyData;
    return (
         <div>
            <h3 className='text-3xl lg:text-4xl py-4 pb-10 font-sans text-center text-gray-800 font-bold'>{`Delivery Summary`}</h3>
           
        <table className="min-w-full bg-gray-800 text-white">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b border-gray-700">Order ID</th>
                    <th className="py-2 px-4 border-b border-gray-700">Customer Name</th>
                    <th className="py-2 px-4 border-b border-gray-700">Status</th>
                </tr>
            </thead>
            <tbody className="bg-gray-500 text-center">
                {orders?.length > 0 && orders.map((order, index) => {
                    return(
                        <tr key={index}>
                            <td className="py-2 px-4 border-b border-gray-700">#{order.Order_ID}</td>
                            <td className="py-2 px-4 border-b border-gray-700">{order.Customer_Name}</td>
                            <td className="py-2 px-4 border-b border-gray-700">
                                {order.Delivery_Status === 'Delivered' ? 
                                    <span role="img" aria-label="delivered">✅</span> 
                                    : 
                                    <span role="img" aria-label="pending">⏳</span>
                                } {order.Delivery_Status}
                            </td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
         </div>
    )
};


export default React.memo(DeliverySummary);