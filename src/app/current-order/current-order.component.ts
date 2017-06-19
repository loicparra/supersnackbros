import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../models/order.model';
import {OrderService} from 'app/order.service';

@Component({
  selector: 'ssb-current-order',
  templateUrl: './current-order.component.html',
  styleUrls: ['./current-order.component.css']
})
export class CurrentOrderComponent implements OnInit {
  @Input() order: Order;
  constructor(private _orderService: OrderService) { }

  ngOnInit() {
  }

  add() {
    if (this.isValid()) {
      this.order.date = + new Date();
      this.order.id = this.order.date;
      this._orderService.addOrder(this.order);
    }
  }

  isValid() {
    return this.order.productOrders.length > 0;
  }

}
