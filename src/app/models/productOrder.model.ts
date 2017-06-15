import {Product} from './product.model';
import {Moreless} from './moreless.model';
export class ProductOrder implements Moreless {
    product: Product;
    quantity: number;

    constructor (product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

    increment () {
        this.quantity++;
    }
    decrement () {
        this.quantity--;
        if (this.quantity < 0) {
            this.quantity = 0;
        }
    }
}
