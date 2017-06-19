import {ProductsComponent} from './products/products.component';
import {Routes} from '@angular/router';
import {OrderListComponent} from './order-list/order-list.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: ProductsComponent
    },
    {
        path: 'orders',
        component: OrderListComponent
    }
];
