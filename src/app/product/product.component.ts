import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/product.model';
import {ProductOrder} from '../models/productOrder.model';

@Component({
  selector: 'ssb-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() order: ProductOrder;

  constructor() { }

  ngOnInit() {
  }
}
