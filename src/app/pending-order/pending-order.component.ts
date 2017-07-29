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
    @Output() remove = new EventEmitter();

    constructor(private _orderService: OrderService) { }

    ngOnInit() {
    }

    validate() {
        this._orderService.setToFinished(this.order)
            .subscribe(() => {
                this.order.status = OrderStatus.FINISHED;
                this.remove.emit(this.order);
            });
    }

    cancel() {
        this._orderService.setToCanceled(this.order)
            .subscribe(() => {
                this.order.status = OrderStatus.CANCELED;
                this.remove.emit(this.order);
            });
    }

    total(): number {
        let total = 0;
        this.order.productOrders.forEach(po => total += po.quantity * po.product.price);

        return total;
    }
}
