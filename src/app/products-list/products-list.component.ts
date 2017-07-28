import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/product.model';
import {ProductService} from '../product.service';

@Component({
  selector: 'ssb-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() products: Array<Product>;
  constructor(private _productService: ProductService) {
    this.products = [];
  }

  ngOnInit() {
    this._productService.list().subscribe((pr) => {
      this.products = this.products.concat(pr);
    });
  }

  addProduct() {
    const p: Product = {
      'id': null,
      'name': '',
      'price': 0,
      'image': '',
      'stock': 0,
      'totalPrice': 0
    };
    this._productService.addProduct(p).subscribe((res) => {
      this.products.push(res.json());
    });
  }

}
