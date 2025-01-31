
export class OrderDetails {
    orderDetailId !: number
    orderID    !: number
    itemID !: number
    quantity  !: number
    price   !: number

    constructor(orderDetailId: number, orderID: number, itemID: number, quantity: number, price: number) {
        this.orderDetailId = orderDetailId
        this.orderID = orderID
        this.itemID = itemID
        this.quantity = quantity
        this.price = price
    }
}