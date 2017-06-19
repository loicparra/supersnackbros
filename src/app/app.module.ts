import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import {ProductService} from './product.service';
import { OrderComponent } from './order/order.component';
import { MorelessComponent } from './moreless/moreless.component';
import {OrderService} from './order.service';
import { ProductOrderComponent } from './product-order/product-order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CurrentOrderComponent } from './current-order/current-order.component';
import { PendingOrderComponent } from './pending-order/pending-order.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    OrderComponent,
    MorelessComponent,
    ProductOrderComponent,
    OrderListComponent,
    CurrentOrderComponent,
    PendingOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [
      ProductService,
      OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
