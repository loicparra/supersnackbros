import {Component, Input, OnInit} from '@angular/core';
import {ProductOrder} from '../models/productOrder.model';

@Component({
  selector: 'ssb-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent implements OnInit {

  @Input() productOrder: ProductOrder;
  constructor() { }

  ngOnInit() {
  }

}
