import {ProductOrder} from './productOrder.model';
export interface Order {
    id: number;
    productOrders: Array<ProductOrder>;
    date: number;
    status: number;
}
