import {ProductsComponent} from './products/products.component';
import {Routes} from '@angular/router';
import {PendingOrdersComponent} from './pending-orders/pending-orders.component';
import {HomeComponent} from './home/home.component';
import {ProductsListComponent} from "./products-list/products-list.component";

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'order',
        component: ProductsComponent
    },
    {
        path: 'ssb_admin/pendingOrders',
        component: PendingOrdersComponent
    },
    {
        path: 'ssb_admin/products',
        component: ProductsListComponent
    }
];
