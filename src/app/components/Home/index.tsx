import React from 'react';
import MostPurchased from './MostPurchased';
import OrderTypes from './OrderTypes';
import DeliverySummary from './DeliverySummary';

const HomeComponent = () => {
    return (
        <div className='flex flex-col gap-4'>
            <MostPurchased />
            <OrderTypes />
            <DeliverySummary />
        </div>
    );
};

export default React.memo(HomeComponent);