import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../models/product.model';

@Component({
  selector: 'ssb-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() decrementProduct = new EventEmitter();
  @Output() incrementProduct = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  decrement() {
    this.decrementProduct.emit(this.product);
  }

  increment() {
    this.incrementProduct.emit(this.product);
  }
}
