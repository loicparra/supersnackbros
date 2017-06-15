import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Order} from './models/order.model';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrderService {

  constructor(private _http: Http) { }

  list(): Observable<Order[]> {
    return this._http
        .get('http://localhost:3000/orders')
        .map(res => { return res.json(); });
  }

  addOrder(order: Order) {
    return this._http
        .post('http://localhost:3000/orders', order)
        .toPromise()
        .catch((err) => {console.log(err); return Promise.reject(err); });
  }
}
