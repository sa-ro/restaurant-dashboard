export interface IRestaurantDataTypes {
    Order_ID:         number;
    Customer_Name:    string;
    Customer_Phone:   string;
    Customer_Address: string;
    Items:            IItem[];
    Order_Type:       string;
    Order_Status:     string;
    Delivery_Person:  string;
    Delivery_Status:  string;
}

export interface IItem {
    Item_Name:   string;
    Item_Price:  number;
    Item_Type?:  string;
    Quantity:    number;
    Rating?:     string;
    Total_Price: number;
}