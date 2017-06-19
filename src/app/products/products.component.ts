import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import {ProductService} from '../product.service';
import {Order} from '../models/order.model';
import {OrderStatus} from '../app.config';

@Component({
  selector: 'ssb-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  order: Order;
  products: Array<Product>;

  constructor(private _productService: ProductService) {
    this.order = { 'id': 0, 'productOrders': [], date: 0, status: OrderStatus.PENDING};
    this.products = [];
  }

  ngOnInit() {
    this._productService.list().subscribe((products) => {
      this.products = products;
    });
  }

  getProductOrder(product: Product): number | null {
    let result = null;
    this.order.productOrders.forEach((item, index) => {
      if (item.product.id === product.id) {
        result = index;
      }
    });

    return result;
  }

  addToOrder(product) {
    const i = this.getProductOrder(product);
    if (null === i) {
      this.order.productOrders.push({ 'product': product, quantity: 1 });
    } else {
      this.order.productOrders[i].quantity++;
    }
  }

  removeFromOrder(product) {
    const i = this.getProductOrder(product);
    if (null !== i) {
      this.order.productOrders[i].quantity--;
      if (this.order.productOrders[i].quantity <= 0) {
        this.order.productOrders.splice(i, 1);
      }
    }
  }
}
