import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Product} from './product/product.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  list(): Observable<Product[]> {
    return Observable.of([{id: 1, name: 'Coca', price: 1}, {id: 2, name: 'Reb bull', price: 1.5}]);
    /*return this._http
        .get('http://ponyracer.ninja-squad.com/api/races', {params: {status: 'PENDING'}})
        .map(res => res.json());*/
  }

}
