import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import {ProductService} from '../product.service';
import {ProductOrder} from '../models/productOrder.model';
import {Order} from '../models/order.model';

@Component({
  selector: 'ssb-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  order: Order;

  constructor(private _productService: ProductService) {
    this.order = new Order([]);
  }

  ngOnInit() {
    this._productService.list().subscribe((products) => {
      this.order.productOrders = products.map(product => new ProductOrder(product, 0));
    });
  }

}
