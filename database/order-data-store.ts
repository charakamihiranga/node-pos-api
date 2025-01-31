import { PrismaClient } from "@prisma/client";
import { Order } from "../model/Order";

const prisma = new PrismaClient();

export async function addOrder(order: Order) {
    try {
        await prisma.order.create({
            data: {
                orderId: order.orderId,
                customerID: order.customerID,
                orderDate: order.orderDate
            }
        });

        await prisma.orderdetails.createMany({
            data: order.orderDetails.map((item) => {
                return {
                    orderID: order.orderId,
                    itemID: item.itemID,
                    quantity: item.quantity,
                    price: item.price,
                };
            })
        });
    } catch (e) {
        console.error(`Error adding order: ${e}`);
        throw e;
    }
}