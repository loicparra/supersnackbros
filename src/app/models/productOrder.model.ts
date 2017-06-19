import {Product} from './product.model';

export interface ProductOrder {
    product: Product;
    quantity: number;
}
