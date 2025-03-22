import dummyData from '@/app/utils/Constants/dummyData.json'


export const filterOrdersByType = (orderType: string) => {
    return dummyData?.length > 0 && dummyData?.filter(order => order.Order_Type === orderType);
};