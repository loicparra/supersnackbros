import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Order } from '../models/order.model';
import {OrderService} from '../order.service';
import {OrderStatus} from '../app.config';

@Component({
    selector: 'ssb-pending-order',
    templateUrl: './pending-order.component.html',
    styleUrls: ['./pending-order.component.css']
})
export class PendingOrderComponent implements OnInit {
    @Input() order: Order;
    @Output() validation = new EventEmitter();

    constructor(private _orderService: OrderService) { }

    ngOnInit() {
    }

    validate() {
        this._orderService.setToFinished(this.order)
            .subscribe(() => {
                this.order.status = OrderStatus.FINISHED;
                this.validation.emit(this.order);
            });
    }

}