import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../models/order.model';
import {OrderService} from '../order.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {OrderStatus} from '../app.config';

@Component({
  selector: 'ssb-pending-orders-list',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {
  @Input() orders: Array<Order>;
  lastCheckedTimestamp: number;
  constructor(private _orderService: OrderService) {
    this.lastCheckedTimestamp = 0;
    this.orders = [];
  }

  ngOnInit() {
    this.fetchOrdersSinceLastTimesamp();
    Observable.interval(2000).subscribe(() => this.fetchOrdersSinceLastTimesamp());
  }

  fetchOrdersSinceLastTimesamp() {
    const checkDate = + new Date();
    this._orderService.list(
        {
          'date_gte': this.lastCheckedTimestamp,
          '_sort': 'date', '_order': 'asc', 'status': OrderStatus.PENDING
        }
    ).subscribe((pr) => {
      this.orders = this.orders.concat(pr);
      this.lastCheckedTimestamp = checkDate;
    });
  }

  validateOrder(order) {
    const i = this.getOrder(order);
    this.orders.splice(i, 1);
  }

  getOrder(order: Order): number | null {
    let result = null;
    this.orders.forEach((item, index) => {
      if (item.id === order.id) {
        result = index;
      }
    });

    return result;
  }
}
