import { Component, OnInit } from '@angular/core';
import {OrderStatus} from '../app.config';
import {OrderService} from '../order.service';

@Component({
  selector: 'ssb-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  total = 0;
  constructor(private _orderService: OrderService) { }

  ngOnInit() {
    this.totalGain();
  }

  totalGain() {
    this._orderService.list(
        {
          '_sort': 'date', '_order': 'asc', 'status': OrderStatus.FINISHED
        }
    ).subscribe((pr) => {
      pr.forEach((order) => {
        order.productOrders.forEach((productOrder) => {
          this.total += productOrder.quantity * productOrder.product.price;
        });
      });
    });
  }

}
