import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Order} from './models/order.model';
import {Http} from '@angular/http';
import {Config, OrderStatus} from './app.config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrderService {

  constructor(private _http: Http) { }

  list(params): Observable<Order[]> {
    return this._http
        .get(Config.api_url + '/orders', {'params': params})
        .map(res => res.json());
  }

  addOrder(order: Order) {
    return this._http
        .post(Config.api_url + '/orders', order)
        .toPromise()
        .catch((err) => Promise.reject(err));
  }

  setToFinished(order: Order) {
    return this._http
        .patch(Config.api_url + '/orders/' + order.id, {'status' : OrderStatus.FINISHED});
  }

  setToCanceled(order: Order) {
    return this._http
        .patch(Config.api_url + '/orders/' + order.id, {'status' : OrderStatus.CANCELED});
  }
}
