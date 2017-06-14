import { Component, OnInit } from '@angular/core';
import {Product} from '../product/product.model';
import {ProductService} from '../product.service';

@Component({
  selector: 'ssb-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product>;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.list().subscribe((races) => this.products = races);
  }

}
