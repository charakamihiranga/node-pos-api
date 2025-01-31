import Customer from "./Customer";
import {OrderDetails} from "./OrderDetail";


export class Order {
    orderId ! : number
    customerID !: number
    orderDate !: Date
    orderDetails !: OrderDetails[]


    constructor(orderId: number, customerID: number, orderDate: Date) {
        this.orderId = orderId;
        this.customerID = customerID;
        this.orderDate = orderDate;
    }
}