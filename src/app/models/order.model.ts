import {ProductOrder} from './productOrder.model';
export class Order {
    productOrders: Array<ProductOrder>;

    public constructor (productOrders: Array<ProductOrder>) {
        this.productOrders = productOrders;
    }

    total() {
        let total = 0;
        this.productOrders.forEach(po => total += po.quantity * po.product.price);
        return total;
    }

    isValid() {
        return this.total() > 0;
    }
}
