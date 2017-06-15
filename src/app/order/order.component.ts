import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../models/order.model';
import {OrderService} from '../order.service';

@Component({
  selector: 'ssb-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() order: Order;
  constructor(private _orderService: OrderService) { }

  ngOnInit() {
  }

  add() {
    if (this.order.isValid()) {
      this._orderService.addOrder(this.order);
    }
  }

}
