import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Product} from './models/product.model';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  list(): Observable<Product[]> {
    return this._http
        .get('http://localhost:3000/products')
        .map(res => { return res.json(); });
  }

}
