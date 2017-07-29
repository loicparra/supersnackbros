import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import {ProductService} from '../product.service';
import {Order} from '../models/order.model';
import {OrderStatus} from '../app.config';
import {Cookies} from "../models/cookies.class";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

@Component({
  selector: 'ssb-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  order: Order;
  products: Array<Product>;
  username: string;
  userid: string;

  constructor(private _productService: ProductService, private router: Router) {
    this.resetOrder();
    this.products = [];
    const c = new Cookies();
    this.userid = c.get('userid');
    this.username = c.get('username');

  }

  ngOnInit() {
    this._productService.list().subscribe((products) => {
      this.products = products;
    });
    Observable.interval(2000).subscribe(() => {
      if (this.username === null) {
        const c = new Cookies();
        if (c.get('username') === null) {
          this.router.navigate(['/']);
        } else {
          this.userid = c.get('userid');
          this.username = c.get('username');
        }
      }
    });
  }

  resetOrder() {
    this.order = {
      'id': null,
      'productOrders': [],
      date: 0,
      status: OrderStatus.PENDING,
      place: '',
      userid: this.userid,
      username: this.username
    };
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
