import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../models/order.model';

@Component({
  selector: 'ssb-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() order: Order;
  constructor() { }

  ngOnInit() {
  }

  setPlace(event: any) {
    this.order.place = event.target.value;
  }

  total() {
    let total = 0;
    this.order.productOrders.forEach(po => total += po.quantity * po.product.price);

    return total;
  }
}
