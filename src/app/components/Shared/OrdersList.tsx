import { IItem, IRestaurantDataTypes } from "@/app/types/restaurantDataTypes";
import React from "react";

const OrdersListCard = ({orders}:{orders: IRestaurantDataTypes}) => {
    return (
        
                                <div className='border border-gray-800 rounded-md p-3 w-fit hover:scale-110 transition-all' key={orders?.Order_ID}>
                                <h3><strong>Order ID:</strong> #{orders?.Order_ID}</h3>
                                <h3 className='font-semibold'>Ordered Items:</h3>
                                <ul className='px-5'>
                                    {orders?.Items?.length > 0 && orders?.Items?.map((orderItem: IItem) =>{
                                        return (
                                            <li key={orderItem?.Item_Name} className='list-disc'>{orderItem?.Item_Name}</li>
                                        )
                                    } )}
                                </ul>
                               </div>
                                )
};

export default OrdersListCard;