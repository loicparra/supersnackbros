import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from '../models/order.model';
import {OrderService} from 'app/order.service';

@Component({
  selector: 'ssb-current-order',
  templateUrl: './current-order.component.html',
  styleUrls: ['./current-order.component.css']
})
export class CurrentOrderComponent implements OnInit {
  @Input() order: Order;
  @Output() orderDone = new EventEmitter();
  isDisabled: boolean;
  constructor(private _orderService: OrderService) {
    this.isDisabled = false;
  }

  ngOnInit() {
  }

  add() {
    if (this.isComplete()) {
      this.order.date = + new Date();
      this.isDisabled = true;
      this._orderService.addOrder(this.order).then((order) => {
        this.orderDone.emit('orderDone');
        this.isDisabled = false;
        alert('Your order has been sent ! You have the order n°' + order.json().id);
      });
    }
  }

  isValid() {
    return this.order.productOrders.length > 0;
  }

  isComplete() {
    return this.order.productOrders.length > 0 && this.order.place !== '';
  }
}
