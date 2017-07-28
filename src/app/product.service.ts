import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Product} from './models/product.model';
import { Config } from './app.config';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  list(): Observable<Product[]> {
    return this._http
        .get(Config.api_url + '/products')
        .map(res => res.json());
  }

  updateProduct(product: Product) {
    return this._http
        .patch(Config.api_url + '/products/' + product.id, product)
        .toPromise()
        .catch((err) => Promise.reject(err));
  }

  addProduct(product: Product) {
    return this._http
        .post(Config.api_url + '/products', product);
  }

}
