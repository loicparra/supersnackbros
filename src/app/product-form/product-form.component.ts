import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/product.model';
import {ProductService} from '../product.service';

@Component({
  selector: 'ssb-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input() product: Product;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
  }

  setName(event: any) {
    this.product.name = event.target.value;
  }

  setStock(event: any) {
    this.product.stock = +event.target.value;
  }

  setPrice(event: any) {
    this.product.price = +event.target.value;
  }

  setTotalPrice(event: any) {
    this.product.totalPrice = +event.target.value;
  }

  updateProduct() {
    this._productService.updateProduct(this.product);
  }

}
